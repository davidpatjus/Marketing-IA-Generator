'use client'
import React, { useState } from "react";
import { TEMPLATE } from "../Dashboard/TemplateSection";
import Image from "next/image";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Loader2Icon } from "lucide-react";

interface PROPS {
  selectedTemplate?: TEMPLATE;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userFormInput: any;
  loading: boolean;
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [formData, setFormData] = useState<any>();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (e:any) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className="p-5 shadow-lg border rounded-lg bg-white h-max">

      <Image
        src={selectedTemplate?.icon || ''}
        alt={selectedTemplate?.name || "Template Icon"}
        width={70}
        height={70}
      />
      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((form, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{form.label}</label>
            {form.field == "input" ? (
              <Input name={form.name} required={form?.required} onChange={handleInputChange} />
            ) : form.field == "textarea" ? (
              <Textarea name={form.name} required={form?.required} onChange={handleInputChange} />
            ) : null}
          </div>
        ))}
        <Button 
          type="submit" 
          disabled={loading}
          className="w-full py-6"
        >
          {loading ? <Loader2Icon className="animate-spin" /> : 'Generar Contenido'}
        </Button>
      </form>
      
    </div>
  );
}

export default FormSection;
