import Header from '@/components/Dashboard/Header';
import SideNav from '@/components/Dashboard/SideNav';
import React from 'react'

function layout({ 
  children,
 }: Readonly<{ 
  children?: React.ReactNode; 
}>) {
  return (
    <div>
      <div className='md:w-64 hidden md:block fixed'>
        <SideNav />
      </div>
      <div className='md:ml-64'>
        <Header />
      {children}
      </div>
    </div>
  )
}

export default layout