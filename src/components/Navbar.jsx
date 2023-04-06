import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineXMark } from "react-icons/hi2";

export default function Navbar() {

    const [menuBar, setMenuBar] = useState(false)

  return (
    <div className="w-full h-[80px] bg-zinc-200 sticky top-0">
      <div className="px-5 flex items-center h-full justify-between shadow-md shadow-black/20">
        <div className="flex items-center gap-6">
          <h1 className="text-3xl md:text-4xl uppercase font-bold">Cloud.</h1>
          <ul className="md:flex gap-4 lg:gap-8 hidden">
            <li className="font-semibold text-lg">Home</li>
            <li className="font-semibold text-lg">About</li>
            <li className="font-semibold text-lg">Support</li>
            <li className="font-semibold text-lg">Platforms</li>
            <li className="font-semibold text-lg">Pricing</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <button className="px-4 py-2 md:text-xl text-lg font-semibold">
            Sign in
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white md:text-xl text-lg  font-semibold rounded">
            Sign up
          </button>
        </div>
        <div className="md:hidden">
          { menuBar ? <HiOutlineXMark onClick={() => setMenuBar(!menuBar)} size={30} className="cursor-pointer" /> : <GiHamburgerMenu onClick={() => setMenuBar(!menuBar)} size={30} className="cursor-pointer" />}
        </div>
      </div>
      <div className={menuBar ? "fixed bg-zinc-200 w-full px-5 pb-4 shadow-md shadow-black/20" : "hidden"}>
        <ul>
          <li className="text-xl font-medium p-2 text-center border-b border-gray-900">Home</li>
          <li className="text-xl font-medium p-2 text-center border-b border-gray-900">About</li>
          <li className="text-xl font-medium p-2 text-center border-b border-gray-900">Support</li>
          <li className="text-xl font-medium p-2 text-center border-b border-gray-900">Platforms</li>
          <li className="text-xl font-medium p-2 text-center border-b border-gray-900">Pricing</li>
        </ul>
        <div className="mt-4 flex gap-3 flex-col">
        <button className="px-4 py-2 md:text-xl text-lg font-semibold border-2 border-indigo-600 rounded tracking-widest">Sign in</button>
        <button className="px-4 py-2 bg-indigo-600 text-white md:text-xl text-lg  font-semibold rounded tracking-widest">Sign up</button>
        </div>
      </div>
    </div>
  );
}
