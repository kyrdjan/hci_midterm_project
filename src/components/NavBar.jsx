import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, ShoppingCart } from "lucide-react";
import Button from "./button";
import logo from "../assets/logo.svg";
import CartDialog from "./Cart";
import MessageDialog from "./MessageDialog";

function Navbar() {

    const location = useLocation(); // current URL path

    // Hide navbar entirely on /checkout
    if (location.pathname === "/checkout") {
        return null;
    }
    // Map pathname to active button key
    const pathnameToButton = {
    "/": "home",
    "/customize": "customize",
    "/products": "products",
    "/contact": "contact",
    };


    const [isCartOpen, setCartOpen] = useState(false);
    const [isMessageOpen, setMessageOpen] = useState(false);

    const activeButton = pathnameToButton[location.pathname] || "home";

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex flex-wrap h-auto md:h-[18vh] justify-between items-center md:px-[2vw] py-4">
    
            {/* Logo */}
            <div className="w-full pl-5 md:w-auto flex justify-center md:justify-start pt-[10px]">
                <img 
                    src={logo} 
                    alt="Logo" 
                    className="max-w-30 md:max-w-45 lg:max-w-62.5 object-contain" 
                />
            </div>

            {/* Navigation Links */}
            <div className={`flex flex-wrap gap-4 pr-5 md:gap-[5vw] w-full md:w-auto justify-center md:justify-start mt-4 md:mt-0 ${activeButton === "products" ? "-mr-[15px]" : ""}`}>
                <Link to="/">
                <Button variant={activeButton === "home" ? "red_nav" : "ghost"}>Home</Button>
                </Link>

                <Link to="/customize">
                <Button variant={activeButton === "customize" ? "red_nav" : "ghost"}>Customize</Button>
                </Link>

                <Link to="/products">
                <Button variant={activeButton === "products" ? "red_nav" : "ghost"}>Products</Button>
                </Link>

                <Link to="/contact">
                <Button variant={activeButton === "contact" ? "red_nav" : "ghost"}>Contact</Button>
                </Link>

                {/* Icons */}
                <div className="flex gap-3">
                    <button
                    onClick={() => {
                        setMessageOpen((prev) => {
                        if (!prev) setCartOpen(false); // close cart if opening message
                        return !prev;
                        });
                    }}
                    className="p-1 hover:scale-110 transition-transform duration-300 ease-in-out"
                    >
                    <MessageCircle className="w-6 h-6 text-[#490101]" />
                    </button>

                    <button
                    onClick={() => {
                        setCartOpen((prev) => {
                        if (!prev) setMessageOpen(false); // close message if opening cart
                        return !prev;
                        });
                    }}
                    className="p-1 hover:scale-110 transition-transform duration-300 ease-in-out"
                    >
                    <ShoppingCart className="w-6 h-6 text-[#490101]" />
                    </button>

                </div>
            </div>

            {/* Modals */}
            <CartDialog isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
            <MessageDialog isOpen={isMessageOpen} onClose={() => setMessageOpen(false)} />
        </div>
    );
}

export default Navbar;
