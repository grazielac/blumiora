import Image from "next/image";
import letter from "../public/letter.jpg";

function FeaturedCreativesCard() {
  return (
    <>
      <div className="w-full h-screen bg-gray-300">
        <div className="w-full grid grid-cols-1 gap-2 bg-gray-400 sm:grid-cols-2 lg:grid-cols-4">
            {/* blogcard */}
          <div className="w-1/2 bg-amber-200 border-2">
            <div>
                <Image src={letter} alt="Image sample" />
            </div>
            <h1>title</h1>
            <p>username</p>
          </div>
          <div className="w-1/2 h-1/2 bg-amber-200">2</div>
          <div className="w-1/2 h-1/2 bg-amber-200">3</div>
          <div className="w-1/2 h-1/2 bg-amber-200">4</div>
          <div className="w-1/2 h-1/2 bg-amber-200">5</div>
          <div className="w-1/2 h-1/2 bg-amber-200">6</div>
          <div className="w-1/2 h-1/2 bg-amber-200">7</div>
          <div className="w-1/2 h-1/2 bg-amber-200">8</div>
        </div>
      </div>
    </>
  );
}

export default FeaturedCreativesCard;
