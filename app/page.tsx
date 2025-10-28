// import NavBar from "@/components/NavBar";
import { SignedOut } from "@clerk/nextjs";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <SignedOut>
        <Hero />
      </SignedOut>
    </>
  );
}
