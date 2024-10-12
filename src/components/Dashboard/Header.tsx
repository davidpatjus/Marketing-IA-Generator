import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>

      <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg w-full bg-gray-50'>
        <Search />
        <input type="text" placeholder='Buscar...' className='outline-none w-full bg-gray-50' />
      </div>

      <div className='flex gap-3 items-center'>
        <h2 className='bg-primary p-1 px-4 rounded-full text-white h-full py-3'>
          Recarga creditos desde
          <span className='font-semibold'> $1 USD</span>
        </h2>
        <UserButton  />
      </div>

    </div>
  )
}

export default Header