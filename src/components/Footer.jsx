import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='bg-slate-900 w-full flex items-center py-[5rem]'>
        <div className='text-white container mx-auto px-4'>
            <div className='grid md:grid-cols-3 gap-10'>
                <div className='md:col-span-2 grid grid-cols-2 lg:grid-cols-4 gap-8 items-center'>
                    <div>
                        <h4 className='uppercase text-xl text-slate-400'>Solutions</h4>
                        <ul className='text-lg text-slate-600 ml-5'>
                            <li>Marketing</li>
                            <li>Analytics</li>
                            <li>Commerce</li>
                            <li>Data</li>
                            <li>Cloud</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='uppercase text-xl text-slate-400'>Support</h4>
                        <ul className='text-lg text-slate-600 ml-5'>
                            <li>Marketing</li>
                            <li>Analytics</li>
                            <li>Commerce</li>
                            <li>Data</li>
                            <li>Cloud</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='uppercase text-xl text-slate-400'>Company</h4>
                        <ul className='text-lg text-slate-600 ml-5'>
                            <li>Marketing</li>
                            <li>Analytics</li>
                            <li>Commerce</li>
                            <li>Data</li>
                            <li>Cloud</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='uppercase text-xl text-slate-400'>Legal</h4>
                        <ul className='text-lg text-slate-600 ml-5'>
                            <li>Marketing</li>
                            <li>Analytics</li>
                            <li>Commerce</li>
                            <li>Data</li>
                            <li>Cloud</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className='uppercase text-slate-300 text-xl mb-3'>Subscribe to our Newsletter</p>
                    <p className='text-lg font-thin text-slate-400 mb-3'>The latest news, articles and resources, send to your inbox weekly</p>
                    <div className='flex lg:flex-row flex-col gap-3'>
                        <input className='flex-1 rounded-lg px-4 py-3 focus:outline-indigo-600 focus:border-none text-black' type="text" placeholder='Enter your Email' />
                        <button className='bg-indigo-600 px-10 md:px-4 py-2 rounded-lg text-sm sm:self-center self-stretch'>Subscribe</button>
                    </div>
                </div>
            </div>
            <hr className='bg-slate-800 h-[1px] border-none my-4' />
            <div className='flex items-center justify-between'>
                <div>
                    <p className='text-slate-500'>2022 Workflow, LLC All Rights Reserved.</p>
                </div>
                <div>
                    <div className='flex justify-between space-x-3'>
                        <BsFacebook color=' rgb(100 116 139)' size={20} />
                        <AiFillTwitterCircle color=' rgb(100 116 139)' size={25} />
                        <AiFillInstagram color=' rgb(100 116 139)' size={25} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
