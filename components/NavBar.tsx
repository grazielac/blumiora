"use client";
import Link from 'next/link';

import React from 'react'

function NavBar() {
  return (
    <nav className='flex gap-6'>
        <Link href="/" className="text-primary hover:underline">Home</Link>
        <Link href="" className=""></Link>
        <Link href="" className=""></Link>
      
    </nav>
  )
}

export default NavBar


