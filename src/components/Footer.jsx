    
import { useState } from "react";

function Footer() {
    return (
        <footer className="bg-[#490101] text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-10 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* About Section */}
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#F7C4C4]">Hanny's Cakes & Pastries</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                A taste to remember!
                </p>
                <div className="flex gap-4 pt-2">
                <a href="https://www.facebook.com/profile.php?id=100057458259374" className="hover:text-[#F7C4C4] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    
                    </svg>
                </a>
                </div>
            </div>

            <div className="space-y-4">
            </div>

            

            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#6B0202]">
            <div className="max-w-7xl mx-auto px-10 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                ©Hanny's Cakes & Pastries. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-[#F7C4C4] transition-colors">
                    Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-[#F7C4C4] transition-colors">
                    Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-[#F7C4C4] transition-colors">
                    Cookie Policy
                </a>
                </div>
            </div>
            </div>
        </div>
        </footer>
    );
    }

    export default Footer;