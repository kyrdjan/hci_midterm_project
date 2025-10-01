import { StarIcon as SolidStar } from "@heroicons/react/24/solid";

export default function ReviewCard({ image, rating, count }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex bg-white p-3 shadow-[-12px_12px_0px_#F7C4C4] relative inline-block w-80 h-90 hover:scale-105 transition-transform duration-300 rounded-2xl">
      {/* Image */}
      <div className="w-full h-70 flex items-center justify-center overflow-hidden pt-3">
        <img src={image} alt="Product" className="object-cover w-70 h-70" />
      </div>

      {/* Rating */}
      <div className="flex flex-row items-center justify-center mt-5">
        <span id='cardtext' className=" text-xl pr-2">({count})</span>
        <div className="flex items-center space-x-0.5 relative">
          {/* Full Stars */}
          {Array.from({ length: fullStars }).map((_, i) => (
            <SolidStar key={`full-${i}`} className="w-5 h-5 text-yellow-400" />
          ))}

          {/* Half Star (overlay trick) */}
          {halfStar && (
            <div className="relative w-5 h-5">
                {/* Base star = pink */}
                <SolidStar className="absolute top-0 left-0 w-5 h-5 text-[#F7C4C4]" />
                
                {/* Overlay = yellow, but clipped to right half */}
                <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden z-10">
                    <SolidStar className="w-5 h-5 text-yellow-400" />
                </div>
            </div>
          )}

          {/* Empty Stars */}
          {Array.from({ length: emptyStars }).map((_, i) => (
            <SolidStar key={`empty-${i}`} className="w-5 h-5 text-[#F7C4C4]" />
          ))}
        </div>
      </div>
    </div>
  );
}
