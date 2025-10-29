import { SignedOut } from "@clerk/nextjs";
import JoinButton from "./JoinButton";

function Hero() {
  return (
    <div className="w-full h-screen flex justify center items-center">
      <div className="w-full flex justify-center items-center mb-40  ">
        <div className="w-full max-w-3xl p-10 flex flex-col gap-6">
          {/* heading */}
          <div className="flex justify-center items-center pb-3">
            <h1 className="font-heading text-4xl  text-center italic">
              For the ones who create, feel and inspire.
            </h1>
          </div>

          {/* subheading */}
          <h3 className="font-body text-center text-xl leading-relaxed">
            A space for creatives to connect, grow, and bloom. Whether you
            paint, design, write, or simply dream — Blumiora is where creativity
            finds its people. Join workshops, share your art, and be inspired by
            others who feel the world the way you do.
          </h3>
          <div className="flex justify-center mt-6">
            <JoinButton />

            {/* <button className="shadow-md font-medium tracking-wider px-4 py-2 rounded-full text-white  hover:bg-accentGray hover:text-text text-sm bg-primary">SIGN UP</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
