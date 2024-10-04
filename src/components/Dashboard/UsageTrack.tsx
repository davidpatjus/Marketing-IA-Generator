'use client'
import React, { useContext, useEffect } from 'react'
import { Button } from '../ui/button'
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { HISTORY } from '@/app/dashboard/history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';

 function UsageTrack() {

    const { user } = useUser();

    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext)

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        user && GetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    const GetData = async () => {
        {/* @ts-expect-error err */}
        const result: HISTORY[] = await db.select().from(AIOutput)
        .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress || ''));

        GetTotalUsage(result)
    }

    const GetTotalUsage = (result: HISTORY[]) => {
        let total: number = 0;
        result.forEach(Element => {
            total = total + Number(Element.aiResponse?.length) 
        });
        setTotalUsage(total)
        console.log(total)
    }

  return (
    <div className='m-5'>

        <div className=' bg-primary text-white rounded-lg p-3'>

            <h2 className='font-medium'> CREDITOS </h2>

            <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                <div 
                    className='h-2 bg-white rounded-full' 
                    style={{
                        width: (totalUsage / 10000) * 100 + '%'
                    }}
                ></div>
            </div>
            <h2 className='text-sm my-2'>{ totalUsage }/10.000 Creditos Usados</h2>
        </div>
        <Button variant={'secondary'} className='w-full my-3 p-4 font-bold text-primary text-lg'>Recargar</Button>
    </div>
  )
}

export default UsageTrack