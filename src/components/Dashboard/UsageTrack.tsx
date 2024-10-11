'use client'
import React, { useContext, useEffect } from 'react'
import { Button } from '../ui/button'
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { AIOutput, users } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { HISTORY } from '@/app/dashboard/history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { TotalCreditsContext } from '@/app/(context)/TotalCreditsContext';


 function UsageTrack() {

    const { user } = useUser();

    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext)
		const { totalCredits } = useContext(TotalCreditsContext)

		useEffect(() => {
			GetData()
		}, [totalUsage])

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
			const updateCredits = async (total: number) => {
				await db.update(users).set({credits: total}).where(eq(users.user, user?.primaryEmailAddress?.emailAddress || '')) 
			}
			updateCredits(total);
			setTotalUsage(total)
	}
	

	
  return (
    <div className='m-5'>

        <div className=' bg-primary text-white rounded-lg p-3'>

            <h2 className='font-medium'> CREDITOS </h2>

            <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                <div 
                    className='h-2 bg-white rounded-full' 
                    style={{
                        width: (totalUsage / totalCredits) * 100 + '%'
                    }}
                ></div>
            </div>
            <h2 className='text-sm my-2'>{ totalUsage }/{totalCredits} Creditos Usados</h2>
        </div>
        <Button variant={'secondary'} className='w-full my-3 p-4 font-bold text-primary text-lg'>Recargar</Button>
    </div>
  )
}

export default UsageTrack