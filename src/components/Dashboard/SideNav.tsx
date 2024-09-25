'use client'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function SideNav() {

  const MenuList= [
    {
      name: 'Home',
      icon: Home,
      path: '/dashboard'
    },
    {
      name: 'History',
      icon: FileClock,
      path: '/dashboard/history'
    },
    {
      name: 'Billing',
      icon: WalletCards,
      path: '/dashboard/billing'
    },
    {
      name: 'Settings',
      icon: Settings,
      path: '/dashboard/settings'
    },
  ]

  const path = usePathname();

  useEffect(() => {

  }, [path])

  return (
    <div className='h-screen p-5 shadow-sm border'>

      <div className='flex justify-center '>
        <Image src={'/logo.svg'} alt='logo' width={150} height={100} />
      </div>
      <hr className='my-6 border'/>

      <div className='mt-3'>
        {MenuList.map((item, index) => (
          <div key={index} className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${ path == item.path && 'bg-primary text-white'}`}>
            <item.icon className='h-6 w-6' />
            <h2 className='text-lg font-bold'>{item.name}</h2>
          </div>
        ))}
      </div>

    </div>
  )
}

export default SideNav