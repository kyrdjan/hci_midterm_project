import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import Button from "./button";
import logo from "../assets/logo.svg";

function Navbar() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState("");

    return (
        <div className="flex flex-wrap h-auto md:h-[20vh] justify-between items-center md:px-[2vw] py-4">
        {/* Logo */}
        <div className="w-full pl-5 md:w-auto flex justify-center md:justify-start pt-[20px]">
            <img 
            src={logo} 
            alt="Logo" 
            className="max-w-[120px] md:max-w-[180px] lg:max-w-[250px] object-contain" 
            />
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 pr-5 md:gap-[5vw] w-full md:w-auto justify-center md:justify-end mt-4 md:mt-0">
            <Link to="/"><Button variant="ghost">Home</Button></Link>
            <Link to="/customize"><Button variant="ghost">Customize</Button></Link>
            <Link to="/products"><Button variant="ghost">Products</Button></Link>
            <Link to="/contact"><Button variant="ghost">Contact</Button></Link>

            {/* Search + Cart */}
            <div className="flex items-center gap-4 mt-2 md:mt-0">
            <div
                className={`flex items-center rounded px-2 overflow-hidden transition-all duration-500 ease-in-out ${
                    searchOpen ? "border border-[#490101]" : "border border-transparent"
                }`}
                style={{ width: searchOpen ? "200px" : "40px" }}
                >
                {/* Search Icon */}
                <button
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="p-1 text-[#490101] hover:scale-110 transition-transform duration-300 ease-in-out"
                >
                    <Search className="w-6 h-6" />
                </button>

                {/* Expanding Input */}
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
            <Link to="/cart" className="p-1 hover:scale-110 transition-transform duration-300 ease-in-out">
                <ShoppingCart className="w-6 h-6 text-[#490101]" />
            </Link>
            </div>
        </div>
        </div>
    );
    }

export default Navbar;
