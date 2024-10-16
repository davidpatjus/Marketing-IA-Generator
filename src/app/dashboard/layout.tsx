'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import SideNav from '../../components/Dashboard/SideNav';
import Header from '../../components/Dashboard/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { TotalCreditsContext } from '../(context)/TotalCreditsContext';
import { SelectedAIResponseContext } from '@/app/(context)/SelectedAIResponse';
import { currentUserID } from '../(context)/currentUserID';
import { useUser } from '@clerk/nextjs';
import Loading from '@/components/ui/Loading';


function Layout({ 
  children,
 }: Readonly<{ 
  children?: ReactNode; 
}>) {

  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const [totalCredits, setTotalCredits] = useState<number>(0);
  const [ selectedAIResponse, setSelectedAIResponse ] = useState<string>('');
  const [ userID, setUserID ] = useState<number>(0);


  useEffect(() => {
    const getUserData = async () => {
      if (user && user.primaryEmailAddress?.emailAddress) {
        try {
          const response = await fetch('/api/maxUserCredits', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user: user.primaryEmailAddress.emailAddress,
            }),
          });
    
          if (!response.ok) {
            throw new Error('Error fetching or creating user');
          }
    
          const data = await response.json();
          console.log('User Data:', data);
          
          setUserID(data.id);  // Actualizar el ID del usuario desde la respuesta
          setTotalUsage(data.credits || 0);  // Actualizar el uso total desde la respuesta
          setTotalCredits(data.maxCreditUsage || 0);  // Actualizar los créditos totales desde la respuesta
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    getUserData();
  }, [user]);

  if (loading) return <Loading />;

  return (
    <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
    <TotalCreditsContext.Provider value={{totalCredits,setTotalCredits}}>
    <SelectedAIResponseContext.Provider value={{selectedAIResponse, setSelectedAIResponse}}>
    <currentUserID.Provider value={{userID, setUserID}}>
      <div className='bg-slate-100 h-full overflow-y-auto'>
        <div className='md:w-64 hidden md:block fixed'>
          <SideNav />
        </div>
        <div className='md:ml-64'>
          <Header />
        {children}
        </div>
      </div>
    </currentUserID.Provider>
    </SelectedAIResponseContext.Provider>
    </TotalCreditsContext.Provider>
    </TotalUsageContext.Provider>
  )
}

export default Layout