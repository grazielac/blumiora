import React from "react";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import DashboardNav from "@/components/DashboardNav";

interface DashboardProps {
  children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardProps) {
  return (
    <>
      <SignedIn>
        <div className="flex min-h-screen flex-col">
          <DashboardNav />
          <main className="flex-1 p-8">{children}</main>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
    
   
  );
}

export default DashboardLayout;
