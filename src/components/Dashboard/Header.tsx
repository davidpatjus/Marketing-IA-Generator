import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center'>

      <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg'>
        <Search />
        <input type="text" placeholder='Buscar...' className='outline-none' />
      </div>

      <div>
        <h2 className='bg-primary p-1 px-2 rounded-full text-xs text-white'>
          Rompe los limites por 
          <span className='font-bold'>$4.99/Mes</span>
        </h2>
      </div>

    </div>
  )
}

export default Header