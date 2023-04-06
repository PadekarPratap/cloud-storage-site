import React from "react";
import cyber from "../assets/cyber.png";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { MdStorage } from "react-icons/md";
import { TbApi } from "react-icons/tb";

export default function Hero() {
  return (
    <div className="container mx-auto px-4 overflow-x-hidden">
      <div className="flex justify-center items-center min-h-[90vh]">
        <div className="grid md:grid-cols-2">
          <div className="text-center md:text-left">
            <p className="text-xl md:text-2xl tracking-wider font-medium mb-2">
              Unique Sequencing & Production
            </p>
            <h1 className="text-4xl md:text-6xl font-bold xl:text-8xl">
              Cloud Management
            </h1>
            <p className="text-lg">This is our Tech Brand.</p>
            <button className="bg-indigo-600 px-9 py-3 text-white font-semibold text-xl rounded my-3">
              Get Started
            </button>
          </div>
          <div className="mt-8 md:mt-0">
            <img
              className="mx-auto max-w-[500px] xl:max-w-[750px]"
              src={cyber}
              alt="hero image"
            />
          </div>
        </div>
      </div>
      <div className="py-10 mb-10 shadow-lg shadow-black/20 md:-mt-52 -mt-18">
        <div className="text-center mb-5">
          <p className="text-2xl">Data Services</p>
        </div>
        <div className="flex-wrap justify-around hidden sm:flex gap-5">
          <div className="flex items-center space-x-5">
            <AiOutlineCloudUpload color="rgb(79 70 229)" size={50} />
            <p className="text-xl font-mono">App Security</p>
          </div>
          <div className="flex items-center space-x-5">
            <BsDatabaseFillCheck
              color="rgb(79 70 229)"
              className=""
              size={50}
            />
            <p className="text-xl font-mono">Dashboard Design</p>
          </div>
          <div className="flex items-center space-x-5">
            <MdStorage color="rgb(79 70 229)" className="" size={50} />
            <p className="text-xl font-mono">Cloud Data</p>
          </div>
          <div className="flex items-center space-x-5">
            <TbApi color="rgb(79 70 229)" className="" size={50} />
            <p className="text-xl font-mono">API integration</p>
          </div>
        </div>
        <ul className="sm:hidden">
          <li className="flex items-center justify-between px-5">
            <AiOutlineCloudUpload color="rgb(79 70 229)" size={50} />
            <p className="text-xl font-mono">App Security</p>
          </li>
          <li className="flex items-center justify-between px-5">
            <BsDatabaseFillCheck color="rgb(79 70 229)" size={50} />
            <p className="text-xl font-mono">Dashboard Design</p>
          </li>
          <li className="flex items-center justify-between px-5">
            <MdStorage color="rgb(79 70 229)" size={50} />
            <p className="text-xl font-mono">Cloud Data</p>
          </li>
          <li className="flex items-center justify-between px-5">
            <TbApi color="rgb(79 70 229)" size={50} />
            <p className="text-xl font-mono">API Integration</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
