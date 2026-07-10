'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoAdd } from "react-icons/io5";
import { MdMovieFilter } from "react-icons/md";
import Image from 'next/image';
import Sidebar from '../components/Sidebar';

export default function Page() {
  const [isBurger, setIsBurger] = useState(false);
  
  return (
    <div className="min-h-screen text-black bg-white">
      
      <Sidebar isBurger={isBurger} setIsBurger={setIsBurger} />

      <main className={isBurger ? 'ml-18 p-4 bg-black min-h-screen' : 'ml-80 p-4 bg-black min-h-screen'}>
        <Image src="/logo/logo.png" alt='Favorflix Logo' width={300} height={100} className='mx-auto mt-5'/>
        {/* <h1 className='text-[#831010] text-4xl font-bold mx-auto'>FAVORFLIX</h1> */}
        <p className='text-white text-center mt-2 '>Welcome to Favorflix!</p>
      </main>
    </div>
  )
}