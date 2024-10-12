'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '../ui/button';
import { Copy } from 'lucide-react';

interface PROPS {
  aiOutput: string;
}

function OutputSection({ aiOutput }: PROPS) {
  const editorRef = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);
  const [markdownContent, setMarkdownContent] = useState('');
  const [copyTriggered, setCopyTriggered] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput);
      setMarkdownContent(aiOutput);
    }
  }, [aiOutput, isClient]);

  useEffect(() => {
    if (copyTriggered && markdownContent && isClient) {
      const copyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(markdownContent);
          alert('Texto copiado al portapapeles!');
        } catch (error) {
          console.error('Error al copiar al portapapeles:', error);
        }
      };

      copyToClipboard();
      setCopyTriggered(false);
    }
  }, [copyTriggered, markdownContent, isClient]);

  const handleCopy = () => {
    setCopyTriggered(true);
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
