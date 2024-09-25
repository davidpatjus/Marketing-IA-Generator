import { Search } from 'lucide-react'
import React from 'react'

interface SearchSectionProps {
  onSearchInput: (input: string) => void;
}

function SearchSection({ onSearchInput }: SearchSectionProps) {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-purple-900 flex flex-col justify-center items-center text-white'>
      <h2 className='text-3xl font-bold'>Buscar Plantillas</h2>
      <p>¿Que te gustaria crear hoy?</p>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]'>
          <Search className='text-primary'/>
          <input 
            type="text" 
            placeholder='Buscar'
            onChange={(event) => onSearchInput(event.target.value)} 
            className='bg-transparent w-full outline-none text-black' 
          />
        </div>
      </div>
    </div>
  )
}

export default SearchSection