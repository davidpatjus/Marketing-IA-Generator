'use client';
import React, { useEffect, useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

const Billing = () => {
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    // Inicializa Mercado Pago con la clave pública
    initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_KEY || '', { locale: 'es-CO' });

    // Llama a la API del backend para obtener el preferenceId
    fetchPreferenceId();
  }, []);

  // Llama al backend para obtener el preferenceId
  const fetchPreferenceId = async () => {
    try {
      const response = await fetch('/api/mercadopago', {
        method: 'POST',
      });
      const data = await response.json();
      console.log(data)
      setPreferenceId(data.preferenceId); // Almacena el preferenceId
    } catch (error) {
      console.error('Error obteniendo el preferenceId:', error);
    }
  };

  return (
    <div>
      <div id="wallet_container"></div>
      {/* Solo renderiza el componente Wallet cuando ya tienes el preferenceId */}
      {preferenceId && (
        <Wallet initialization={{ preferenceId }} />
      )} <div>loading</div>
    </div>
  );
};

export default Billing;
