import React from 'react'

export default function About() {
  return (
    <div className='container mx-auto px-4 mb-[3rem]'>
         <div className='w-full'> 
            <div className='mt-[3rem] md:mt-[8rem] mb-[2rem]'>
                <h2 className='text-3xl md:text-5xl font-bold font-mono text-center'>Trusted by develpoers across the world</h2>
                <p className='text-xl font-thin text-center mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, incidunt. Obcaecati reprehenderit impedit reiciendis, ratione unde facilis, quasi autem quibusdam illum sed veritatis maiores ullam hic fuga magnam.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-3 md:gap-1'>
                <div className='border-gray-300 border rounded flex flex-col items-center justify-center py-[1.5rem] shadow-lg shadow-black/10'>
                    <p className='text-indigo-600 text-5xl font-bold'>100%</p>
                    <span className='text-slate-500 text-sm capitalize'>completion</span>
                </div>
                <div className='border-gray-300 border rounded flex flex-col items-center justify-center py-[1.5rem] shadow-lg shadow-black/10'>
                    <p className='text-indigo-600 text-5xl font-bold'>24/7</p>
                    <span className='text-slate-500 text-sm capitalize'>Delivery</span>
                </div>
                <div className='border-gray-300 border rounded flex flex-col items-center justify-center py-[1.5rem] shadow-lg shadow-black/10'>
                    <p className='text-indigo-600 text-5xl font-bold'>100k</p>
                    <span className='text-slate-500 text-sm capitalize'>Transactions</span>
                </div>
            </div>
         </div>
    </div>
  )
}
