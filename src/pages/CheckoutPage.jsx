import Button from "../components/button";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CheckoutPage() {
  //Notif
  const [showNotif, setShowNotif] = useState(false);

  const handleProceed = () => {
    setShowNotif(true);

    // navigate after 2.5 seconds
    setTimeout(() => {
      navigate("/");
    }, 2500);
  };

  // Cart items
  const cartItems = [
    { name: "Banana Loaf", quantity: 1, price: 180},
    { name: "Revel Bars", quantity: 1, price: 180 },
  ];

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0);
  const tax = subtotal * 0.12; // 12% tax
  const total = subtotal + tax;

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFE3E5]  flex flex-col items-center justify-center p-4 sm:p-10 bg-[#FFE3E5]">
      {showNotif && (
       <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">

          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="font-semibold">Sagot ko na ang bayad!</span>
          </div>
        </div>
      )}

      {/* Main container */}
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
        <div className="w-full h-auto flex flex-row items-center justify-between px-6 pt-6">
          <div className="w-full  md:w-auto flex justify-start md:justify-start">
              <img 
                  src={logo} 
                  alt="Logo" 
                  className="max-w-[120px] md:max-w-[180px] lg:max-w-[250px] object-contain" 
                  />
          </div>
          {/* Page Header */}
          <h1 className="text-3xl sm:text-5xl font-bold text-[#E74A4A] text-shadow-[-2px_2px_0px_#F7C4C4] my-2">
            Checkout
          </h1>
        </div>
        {/* Cart Items */}
        <div className="p-6 border-b border-gray-200 ">
          <h2 className="text-xl font-semibold mb-4">Your Items</h2>
          <div className="grid grid-cols-3 gap-4 text-gray-600">
              <div className="flex justify-start py-1">
                <span>Item</span>
              </div>
              <div className="flex justify-center py-1">
                <span>Quantity</span>
              </div>
              <div className="flex justify-end py-1">
                <span >Price</span> 
              </div>
          </div>
          {cartItems.map((item, index) => (
            <div className="grid grid-cols-3 gap-4" key={index}>
              <div key={index} className="flex justify-start py-1">
                <span className="font-medium">{item.name}</span>
              </div>
              <div key={index} className="flex justify-center py-1 text-gray-600">
                <span className="font-medium">{item.quantity}</span>
              </div>
              <div key={index} className="flex justify-end py-1">
                <span className="font-medium">₱{item.price * item.quantity}</span> 
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="p-6 flex flex-col ">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">₱{subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Tax (12%)</span>
            <span className="font-medium">₱{tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span>₱{total.toFixed(2)}</span>
          </div>

          <div className="flex justify-end">
            <Button variant="solid" className="w-1/2 py-3 text-white text-xl transition-colors transition-transform duration-200 ease-in-out" onClick={handleProceed}> 
              Proceed to Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
