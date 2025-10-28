"use client";
import Image from "next/image";
import blumiora from "../public/blumiora.png";
import { BsSearch, BsBell, BsChatDots } from "react-icons/bs";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function NavBar() {
  return (
    <header className="flex items-center justify-between p-4 h-16">
        <Image
          src={blumiora}
          alt="Blumiora logo"
          width={120}
          height={100}
          priority
        />
     
      <div className="relative flex items-center gap-5">
        <BsSearch size={22} className=" text-gray-500 cursor-pointer" />
        {/* <input type="text" placeholder="Search..." className="pl-10 pr-3 py-3 rounded-full border border-border bg-"></input> */}
        <BsChatDots size={22} className="cursor-pointer text-gray-500" />
        <BsBell size={22} className="cursor-pointer text-gray-500" />
      </div>

      <div className="flex items-center">
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}

export default NavBar;
