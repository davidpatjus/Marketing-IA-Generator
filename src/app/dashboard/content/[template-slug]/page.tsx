'use client'
import templates from '@/app/(data)/Templates';
import FormSection from '@/components/Content/FormSection';
import OutputSection from '@/components/Content/OutputSection';
import { TEMPLATE } from '@/components/Dashboard/TemplateSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

interface PROPS{
    params: {
        'template-slug': string
    }
}

function CreateNewContent(props: PROPS) {

    const selectedTemplate:TEMPLATE|undefined = templates?.find(template => template.slug === props.params['template-slug']);

    const generateAIContent = (formData:any) => {};

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
          />

          {/* OutputSection */}
          <div className='col-span-2'>
            <OutputSection />
          </div>

      </div>
    </div>
  )
}

export default CreateNewContent;