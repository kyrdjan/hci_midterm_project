import { Routes, Route, useLocation } from "react-router-dom";
import {AnimatePresence,motion} from "framer-motion";

import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Customize from "./pages/Customize";
import Cart from "./pages/Cart";


function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FFE3E5]">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Customize" element={<Customize />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;

