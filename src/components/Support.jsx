import React from 'react'
import support from '../assets/support.jpg'
import {BsTelephone} from "react-icons/bs"
import {BsFillArrowRightCircleFill, BsGlobe2} from "react-icons/bs"
import {GiProcessor} from "react-icons/gi"

export default function Support() {
  return (
    <>
    <div name="support" className='h-[700px] relative my-[5rem]'>
        {/* overlay */}
        <div className='absolute inset-0 bg-indigo-950/80'>
            <div className='text-white mt-12 md:mt-[5rem]'>
                <h3 className='text-center text-3xl font-light tracking-wider mb-5 md:mb-12'>SUPPORT</h3>
                <h2 className='md:text-5xl text-3xl text-center font-bold mb-5 md:mb-10'>Finding the Right Team</h2>
                <p className='max-w-[1250px] mx-auto px-4 text-lg mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt reprehenderit sint veniam quod explicabo, expedita cupiditate in modi error fugiat culpa rem ipsum vel adipisci, sequi totam non repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, in? Similique et veritatis pariatur dolor accusantium. Ut ipsam consectetur explicabo.</p>
            </div>
        </div>

        <img className='w-full h-[700px] object-cover object-center' src={support} alt="support_image" />
    </div>

    <div className='container mx-auto px-4 grid lg:grid-cols-3 mb-[2rem] gap-20 md:gap-15 lg:gap-10 mt-[-15rem] '>
        {/* card - one  */}
        <div className='bg-white rounded-lg p-5 relative shadow-lg md:shadow-2xl shadow-black/30'>
            <div className='bg-indigo-600 inline-block p-4 rounded-md absolute top-[-25px]'>
                <BsTelephone color='#fff' size={25} />
            </div>
            <div className='mt-8 mb-16'>
                <h4 className='font-semibold text-xl font-mono'>Sales</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui obcaecati, harum incidunt distinctio perspiciatis enim libero asperiores eveniet ducimus aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, repudiandae.</p>
            </div>
            <div className='flex items-center gap-2 bg-indigo-200 absolute bottom-0 right-0 left-0 rounded-br-lg rounded-bl-lg px-4 py-3 cursor-pointer'>
                <p className='text-indigo-600 text-sm font-semibold'>Contact US </p>
                <BsFillArrowRightCircleFill size={20} color=' rgb(79 70 229)' />
            </div>
        </div>
        {/* card - two  */}
        <div className='bg-white rounded-lg p-5 relative shadow-lg md:shadow-2xl shadow-black/30'>
            <div className='bg-indigo-600 inline-block p-4 rounded-md absolute top-[-25px]'>
                <BsGlobe2 color='#fff' size={25} />
            </div>
            <div className='mt-8 mb-16'>
                <h4 className='font-semibold text-xl font-mono'>Technical Support</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui obcaecati, harum incidunt distinctio perspiciatis enim libero asperiores eveniet ducimus aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, repudiandae.</p>
            </div>
            <div className='flex items-center gap-2 bg-indigo-200 absolute bottom-0 right-0 left-0 rounded-br-lg rounded-bl-lg px-4 py-3 cursor-pointer'>
                <p className='text-indigo-600 text-sm font-semibold'>Contact US </p>
                <BsFillArrowRightCircleFill size={20} color=' rgb(79 70 229)' />
            </div>
        </div>
        {/* card - three  */}
        <div className='bg-white rounded-lg p-5 relative shadow-lg md:shadow-2xl shadow-black/30'>
            <div className='bg-indigo-600 inline-block p-4 rounded-md absolute top-[-25px]'>
                <GiProcessor color='#fff' size={25} />
            </div>
            <div className='mt-8 mb-16'>
                <h4 className='font-semibold text-xl font-mono'>Media Queries</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui obcaecati, harum incidunt distinctio perspiciatis enim libero asperiores eveniet ducimus aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, repudiandae.</p>
            </div>
            <div className='flex items-center gap-2 bg-indigo-200 absolute bottom-0 right-0 left-0 rounded-br-lg rounded-bl-lg px-4 py-3 cursor-pointer'>
                <p className='text-indigo-600 text-sm font-semibold'>Contact US </p>
                <BsFillArrowRightCircleFill size={20} color=' rgb(79 70 229)' />
            </div>
        </div>
    </div>
    </>
  )
}
