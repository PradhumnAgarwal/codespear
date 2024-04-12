"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export const LandingNavbar = () => {

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-12 mr-2">
          <Image fill alt="Logo" src="/logo_01.png" />
        </div>
        <h1 className="text-2xl font-bold text-white">Code Spear</h1>
      </Link>
      <div className="flex items-center gap-x-4 justify-center">
        <Link className="flex justify-center items-center" href="/battle">
          <button style={{padding:'2.5px' ,paddingTop:'2px'}} className="relative inline-flex items-center justify-center overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-full group-hover:bg-opacity-0">
            Get Started
            </span>
          </button>
        </Link>
        <UserButton />

      </div>
    </nav>
  );
};
