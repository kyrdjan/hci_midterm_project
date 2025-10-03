import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, ShoppingCart } from "lucide-react";
import Button from "./button";
import logo from "../assets/logo.svg";
import CartDialog from "./Cart";
import MessageDialog from "./MessageDialog";

function Navbar() {
    const [isCartOpen, setCartOpen] = useState(false);
    const [isMessageOpen, setMessageOpen] = useState(false);
    const [activeButton, setActiveButton] = useState("home"); // track last clicked nav button

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex flex-wrap h-auto md:h-[20vh] justify-between items-center md:px-[2vw] py-4">
    
            {/* Logo */}
            <div className="w-full pl-5 md:w-auto flex justify-center md:justify-start pt-[10px]">
                <img 
                    src={logo} 
                    alt="Logo" 
                    className="max-w-[120px] md:max-w-[180px] lg:max-w-[250px] object-contain" 
                />
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap gap-4 pr-5 md:gap-[5vw] w-full md:w-auto justify-center md:justify-end mt-4 md:mt-0">
                <Link to="/">
                    <Button 
                        variant={activeButton === "home" ? "red_nav" : "ghost"} 
                        onClick={() => setActiveButton("home")}
                    >
                        Home
                    </Button>
                </Link>
                <Link to="/customize">
                    <Button 
                        variant={activeButton === "customize" ? "red_nav" : "ghost"} 
                        onClick={() => setActiveButton("customize")}
                    >
                        Customize
                    </Button>
                </Link>
                <Link to="/products">
                    <Button 
                        variant={activeButton === "products" ? "red_nav" : "ghost"} 
                        onClick={() => setActiveButton("products")}
                    >
                        Products
                    </Button>
                </Link>
                <Link to="/contact">
                    <Button 
                        variant={activeButton === "contact" ? "red_nav" : "ghost"} 
                        onClick={() => setActiveButton("contact")}
                    >
                        Contact
                    </Button>
                </Link>

                {/* Icons */}
                <div className="flex gap-3">
                    <button
                        onClick={() => setMessageOpen(!isMessageOpen)} 
                        className="p-1 hover:scale-110 transition-transform duration-300 ease-in-out"
                    >
                        <MessageCircle className="w-6 h-6 text-[#490101]" />
                    </button>

                    <button
                        onClick={() => setCartOpen(!isCartOpen)}
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
