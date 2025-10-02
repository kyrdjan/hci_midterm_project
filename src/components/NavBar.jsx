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

    return (
        <div className="flex flex-wrap h-auto md:h-[20vh] justify-between items-center md:px-[2vw] py-4">
    
            <div className="w-full pl-5 md:w-auto flex justify-center md:justify-start pt-[20px]">
                <img 
                src={logo} 
                alt="Logo" 
                className="max-w-[120px] md:max-w-[180px] lg:max-w-[250px] object-contain" 
                />
            </div>

        
            <div className="flex flex-wrap gap-4 pr-5 md:gap-[5vw] w-full md:w-auto justify-center md:justify-end mt-4 md:mt-0">
                <Link to="/"><Button variant="ghost">Home</Button></Link>
                <Link to="/customize"><Button variant="ghost">Customize</Button></Link>
                <Link to="/products"><Button variant="ghost">Products</Button></Link>
                <Link to="/contact"><Button variant="ghost">Contact</Button></Link>

                <div>
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

                    
                    <CartDialog isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
                    <MessageDialog isOpen={isMessageOpen} onClose={() => setMessageOpen(false)} />
                </div>
            </div>
        </div>
        
    );
    }

export default Navbar;
