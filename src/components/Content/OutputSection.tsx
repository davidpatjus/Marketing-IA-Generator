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

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput);
    }
  }, [aiOutput, isClient]);

  const handleCopy = () => {
    // Verificar si estamos en el cliente
    if (typeof window !== 'undefined' && navigator?.clipboard) {
      const copyToClipboard = async (text: string) => {
        try {
          await navigator.clipboard.writeText(text);
          alert('Texto copiado al portapapeles!');
        } catch (error) {
          console.error('Error al copiar al portapapeles:', error);
        }
      };

      copyToClipboard(editorRef.current.getInstance().getMarkdown());
    } else {
      console.error("La API de portapapeles no está disponible en el servidor.");
    }
  };

  if (!isClient) {
    return null;
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
