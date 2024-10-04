'use client'
import React, { ReactNode, useState } from 'react'
import SideNav from '../../components/Dashboard/SideNav';
import Header from '../../components/Dashboard/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';

function Layout({ 
  children,
 }: Readonly<{ 
  children?: ReactNode; 
}>) {

  const [totalUsage, setTotalUsage] = useState<number>(0);

  return (
    <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
      <div className='bg-slate-100 h-full overflow-y-auto'>
        <div className='md:w-64 hidden md:block fixed'>
          <SideNav />
        </div>
        <div className='md:ml-64'>
          <Header />
        {children}
        </div>
      </div>
    </TotalUsageContext.Provider>
  )
}

export default Layout