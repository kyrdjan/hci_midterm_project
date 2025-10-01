import Button from "./button";

function CartDialog({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="cart-dialog">
        <div className="cart-header">
            <div className="flex items-center gap-2">
            <h3>Your Cart</h3>
            </div>
            <button onClick={onClose} className="cart-close-btn">✖</button>
        </div>

        {/* conditional insert here if adding items next*/}
        <div>
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
