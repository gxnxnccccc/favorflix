'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoAdd } from "react-icons/io5";
import { MdMovieFilter } from "react-icons/md";
import Image from 'next/image';
import Sidebar from '../../components/Sidebar';
import StarRating from '../../components/StarRating';
import { MdMovieEdit } from "react-icons/md";

export default function Page() {
  const [isBurger, setIsBurger] = useState(false);
  const [item, setItem] = useState([]);

  const router = useRouter();

  useEffect(()=> {
    getData();
  })

  const getData =  async() => {
    try{
        const data = await fetch('/api/tests', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const res = await data.json();
        setItem(res);
    } 
    catch(error){
        console.error('Error fetching data:', error);
    }
  }

  return (
    <div className="min-h-screen text-black bg-white">

        <Sidebar isBurger={isBurger} setIsBurger={setIsBurger} />
        
        <main className={isBurger ? 'ml-18 p-4 bg-black min-h-screen' : 'ml-80 p-4 bg-black min-h-screen'}>
            <h1 className='text-[#FFFFFF] text-4xl mx-auto mt-5'>API Testing</h1>
            <div>
                <table className='w-full border-separate border-spacing-x-6'>
                    <thead>
                        <tr>
                            <th className='text-white text-left'>Material</th>
                            <th className='text-white text-left'>Plant</th>
                            <th className='text-white text-left'>Material Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item.map((item, i) => (
                            <tr key={item.Material}>
                                <td className='py-2'>
                                    <span className='text-white'>{item.Material}</span>
                                </td>
                                <td className='py-2'>
                                    <span className='text-white'>{item.Plant}</span>
                                </td>
                                <td className='py-2'>
                                    <span className='text-white'>{item.Material_Description}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>        
    </div>
  )
}