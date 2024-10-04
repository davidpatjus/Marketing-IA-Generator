'use client'
import { Brain, FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import UsageTrack from './UsageTrack'

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
    <div className='h-screen relative p-5 shadow-sm border bg-white'>

      <Link className="flex items-center justify-center" href="/">
        <Brain className="h-6 w-6 text-primary" />
        <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          AIMarketer
        </span>
      </Link>
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
      <div className='absolute bottom-10 left-0 w-full'>
        <UsageTrack />
      </div>

    </div>
  )
}

export default SideNav