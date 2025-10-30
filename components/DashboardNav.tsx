import React from "react";
import { BsSearch, BsBell, BsChatDots } from "react-icons/bs";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import blumiora from "../public/blumiora.png";

function DashboardNav() {
  return (
    <div className="flex items-center justify-between p-10 h-16">
        <Image
          src={blumiora}
          alt="Blumiora logo"
          width={140}
          height={100}
          priority
          className="w-32 h-auto"
        />
        {/* left side */}
      
      <nav className="flex gap-4">
        <BsSearch size={22} className=" text-gray-500 cursor-pointer" />
        {/* <input type="text" placeholder="Search..." className="pl-10 pr-3 py-3 rounded-full border border-border bg-"></input> */}
        <BsChatDots size={22} className="cursor-pointer text-gray-500" />
        <BsBell size={22} className="cursor-pointer text-gray-500" />
      </nav>
      <div className="w-6 h-6">
        <UserButton />
      </div>
    </div>
  );
}

export default DashboardNav;
