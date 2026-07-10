'use client'

import { useRouter } from 'next/navigation';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoAdd } from "react-icons/io5";
import { MdMovieFilter } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";

const Sidebar = ({ isBurger, setIsBurger }) => {
  const router = useRouter();

  return (
    <aside 
      className={
      isBurger ? 'fixed top-0 left-0 bottom-0 p-4 w-18 bg-[#564d4d]' : 'fixed top-0 left-0 bottom-0 p-4 w-80 bg-[#564d4d]'}>
        <nav className='text-white'>
          <ul className='flex flex-col gap-4'>
            

            <li className='pt-2 w-8 rounded-lg'>
              <RxHamburgerMenu
                className='text-4xl'
                onClick={() => setIsBurger(!isBurger)}/>
            </li>

           <li 
              onClick={() => router.push('/')}
              className='p-2 bg-black rounded-lg inline-flex gap-2 items-center'>
                <GrHomeRounded className='text-2xl'/>
                <span className={isBurger ? 'hidden py-10' : 'inline'}>
                  Home
                </span>
            </li>
            
            <li 
              onClick={() => router.push('/add')}
              className='p-2 bg-black rounded-lg inline-flex gap-2 items-center'>
                <IoAdd className='text-2xl'/>
                <span className={isBurger ? 'hidden py-10' : 'inline'}>
                  Add new movie/serie
                </span>
            </li>
            <li 
              onClick={() => router.push('/collection')}
              className='p-2 bg-black rounded-lg inline-flex gap-2 items-center shadow-md'>
                <MdMovieFilter className='text-2xl'/>
                <span className={isBurger ? 'hidden py-10' : 'inline'}>
                  My Collection
                </span>
            </li>
            <li 
              onClick={() => router.push('/test')}
              className='p-2 bg-black rounded-lg inline-flex gap-2 items-center shadow-md'>
                <MdMovieFilter className='text-2xl'/>
                <span className={isBurger ? 'hidden py-10' : 'inline'}>
                  API Testing
                </span>
            </li>
          </ul>
        </nav>
      </aside>
  )
};

export default Sidebar;