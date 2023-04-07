import React from 'react'
import {BsCheck2} from "react-icons/bs"

export default function Pricing() {
  return (
    <>
    <div name="pricing" className='w-full min-h-[500px] bg-slate-900 relative'>

        {/* overlay  */}
        <div className='container mx-auto px-4 absolute inset-0'>
            <div className='text-white mt-[5rem]'>
               <h4 className='text-center text-gray-400 uppercase tracking-wider font-semibold text-2xl mb-[1rem]'>Pricing</h4>
                <h2 className='text-3xl sm:text-4xl text-center font-bold  md:text-5xl mb-[1rem]'>The Right Price for your Research</h2>
                <p className='text-gray-400 text-center text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor explicabo voluptatibus magni repellat, aliquid beatae odio expedita fuga odit! Consectetur.</p>
            </div>
        </div>
    </div>
    <div className='grid md:grid-cols-2 max-w-[65rem] mx-auto px-4 gap-[2rem] mt-[-10rem] lg:mt-[-15rem] z-10 relative mb-[5rem]'>   
        {/* pricing card one */}
        <div className='px-5 py-6 rounded-lg shadow-xl shadow-black/30 bg-white'>
            <div>
                <span className='bg-indigo-200 text-indigo-900 px-2 py-1 rounded-full text-xs'>STANDARD</span>
                <h2 className='text-5xl font-bold mt-3 mb-[2rem]'>$49<span className='text-lg font-semibold'>/mo</span></h2>
            </div>
            <div className='mb-[1.5rem]'>
                <p className='font-thin text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto laudantium optio aliquam.</p>
            </div>
            <div>
                <ul className='flex flex-col space-y-5'>
                    <li className='flex items-center gap-4'>
                        <div>
                            <BsCheck2 size={30} color='green' />
                        </div>
                        <div>
                            <span>Lorem ipsum dolor sit.</span>
                        </div>
                    </li>
                    <li className='flex items-center gap-4'>
                        <div>
                            <BsCheck2 size={30} color='green' />
                        </div>
                        <div>
                            <span>Lorem ipsum dolor sit. Lorem, ipsum dolor.</span>
                        </div>
                    </li>
                    <li className='flex items-center gap-4'>
                        <div>
                            <BsCheck2 size={30} color='green' />
                        </div>
                        <div>
                            <span>Lorem ipsum dolor sit. Lorem, ipsum.</span>
                        </div>
                    </li>
                    <li className='flex items-center gap-4'>
                        <div>
                            <BsCheck2 size={30} color='green' />
                        </div>
                        <div>
                            <span>Lorem ipsum dolor sit.</span>
                        </div>
                    </li>
                    <li className='flex items-center gap-4'>
                        <div>
                            <BsCheck2 size={30} color='green' />
                        </div>
                        <div>
                            <span>Lorem ipsum</span>
                        </div>
                    </li>
                </ul>
                <button className='bg-slate-900 text-white px-5 py-3 rounded-md w-full mt-8'>Get Started</button>
            </div>
        </div>


        {/* pricing card two */}
        <div className='px-5 py-6 rounded-lg shadow-xl shadow-black/30 bg-white'>
            <div>
                <span className='bg-indigo-200 text-indigo-900 px-2 py-1 rounded-full text-xs uppercase'>Premium</span>
                <h2 className='text-5xl font-bold mt-3 mb-[2rem]'>$89<span className='text-lg font-semibold'>/mo</span></h2>
            </div>
            <div className='mb-[1.5rem]'>
                <p className='font-thin text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto laudantium optio aliquam.</p>
            </div>
            <div>
                <ul className='flex flex-col space-y-5'>
                    <li className='flex items-center gap-4'>
                        <div>
                            <BsCheck2 size={30} color='green' />
                        </div>
                        <div>
                            <span>Lorem ipsum dolor sit.</span>
                        </div>
                    </li>
                    <li className='flex items-center gap-4'>
                        <div>
                            <BsCheck2 size={30} color='green' />
                        </div>
                        <div>
                            <span>Lorem ipsum dolor sit. Lorem, ipsum dolor.</span>
                        </div>
                    </li>
                    <li className='flex items-center gap-4'>
                        <div>
                            <BsCheck2 size={30} color='green' />
                        </div>
                        <div>
                            <span>Lorem ipsum dolor sit. Lorem, ipsum.</span>
                        </div>
                    </li>
                    <li className='flex items-center gap-4'>
                        <div>
                            <BsCheck2 size={30} color='green' />
                        </div>
                        <div>
                            <span>Lorem ipsum dolor sit.</span>
                        </div>
                    </li>
                    <li className='flex items-center gap-4'>
                        <div>
                            <BsCheck2 size={30} color='green' />
                        </div>
                        <div>
                            <span>Lorem ipsum</span>
                        </div>
                    </li>
                </ul>
                <button className='bg-slate-900 text-white px-5 py-3 rounded-md w-full mt-8'>Get Started</button>
            </div>
        </div>
    </div>
    </>
  )
}
