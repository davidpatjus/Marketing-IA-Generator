'use client'

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import Loading from '@/components/ui/Loading';
import OutputSection from '@/components/Content/OutputSection';

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
  const [selectedResponse, setSelectedResponse] = useState<string | null>(null);

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

  const copyToClipboard = (text: string) => {
    try {
      // Crear un elemento <textarea> temporal
      const textArea = document.createElement('textarea');
      textArea.value = text;
  
      // Evitar que el textarea sea visible
      textArea.style.position = 'fixed';  // Evita el desplazamiento de la página
      textArea.style.opacity = '0';
  
      // Agregar el <textarea> al DOM
      document.body.appendChild(textArea);
  
      // Seleccionar el contenido del <textarea>
      textArea.focus();
      textArea.select();
  
      // Ejecutar el comando de copiar
      document.execCommand('copy');
  
      // Eliminar el <textarea> del DOM
      document.body.removeChild(textArea);
  
      alert('Texto copiado al portapapeles!');
    } catch (error) {
      console.error('Error al copiar al portapapeles:', error);
    }
  };
  

  const handleResponseClick = (response: string) => {
    setSelectedResponse(response);
  };

  if (loading) return <Loading />;

  return (
    <div className="p-4 sm:p-6 bg-slate-100">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">HISTORIAL</h1>
      <h2 className="text-gray-500 text-base sm:text-lg mb-4">Busca entre tu contenido anterior generado, toca en la respuesta para editarla</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-4 py-2 text-left text-xs sm:text-sm">Plantilla</th>
              <th className="px-4 py-2 text-left text-xs sm:text-sm">Respuesta IA</th>
              <th className="px-4 py-2 text-left text-xs sm:text-sm">Fecha</th>
              <th className="px-4 py-2 text-left text-xs sm:text-sm">Letras</th>
              <th className="px-4 py-2 text-left text-xs sm:text-sm">Acción</th>
            </tr>
          </thead>
          <tbody>
            {aiOutputs.map((output) => (
              <tr key={output.id} className="border-b bg-gray-100 hover:bg-gray-200">
                <td 
                  className="px-4 py-2 text-xs sm:text-sm font-medium uppercase cursor-pointer" 
                  onClick={() => handleResponseClick(output.aiResponse)}
                >
                  {output.templateSlug.replace(/-/g, ' ')}
                </td>
                <td 
                  className="px-4 py-2 text-xs sm:text-sm font-semibold cursor-pointer truncate max-w-[150px] sm:max-w-xs"
                  onClick={() => handleResponseClick(output.aiResponse)}
                >
                  {output.aiResponse}
                </td>
                <td className="px-4 py-2 text-xs sm:text-sm">{output.createdAt}</td>
                <td className="px-4 py-2 text-xs sm:text-sm">{output.aiResponse.length}</td>
                <td className="px-4 py-2">
                  <Button 
                    onClick={() => copyToClipboard(output.aiResponse)}
                    className="text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2 cursor-pointer"
                  >
                    Copiar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='m-2 md:m-4 md:p-4 shadow-xl rounded-md bg-slate-200'>
      <OutputSection aiOutput={selectedResponse || ''} />      
      </div>

    </div>
  );
}

export default History;