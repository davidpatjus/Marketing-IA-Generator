'use client'
import templates from '@/app/(data)/Templates';
import FormSection from '@/components/Content/FormSection';
import OutputSection from '@/components/Content/OutputSection';
import { TEMPLATE } from '@/components/Dashboard/TemplateSection';
import { Button } from '@/components/ui/button';
import { chatSession } from '@/utils/AiModal';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'

interface PROPS{
    params: {
        'template-slug': string
    }
}

function CreateNewContent(props: PROPS) {

    const selectedTemplate:TEMPLATE|undefined = templates?.find(template => template.slug === props.params['template-slug']);

    const [loading, setLoading] = useState(false);
    const [aiOutput, setAiOutput] = useState<string>('');
    
    const generateAIContent = async (formData: any) => {
      try {
        setLoading(true);
  
        const SelectedPrompt = selectedTemplate?.aiPrompt;
        if (!SelectedPrompt) {
          throw new Error("No AI prompt found for the selected template.");
        }
  
        const FinalAIPrompt = JSON.stringify(formData) + ', ' + SelectedPrompt;
  
        const result = await chatSession.sendMessage(FinalAIPrompt);
  
        if (result.response.candidates && result.response.candidates.length > 0) {
          setAiOutput(result.response.candidates[0].content.parts[0].text || 'Error: No content found in the AI response.');
        } else {
          console.error("No candidates found in the AI response.");
        }
      } catch (error) {
        console.error("Error generating AI content:", error);
      } finally {
        setLoading(false);
      }
    }

  return (
    <div className='p-6'>

      {/* Back Button */}
      <Link href={"/dashboard"}>
      <Button > <ArrowLeft /> Volver </Button>
      </Link>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5 h-screen'>

          {/* FormSection */}
          <FormSection 
            selectedTemplate={selectedTemplate} 
            userFormInput={(e:any) => generateAIContent(e)}
            loading={loading}
          />

          {/* OutputSection */}
          <div className='col-span-2'>
            <OutputSection aiOutput={aiOutput} />
          </div>

      </div>
    </div>
  )
}

export default CreateNewContent;