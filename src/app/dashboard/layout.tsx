import React from 'react'
import SideNav from '../../components/Dashboard/SideNav';
import Header from '../../components/Dashboard/Header';

function layout({ 
  children,
 }: Readonly<{ 
  children?: React.ReactNode; 
}>) {
  return (
    <div className='bg-slate-100 h-full overflow-y-auto'>
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