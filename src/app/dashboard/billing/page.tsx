'use client';

import React, { useEffect, useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const creditOptions = [
  { id: "10000", credits: 10000, price: 4900 },
  { id: "20000", credits: 20000, price: 7900 },
  { id: "50000", credits: 50000, price: 15900 },
]

const Billing = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [creditOption, setCreditOption] = useState('10000');
  
  
  useEffect(() => {
    initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_KEY || '', { locale: 'es-CO' });

    const timer = setTimeout(() => {
      fetchPreferenceId();
    }, 300); // 300ms delay
  
    return () => clearTimeout(timer); // Limpia el timeout si hay un nuevo cambio
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [creditOption]);
  

const fetchPreferenceId = async () => {
  if (!creditOption) return; // Verifica que hay un valor válido de `creditOption`

  try {
    const response = await fetch('/api/mercadopago', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ creditOption }),
    });
    const data = await response.json();
    setPreferenceId(data.preferenceId);
  } catch (error) {
    console.error('Error obteniendo el preferenceId:', error);
  }
};

  return (
    <div className="h-[calc(100vh-4rem)] bg-gradient-to-br from-purple-500 via-purple-700 to-purple-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white/10 backdrop-blur-md border-purple-300/20">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-white mb-2">Elige tu recarga de créditos</CardTitle>
          <CardDescription className="text-purple-200">Selecciona la mejor opción para ti</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {creditOptions.map((option) => (
              <motion.div
                key={option.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className={`w-full h-full p-4 flex flex-col items-center justify-center ${
                    creditOption === option.id
                      ? "bg-purple-700 border-purple-400"
                      : "bg-purple-800/50 border-purple-600/50"
                  } transition-colors duration-200 hover:bg-purple-500 hover:border-purple-400`}
                  onClick={() => setCreditOption(option.id)}
                >
                  <CreditCard className="w-8 h-8 mb-2 text-purple-300" />
                  <h3 className="font-semibold text-white">{option.credits.toLocaleString()} Créditos</h3>
                  <p className="text-purple-200">${option.price.toLocaleString()}</p>
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            {preferenceId ? (
              <>
              <div id="wallet_container" className='flex flex-col items-center'>
                <p className='text-white font-semibold'>comprar {creditOption} creditos</p>
                <Wallet initialization={{ preferenceId }} />
              </div>
              </>
            ) : (
              <label className="w-full bg-purple-600 hover:bg-purple-700 text-black">
                Cargando opciones de pago...
              </label>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Billing;