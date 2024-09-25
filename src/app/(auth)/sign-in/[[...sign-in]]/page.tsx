import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
  <div className='flex justify-center items-center h-screen bg-gradient-to-tr from-orange-400 to-yellow-200'>
    <SignIn />
  </div>
)
}