import Image, { StaticImageData } from "next/image";
// import Link from "next/link";

interface FeaturedCreativesCardProps {
  image: StaticImageData;
  title: string;
  username: string;
  slug: string;
}

function FeaturedCreativesCard({ image }: FeaturedCreativesCardProps) {
  return (
    <>
        
      <div className="w-full bg-gray-300">
        {/* <div className="w-full grid grid-cols-1 gap-2 bg-gray-400 sm:grid-cols-2 lg:grid-cols-4"> */}
        {/* <Link href={`blog/${slug}`}> */}
        <div className="w-full bg-accentApricot border">
          <div className="w-full p-5 pb-6">
            <Image src={image} alt="title" className="rounded-lg" />
          </div>
          <div className="flex justify-center item text-center">
            <div>
              <h2>HELLO TITLE</h2>
              {/* <h2 className={`${cormorant.className`} pt-10 text-2xl text-center font-semibold mb-2`}>{title}</h2> */}
              <p>username here</p>
            </div>
          </div>
        </div>
        {/* </Link> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default FeaturedCreativesCard;
