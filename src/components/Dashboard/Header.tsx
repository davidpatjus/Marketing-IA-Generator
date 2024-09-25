import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>

      <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg w-full bg-gray-50'>
        <Search />
        <input type="text" placeholder='Buscar...' className='outline-none w-full bg-gray-50' />
      </div>

      <div>
        <h2 className='bg-primary p-1 px-4 rounded-full text-white h-full py-3'>
          Rompe los limites por
          <span className='font-semibold'> $4.99/Mes</span>
        </h2>
      </div>

    </div>
  )
}

export default Header