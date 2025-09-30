import MainPicture from './assets/main_pic.svg';
import logo from './assets/logo.svg';

import Button from './components/button'; 
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';
import{Routes,Route,Link} from 'react-router-dom';

import Home from './pages/Home'
import Products from './pages/Products';
import Contact from './pages/Contact';
import Customize from './pages/Customize';

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FFE3E5]">
      {/* Top bar */}
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
          <Link to="/"><Button variant='ghost'>Home</Button></Link>
          <Link to="/customize"><Button variant='ghost'>Customize</Button></Link>
          <Link to="/products"><Button variant='ghost'>Products</Button></Link>
          <Link to="/contact"><Button variant='ghost'>Contact</Button></Link>

          <div className="flex gap-4 justify-center md:justify-start mt-2 md:mt-0">
            <Search className="w-6 h-6 text-[#490101]" />
            <ShoppingCart className="w-6 h-6 text-[#490101]" />
          </div>
        </div>
      { /* End of Top bar */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Customize" element={<Customize />} />
        
      </Routes>

    </div>
    
  );
}
export default App;

