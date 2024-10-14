import { db } from "@/utils/db"; 
import { users } from "@/utils/schema"; 
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {

  // Capturar la notificación enviada por Mercado Pago
  const body = await req.json();
  const { data, type } = body;

  if (type === "payment") {
    const paymentId = data.id;

    try {
      // Consultar el estado del pago en la API de Mercado Pago
      const paymentStatus = await getPaymentStatus(paymentId);

      if (paymentStatus === "approved") {
        // Obtener los detalles adicionales del pago
        const { creditOption, userId } = await getPaymentDetails(paymentId);

        // Determinar la cantidad de créditos a agregar en base a la opción de crédito
        let creditsToAdd = 0;
        switch (creditOption) {
          case '10000':
            creditsToAdd = 10000;
            break;
          case '20000':
            creditsToAdd = 20000;
            break;
          case '50000':
            creditsToAdd = 50000;
            break;
          default:
            return new Response(JSON.stringify({ message: 'Opción de crédito inválida' }), { status: 400 });
        }

        //obtener los creditos actuales del usuario y agregar los creditos comprados
        const user = await db.select().from(users).where(eq(users.id, userId));
        const userCredits = user[0].maxCreditUsage || 30000;
        const newCredits = userCredits + creditsToAdd;


        // Actualizar los créditos del usuario en la base de datos
        await db
          .update(users)
          .set({ maxCreditUsage: newCredits }) // Aumenta los créditos
          .where(eq(users.id, userId)); // Asume que tienes el `userId` en la tabla `users`


        // Responder a Mercado Pago que la notificación fue procesada correctamente
          return new Response(JSON.stringify({ message: 'Créditos actualizados correctamente' }), { status: 200 });
      } else {
        return new Response(JSON.stringify({ message: 'El pago no fue aprobado' }), { status: 400 });
      }
    } catch (error) {
      console.error('Error procesando el pago:', error);
      return new Response(JSON.stringify({ message: 'Error procesando el pago' }), { status: 500 });
    }
  } else {
    return new Response(JSON.stringify({ message: 'Tipo de notificación no soportado' }), { status: 400 });
  }
}

// Función para consultar el estado del pago desde la API de Mercado Pago
const getPaymentStatus = async (paymentId: string) => {

  const url = `https://api.mercadopago.com/v1/payments/${paymentId}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_SECRET_MERCADO_PAGO_ACCESS_TOKEN}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      return data.status;
    } else {
      throw new Error(`Error en la respuesta de Mercado Pago: ${data.message}`);
    }
  } catch (error) {
    console.error('Error consultando el estado del pago:', error);
    throw error;
  }
};

// Función para obtener los detalles del pago, como el userId y creditOption
const getPaymentDetails = async (paymentId: string) => {
  const url = `https://api.mercadopago.com/v1/payments/${paymentId}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_SECRET_MERCADO_PAGO_ACCESS_TOKEN}`,
    },
  });

  const data = await response.json();

  const creditOption = data.metadata.credit_option;
  const userId = data.metadata.user_id;

  return { creditOption, userId };
};
