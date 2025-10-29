// import NavBar from "@/components/NavBar";
import { SignedOut } from "@clerk/nextjs";
import Hero from "../components/Hero";
import FeaturedCreators from "@/components/FeaturedCreators";

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <SignedOut>
        <Hero />
        <FeaturedCreators />
      </SignedOut>
    </>
  );
}
