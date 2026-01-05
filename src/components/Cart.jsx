import { useNavigate } from "react-router-dom";

import Button from "./button";
import CartItem from "./CartItem";

import img1 from "../assets/bananacake.svg";
import img2 from "../assets/revelbars.jpg";


function CartDialog({ isOpen, onClose }) {

  const navigate = useNavigate();

  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>

      <div className="cart-header p-3">
        <h3>Your Cart</h3>
        <button onClick={onClose} className="cart-close-btn">✖</button>
      </div>

      <div className="cart-body gap-10 flex flex-col overflow-y-auto px-3 pt-5">

        {/* Reusable cart item */}
        <CartItem image={img1} name="Banana Loaf" price={180} />

        {/*divider*/}
        <div className="w-full">
          <hr className="border-t-2 border-black rounded-lg w-full my-1" />
        </div>

        {/* Reusable cart item */}
        <CartItem image={img2} name="Revel Bars" price={180} />
        
      </div>

      <div className="flex justify-end">
        <Button variant="solid" className="mb-2" onClick={() => { onClose(); navigate("/checkout"); }}>
          Checkout
        </Button>
      </div>

    </div>
  );
}

export default CartDialog;
