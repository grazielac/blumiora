"use client";
import Link from 'next/link';
import Image from 'next/image';
import blumiora from '../public/blumiora.png';
import { BsSearch, BsBell, BsChatDots } from 'react-icons/bs';


function NavBar() {
  return (
    <nav className='flex gap-6'>
        <Image src={blumiora} alt="Blumiora logo" width={120} height={100} />
        <BsSearch size={24}/>
        <BsChatDots size={24} />
        <BsBell size={24} />
        <Link href="" className=""></Link>
        <Link href="" className=""></Link>
      
    </nav>
  )
}

export default NavBar


