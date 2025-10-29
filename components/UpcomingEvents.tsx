import React from "react";
import Image, { StaticImageData } from "next/image";


interface UpcomingEventsProps {
  image: StaticImageData;
  date: string;
  title: string;
  username: string;
  slug: string;
}

function UpcomingEvents({
  image,
  date,
  title,
  username,

}: UpcomingEventsProps) {
  return (
    <div>
      <div className="w-full bg-gray-300">
        {/* <div className="w-full grid grid-cols-1 gap-2 bg-gray-400 sm:grid-cols-2 lg:grid-cols-4"> */}
        {/* <Link href={`blog/${slug}`}> */}
        <div className="w-full bg-accentApricot border">
          <div className="w-full p-5">
            <Image src={image} alt="title" className="rounded-lg" />
          </div>
          <div className="flex justify-center item text-center mb-5">
            <div>
              <p>{date}</p>
              <h2 className="pt-10 text-2xl text-center font-semibold mb-2">{title}</h2>
              <p>{username}</p>
            </div>
          </div>
        </div>
        {/* </Link> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default UpcomingEvents;
