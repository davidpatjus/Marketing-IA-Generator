'use client'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function SideNav() {

  const MenuList= [
    {
      name: 'Inicio',
      icon: Home,
      path: '/dashboard'
    },
    {
      name: 'Historial',
      icon: FileClock,
      path: '/dashboard/history'
    },
    {
      name: 'Facturación',
      icon: WalletCards,
      path: '/dashboard/billing'
    },
    {
      name: 'Configuración',
      icon: Settings,
      path: '/dashboard/settings'
    },
  ]

  const path = usePathname();

  useEffect(() => {

  }, [path])

  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>

      <div className='flex justify-center '>
        <Image src={'/logo.svg'} alt='logo' width={150} height={100} />
      </div>
      <hr className='my-6 border'/>

      <div className='mt-3'>
        {MenuList.map((item, index) => (
          <Link key={index} href={item.path} >
            <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${ path == item.path && 'bg-primary text-white'}`}>
              <item.icon className='h-6 w-6' />
              <h2 className='text-lg font-bold'>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default SideNav