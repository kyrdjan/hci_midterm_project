// src/components/ProductCard.jsx
import Button from "./button";


const ProductCard = ({
  title = "Banana Loaf",
  price = "250.00",
  description = [
    "Our banana loaf is soft, moist, and baked with love — made from sweet ripe bananas and topped with generous chunks of rich chocolate.",
    "Perfect for breakfast, merienda, or just when you need a little treat.",
    "Every slice is comforting, delicious, and feels like home in every bite.",
  ],
  tags = ["Very Tasty! 😊", "Kalami!!!", "Saging lang Sakam", "<3<3<3"],
  rightComponent = null,
}) => {
  return (
    <div className="h-[100vh] w-full flex flex-col md:flex-row items-center justify-center bg-[#FFE3E5] px-20 py-20 gap-20">
      
      {/* LEFT SECTION */}
      <div className=" w-1/2 flex flex-wrap alignment-center justify-start h-auto"> 
      
        <div className="flex flex-rows w-full h-auto alignment-center justify-between">
          <div id='special' className="text-5xl text-[#E74A4A] ">
              {title}
          </div>
          <div className="text-5xl flex flex-rows w-auto h-auto">
            <div className="pr-1">₱</div>
            <div id='price'>
                {price}
            </div>
          </div>
        </div>
        
        <div id='bot' className="text-lg justify-center alignment-center w-full h-auto pb-4 pt-3 text-justify ">
          {description}
        </div>

        <div className="w-3/4" >
          <hr className="flex-1 border-t-3 border-black rounded-lg" />
        </div>
    
        <div className="flex flex-wrap alignment-center justify-start gap-2 py-5 w-full">
          {tags.map((tag, idx) => (
            <span
            key={idx}
            className="px-5 py-2 border-1 border-[#FF8315] rounded-lg text-sm text-bold"
            >
            {tag}
            </span>
          ))}
        </div>
        
        <div className="w-full">
          <Button variant='solid'>ADD TO CART!</Button>
        </div>    
        
      </div>

      {/* RIGHT SIDE (Dynamic) */}
      <div className="flex flex-col items-center justify-center">
        {rightComponent}
      </div>
    </div>
  );
};

export default ProductCard;
