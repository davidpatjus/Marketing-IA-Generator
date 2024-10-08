'use client'
import React, {useEffect, useRef} from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '../ui/button';
import { Copy } from 'lucide-react';

interface PROPS{
  aiOutput: string
}

function OutputSection( {aiOutput}: PROPS ) {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editorRef:any = useRef();

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput])

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Tu Resultado</h2>
        <Button className='flex gap-2' onClick={() => {
          navigator.clipboard.writeText(editorRef.current.getInstance().getMarkdown());
          alert('Copiado al portapapeles')
          }}> 
          <Copy className='w-4 h-4' /> Copiar 
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
  )
}

export default OutputSection;