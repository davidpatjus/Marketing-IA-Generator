import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

export async function POST(req: NextRequest) {

	// Configura el token de acceso desde tus variables de entorno
	const client = new MercadoPagoConfig({
		accessToken: process.env.NEXT_SECRET_MERCADO_PAGO_ACCESS_TOKEN || "",
	});

	const preference = new Preference(client);

  if (req.method !== "POST") {
    return NextResponse.json({ error: "Método no permitido" }, { status: 405 });
  }

  try {
    const { creditOption } = await req.json(); // Recibe la opción de recarga desde el frontend
    
    let unitPrice = 0;
    let title = "";
    
    // Define los diferentes precios y títulos según la opción de recarga
    switch (creditOption) { 
      case '10000':
        unitPrice = 4900;
        title = "Recarga de 10000 Créditos";
        break;
      case '20000':
        unitPrice = 7900;
        title = "Recarga de 20000 Créditos";
        break;
      case '50000':
        unitPrice = 15900;
        title = "Recarga de 50000 Créditos";
        break;
      default:
        return NextResponse.json({ error: "Opción de recarga inválida" }, { status: 400 });
    } 
  
      // Crea la preferencia con los detalles del producto
      const response = await preference.create({
        body: {
          payment_methods: {
            excluded_payment_methods: [],
            excluded_payment_types: [],
            installments: 1, // Máximo número de cuotas permitidas
          },
          items: [
            {
              title, // Título del producto
              quantity: 1,
              unit_price: unitPrice, // Precio del producto
              id: "creditsAIMarketer", // ID del producto
            },
          ],
          metadata: {
            title, // Título del producto
            creditOption, // Opción de recarga
            unitPrice, // Precio unitario
          }
        },
      });

			console.log(response)
      const preferenceId = response.id;

			// Enviar el preferenceId al frontend
			return NextResponse.json({ preferenceId }, { status: 200 });
    } catch (error) {
			console.error("Error creando la preferencia:", error);
			return NextResponse.json({ error: "Error creando la preferencia" }, { status: 500 });
    }
}
