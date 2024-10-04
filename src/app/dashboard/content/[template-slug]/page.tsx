'use client'
import templates from '@/app/(data)/Templates';
import FormSection from '@/components/Content/FormSection';
import OutputSection from '@/components/Content/OutputSection';
import { TEMPLATE } from '@/components/Dashboard/TemplateSection';
import { Button } from '@/components/ui/button';
import { chatSession } from '@/utils/AiModal';
import React, { useContext, useState } from 'react'
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { db } from '@/utils/db';
import { useUser } from '@clerk/nextjs';
import moment from 'moment'
import { AIOutput } from '@/utils/schema';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { useRouter } from 'next/navigation';

interface PROPS{
    params: {
        'template-slug': string
    }
}

function CreateNewContent(props: PROPS) {

    const selectedTemplate:TEMPLATE|undefined = templates?.find(template => template.slug === props.params['template-slug']);

    const [loading, setLoading] = useState(false);
    const [aiOutput, setAiOutput] = useState<string>('');
    const { user } = useUser();
    const { totalUsage } = useContext(TotalUsageContext);
    const router = useRouter();
    
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const generateAIContent = async (formData: any) => {

      if (totalUsage >= 10000) {
        alert("Has utilizado el maximo de creditos disponibles. Por favor, actualiza tu plan.");
        router.push('/dashboard/billing');
        return;
      }

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
          await saveInDb(JSON.stringify(formData), selectedTemplate?.slug, result.response.candidates[0].content.parts[0].text || 'Error: No content found in the AI response.');
        } else {
          console.error("No candidates found in the AI response.");
        }
      } catch (error) {
        console.error("Error generating AI content:", error);
      } finally {
        setLoading(false);
      }
    }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const saveInDb = async (formData:any, slug:any, aiResp:string) => {
      const result = await db.insert(AIOutput).values({
        formData: formData,
        templateSlug: slug,
        aiResponse: aiResp,
        createdBy: user?.primaryEmailAddress?.emailAddress || 'Unknown',
        createdAt: moment().format('DD/MM/yyyy'),
      })
      console.log(result);
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
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
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