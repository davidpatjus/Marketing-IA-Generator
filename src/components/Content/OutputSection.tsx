import React, { useEffect, useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '../ui/button';
import { Copy } from 'lucide-react';

interface PROPS {
  aiOutput: string;
}

function OutputSection({ aiOutput }: PROPS) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editorRef = useRef<any>(null); 
  const [isClient, setIsClient] = useState(false);
  const [markdownContent, setMarkdownContent] = useState('');
  const [copyTriggered, setCopyTriggered] = useState(false);

  // Se asegura de que el componente esté montado en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Actualiza el contenido del editor cuando se actualiza `aiOutput`
  useEffect(() => {
    if (isClient && editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput);
      setMarkdownContent(aiOutput); // Guarda el contenido actual del markdown
    }
  }, [aiOutput, isClient]);

  // Maneja el copiado al portapapeles
  useEffect(() => {
    if (copyTriggered && markdownContent) {
      const copyToClipboard = async () => {
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
          try {
            await navigator.clipboard.writeText(markdownContent);
            alert('Texto copiado al portapapeles!');
          } catch (error) {
            console.error('Error al copiar al portapapeles:', error);
          }
        } else {
          console.error("La API de portapapeles no está disponible.");
        }
      };

      copyToClipboard();
      setCopyTriggered(false); // Restablecer el estado después de copiar
    }
  }, [copyTriggered, markdownContent]);

  const handleCopy = () => {
    setCopyTriggered(true); // Indicar que se ha activado la acción de copia
  };

  if (!isClient) {
    return null; // Retorna null si no está en el cliente
  }

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Tu Resultado</h2>
        <Button className="flex gap-2" onClick={handleCopy}>
          <Copy className="w-4 h-4" /> Copiar
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Tu contenido aparecerá aquí"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
      />
    </div>
  );
}

export default OutputSection;
