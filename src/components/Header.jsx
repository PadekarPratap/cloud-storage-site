import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

export default function Header() {
  return (
    <div name="home" className='min-h-[95vh] w-full bg-zinc-200'>
        <Navbar />
        <Hero />
    </div>
  )
}
