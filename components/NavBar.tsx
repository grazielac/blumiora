"use client";
import Image from "next/image";
import blumiora from "../public/blumiora.png";
import { BsSearch, BsBell, BsChatDots } from "react-icons/bs";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

function NavBar() {
  return (
    <header className="flex items-center justify-between p-4 h-16">
      <Image
        src={blumiora}
        alt="Blumiora logo"
        width={140}
        height={100}
        priority
        className="w-32 h-auto"
      />
      {/* left side */}
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton>
            <button className="font-medium tracking-wider px-4 py-2 rounded-full  hover:bg-accentGray hover:text-text text-sm">
              SIGN IN
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="font-medium tracking-wider px-4 py-2 rounded-full text-white  hover:bg-accentGray hover:text-text text-sm bg-primary">SIGN UP</button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <nav className="flex gap-4">
            <BsSearch size={22} className=" text-gray-500 cursor-pointer" />
            {/* <input type="text" placeholder="Search..." className="pl-10 pr-3 py-3 rounded-full border border-border bg-"></input> */}
            <BsChatDots size={22} className="cursor-pointer text-gray-500" />
            <BsBell size={22} className="cursor-pointer text-gray-500" />
          </nav>
          <div className="w-6 h-6">
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </header>
  );
}

export default NavBar;
