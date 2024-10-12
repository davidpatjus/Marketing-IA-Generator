import React from 'react'
import { UserProfile } from '@clerk/nextjs'

function Settings() {
  return (
    <div className='flex items-center justify-center h-[calc(100vh-6rem)]'>
        <UserProfile routing="hash" />
    </div>
   )
}

export default Settings