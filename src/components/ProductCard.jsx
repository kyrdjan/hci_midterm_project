// src/components/ProductCard.jsx
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
    <div className="h-[100vh] w-full flex flex-col md:flex-row items-center justify-center bg-[#FFE3E5] px-10 py-10 gap-10">
      
      {/* LEFT SECTION */}
      <div className="flex flex-col max-w-xl text-[#490101]">
        {/* Title & Price */}
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-5xl font-bold text-[#E74A4A]">{title}</h2>
          <p className="text-2xl font-semibold text-black">₱ {price}</p>
        </div>

        {/* Description paragraphs */}
        <div className="mb-6 space-y-3">
          {description.map((para, idx) => (
            <p key={idx} className="text-gray-800 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <hr className="border-t-2 border-black w-1/3 mb-6" />

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-6">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 border border-[#E74A4A] rounded-full text-sm text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <button className="bg-[#E74A4A] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#c93d3d] transition">
          ADD TO CART!
        </button>
      </div>

      {/* RIGHT SIDE (Dynamic) */}
      <div className="flex flex-col items-center justify-center">
        {rightComponent}
      </div>
    </div>
  );
};

export default ProductCard;
