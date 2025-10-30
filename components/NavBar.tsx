"use client";
import Image from "next/image";
import blumiora from "../public/blumiora.png";
import {
  SignInButton,
  SignUpButton,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

function NavBar() {
  return (
    <header className="flex items-center justify-between p-10 h-16">
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
            <button className=" font-medium tracking-wider px-4 py-2 rounded-full  hover:bg-accentGray hover:text-text text-sm">
              LOG IN
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="shadow-md font-medium tracking-wider px-4 py-2 rounded-full text-white  hover:bg-accentGray hover:text-text text-sm bg-primary">
              SIGN UP
            </button>
          </SignUpButton>
        </SignedOut>
        <UserButton />
      </div>
    </header>
  );
}

export default NavBar;
