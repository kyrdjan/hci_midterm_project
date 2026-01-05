import Button from "./button";
import CartItem from "./CartItem";

import img1 from "../assets/bananacake.svg";
import img2 from "../assets/chococake.svg";
function CartDialog({ isOpen, onClose }) {
  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>

      <div className="cart-header p-3">
        <h3>Your Cart</h3>
        <button onClick={onClose} className="cart-close-btn">✖</button>
      </div>

      <div className="cart-body gap-10 flex flex-col overflow-y-auto px-3">
        <div className="p-1" /> {/* Spacer */}

        {/* Reusable cart item */}
        <CartItem
          image={img1}
          name="Banana Loaf"
          price={180}
        />

        <div className="w-full">
          <hr className="border-t-2 border-black rounded-lg w-full my-1" />
        </div>

        {/* Add more items easily */}
        <CartItem image={img2} name="Chocolate Cake" price={220} />
      </div>

      <div className="flex justify-end">
        <Button variant="solid" className="mb-2">
          Checkout
        </Button>
      </div>

    </div>
  );
}

export default CartDialog;
