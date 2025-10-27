"use client";
import Link from 'next/link';
import Image from 'next/image';
import blumiora from '../public/blumiora.png';


function NavBar() {
  return (
    <nav className='flex gap-6'>
        <Image src={blumiora} alt="Blumiora logo" width={120} height={100} />
        <Link href="/" className="text-primary hover:underline">Home</Link>
        <Link href="" className=""></Link>
        <Link href="" className=""></Link>
      
    </nav>
  )
}

export default NavBar


