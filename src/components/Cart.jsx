import Button from "./button";

function CartDialog({ isOpen, onClose }) {
    return (
        <div
        className={`cart-drawer ${isOpen ? "open" : ""}`}
        >
        <div className="cart-header">
            <h3>Your Cart</h3>
            <button onClick={onClose} className="cart-close-btn">✖</button>
        </div>

        {/* Example placeholder */}
        <div className="cart-body">
            <div className="flex justify-center items-center h-32">
            <p className="text-gray-500">Your cart is empty.</p>
            </div>
        </div>

        <div className="flex justify-end">
            <Button variant="solid" className="mb-2">Checkout</Button>
        </div>
        </div>
    );
}

export default CartDialog;
