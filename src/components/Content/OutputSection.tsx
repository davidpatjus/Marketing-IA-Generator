import React, { useEffect, useRef, useState } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '../ui/button';
import { Copy } from 'lucide-react';

interface PROPS {
  aiOutput: string;
}

function OutputSection({ aiOutput }: PROPS) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editorRef = useRef<any>(null); // Mantén el tipo any si no tienes el tipo correcto de TOAST UI Editor
  const [isClient, setIsClient] = useState(false);

  // Este hook solo se ejecutará cuando el componente esté montado en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput);
    }
  }, [aiOutput, isClient]);

  if (!isClient) {
    // Mientras no estemos en el cliente, retornamos un fragmento vacío o un loading
    return null;
  }

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Tu Resultado</h2>
        <Button
          className="flex gap-2"
          onClick={() => {
            const copyToClipboard = async (text: string) => {
              try {
                await navigator.clipboard.writeText(text);
                alert('Texto copiado al portapapeles!');
              } catch (error) {
                console.error('Error al copiar al portapapeles:', error);
              }
            };
          

            copyToClipboard(editorRef.current.getInstance().getMarkdown());
          }}
        >
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
