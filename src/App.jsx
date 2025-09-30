import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Customize from "./pages/Customize";
import Cart from "./pages/Cart";


function App() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FFE3E5]">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Customize" element={<Customize />} />
        <Route path="/Cart" element={<Cart />} />
      
      </Routes>

    </div>
    
  );
}
export default App;

