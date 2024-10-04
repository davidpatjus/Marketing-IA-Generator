'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button'; // Asegúrate de tener este componente
import Modal from '@/components/ui/Modal'; // Importar el nuevo componente Modal

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

function History() {
  const [aiOutputs, setAiOutputs] = useState<HISTORY[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const [selectedResponse, setSelectedResponse] = useState<string | null>(null); // Para el modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Para controlar el estado del modal

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          const response = await fetch(`/api/aiOutputs?createdBy=${user.primaryEmailAddress?.emailAddress}`);
          const data = await response.json();
          console.log(data);
          setAiOutputs(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [user]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Texto copiado al portapapeles!');
    } catch (error) {
      console.error('Error al copiar al portapapeles:', error);
    }
  };

  const handleResponseClick = (response: string) => {
    setSelectedResponse(response); // Mostrar respuesta completa en el modal
    setIsModalOpen(true); // Abrir el modal
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-white">
      <h1 className="text-3xl font-bold ">HISTORIAL</h1>
      <h2 className="text-gray-500 text-lg">Busca entre tu contenido anterior generado</h2>
      <table className="min-w-full table-auto mt-4">
        <thead>
          <tr className='bg-gray-100 border'>
            <th className="px-4 py-4 text-center">Plantilla</th>
            <th className="px-4 py-4 text-center">Respuesta IA</th>
            <th className="px-4 py-4 text-center">Fecha</th>
            <th className="px-4 py-4 text-center">Letras</th>
            <th className="px-4 py-4 text-center">Copiar</th>
          </tr>
        </thead>
        <tbody>
          {aiOutputs.map((output) => (
            <tr key={output.id} className="text-center">
              <td className="border-b px-4 py-3 font-medium uppercase max-w-xs">{output.templateSlug.replace(/-/g, ' ')}</td>
              <td
                className="border-b px-4 py-3 truncate max-w-xs cursor-pointer font-semibold"
                onClick={() => handleResponseClick(output.aiResponse)}
              >
                {output.aiResponse}
              </td>
              <td className="border-b px-4 py-3 font-semibold">{output.createdAt}</td>
              <td className="border-b px-4 py-3 font-semibold">{output.aiResponse.length}</td>
              <td className="border-b px-4 py-3">
                <Button onClick={() => copyToClipboard(output.aiResponse)}>Copiar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para mostrar la respuesta completa */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p className="mt-4">{selectedResponse}</p>
      </Modal>
    </div>
  );
}

export default History;
