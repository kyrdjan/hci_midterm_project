import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import Button from "./button";
import logo from "../assets/logo.svg";

function CartDialog({ isOpen,onClose}) {
    if (!isOpen) return null;

    return (
        <div className="cart-dialog">
            <div className="cart-header">
                <div className="flex items-center gap-2">
                    <h3 className=""> Your Cart</h3>
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
function Navbar() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [isCartOpen, setCartOpen] = useState(false);

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

                {/* Search */}
                <div className="flex items-center gap-4 mt-2 md:mt-0">
                <div
                    className={`flex items-center rounded px-2 overflow-hidden transition-all duration-500 ease-in-out ${
                        searchOpen ? "border border-[#490101]" : "border border-transparent"
                    }`}
                    style={{ width: searchOpen ? "200px" : "40px" }}
                    >

                    <button
                        onClick={() => setSearchOpen(!searchOpen)}
                        className="p-1 text-[#490101] hover:scale-110 transition-transform duration-300 ease-in-out"
                    >
                        <Search className="w-6 h-6" />
                    </button>

        
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search..."
                        className={`ml-2 bg-transparent outline-none text-[#490101] transition-opacity duration-300 ${
                        searchOpen ? "opacity-100" : "opacity-0 w-0"
                        }`}
                    />
                </div>
                <button
                    onClick={() => setCartOpen(!isCartOpen)}
                    className="p-1 hover:scale-110 transition-transform duration-300 ease-in-out"
                >
                    <ShoppingCart className="w-6 h-6 text-[#490101]" />
                </button>

                {/* Non-modal dialog */}
                <CartDialog isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
                </div>
            </div>
        </div>
    );
    }

export default Navbar;
