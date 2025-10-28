function Hero() {
  return (
    <div className="w-full h-screen flex justify center items-center">
      <div className="flex justify-center items-center mb-40">
        <div className="w-3/4 bg-amber-200 p-10 flex flex-col gap-6">
          {/* heading */}
          <div className="bg-alert flex justify-center items-center p-6">
            <h1 className="font-heading text-4xl font-bold text-center">
              For the ones who create, feel and inspire.
            </h1>
          </div>

          {/* subheading */}
          <h3 className="font-body text-center text-text text-xl">
            A space for creatives to connect, grow, and bloom. Whether you
            paint, design, write, or simply dream — Blumiora is where creativity
            finds its people. Join workshops, share your art, and be inspired by
            others who feel the world the way you do.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Hero;
