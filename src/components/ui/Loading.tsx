import { useEffect, useState } from 'react'

export default function Loading() {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length >= 3 ? '' : prevDots + '.'))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-screen bg-slate-100 ">
     <div className="text-center">
        <div className="flex space-x-2 mb-4">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full bg-black"
              style={{
                animation: `pulse 1.5s infinite ${index * 0.15}s`,
              }}
            ></div>
          ))}
        </div>
        <p className="text-black text-xl font-semibold">Loading{dots}</p>
      </div>
      <style >{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  )
}