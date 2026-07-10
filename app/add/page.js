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
  const [starRating, setStarRating] = useState(0);

  const router = useRouter();
  return (
    <div className="min-h-screen text-black bg-white">

        <Sidebar isBurger={isBurger} setIsBurger={setIsBurger} />
        
        <main className={isBurger ? 'ml-18 p-4 bg-black min-h-screen' : 'ml-80 p-4 bg-black min-h-screen'}>
            <h1 className='text-[#FFFFFF] text-4xl mx-auto mt-5'>Add Movie/Serie</h1>
            <div className='flex flex-row gap-4'>
                <div className='w-75 h-75 bg-[#564d4d] mt-3 rounded-2xl flex items-center p-4'>
                    <input
                        id="poster-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                    />
                    <label
                        htmlFor="poster-upload"
                        className='flex w-full h-full cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed border-[#786C6C] bg-[#6b5f5f] px-4 py-6 text-center text-white transition hover:bg-[#7b6d6d]'
                    >
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <MdMovieEdit className='text-5xl'/>
                            <div className='text-sm font-medium'>Click to upload your movie/serie poster</div>
                        </div>
                    </label>
                </div>

                <div>
                    <div>
                        <h3 className='text-white mt-3 text-xl'>Movie/Serie Title</h3>
                        <input type="text" className='w-96 h-10 rounded-lg mt-2 p-2 bg-[#BFB4B4] text-black' placeholder='Enter the title of your movie/serie'/>
                    </div>
                    <div>
                        <h3 className='text-white mt-3 text-xl'>Review</h3>
                        {/* <input type="text" className='w-96 h-15 rounded-lg mt-2 p-2 bg-[#BFB4B4] text-black' placeholder='Enter your review'/> */}
                        <textarea 
                            className='w-96 h-30 rounded-lg mt-2 p-2 bg-[#BFB4B4] text-black' 
                            placeholder='Enter your review'
                            type='text'
                            // value={description}
                            // onChange={(e) => setDescription(e.target.value)}
                            onInput={(e) => {
                                e.target.style.height = 'auto'
                                e.target.style.height = e.target.scrollHeight + 'px'
                            }}
                        />
                    </div>
                    <div className='inline-flex flex-row justify-between items-center w-96'>
                        <h3 className='text-white mt-3 text-xl'>Rate this movie/serie</h3>
                        <StarRating className='mt-2 text-3xl' value={starRating} onChange={setStarRating}/>
                    </div>
                </div>
            </div>
        </main>        
    </div>
  )
}