import type { NextApiRequest, NextApiResponse } from "next";
import { MercadoPagoConfig, Preference } from "mercadopago";

export async function POST(req: NextApiRequest, res: NextApiResponse) {

	// Configura el token de acceso desde tus variables de entorno
	const client = new MercadoPagoConfig({
		accessToken: process.env.NEXT_SECRET_MERCADO_PAGO_ACCESS_TOKEN || "",
	});

	const preference = new Preference(client);

	if (req.method !== "POST") {
		return res.status(405).json({ error: "Método no permitido" });
	}

	try {
      // Crea la preferencia con los detalles del producto
      const response = await preference.create({
        body: {
          payment_methods: {
            excluded_payment_methods: [],
            excluded_payment_types: [],
            installments: 2, // Máximo número de cuotas permitidas
          },
          items: [
            {
              title: "Recarga_creditos",
              quantity: 1,
              unit_price: 4900, // Precio del producto
              id: "19770510", // ID del producto
            },
          ],
        },
      });

			console.log(response)
      const preferenceId = response.id;

      // Enviar el preferenceId al frontend
      return res.status(200).json({ preferenceId });
    } catch (error) {
      console.error("Error creando la preferencia:", error);
      res.status(500).json({ error: "Error creando la preferencia" });
    }
}
