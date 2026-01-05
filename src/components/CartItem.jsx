import { useState } from "react";

function CartItem({ image, name, price }) {
  const [quantity, setQuantity] = useState(1);

  const totalPrice = price * quantity;

  return (
    <div className="flex flex-col items-center w-full">

      {/* Image */}
      <div className="w-full h-32 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info + controls */}
      <div className="flex flex-row justify-between items-center gap-2 mt-2 w-full">

        <h2 id="addtocartfont" className="text-xl">
          {name}
        </h2>

        {/* Quantity controls */}
        <div className="flex items-center gap-2  text-sm">
          <h2
            id="addtocartfont"
            className="text-xl text-[#FF8315]"
          >
            ₱ {totalPrice.toFixed(2)}
          </h2>

          <div className="border border-black rounded-xl flex items-center justify-center">
            <button
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="w-8 h-8 flex items-center justify-center"
              >
              −
            </button>

            <span className="w-6 text-center">
              {quantity}
            </span>

            <button
              onClick={() => setQuantity(q => q + 1)}
              className="w-8 h-8 flex items-center justify-center"
              >
              +
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CartItem;
