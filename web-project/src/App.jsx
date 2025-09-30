import MainPicture from './assets/main_pic.svg';
import logo from './assets/logo.svg';

import Button from './components/button'; 
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FFE3E5]">
      {/* Top bar */}
      <div className="flex flex-wrap h-auto md:h-[20vh] justify-between items-center  md:px-[2vw] py-4">
  
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
          <Button variant='ghost'>Home</Button>
          <Button variant='ghost'>Customize</Button>
          <Button variant='ghost'>Products</Button>
          <Button variant='ghost'>Contact</Button>

          <div className="flex gap-4 justify-center md:justify-start mt-2 md:mt-0">
            <Search className="w-6 h-6 text-[#490101]" />
            <ShoppingCart className="w-6 h-6 text-[#490101]" />
          </div>
        </div>

      </div>

      {/* Bottom section */}
      <div className="flex flex-col-reverse md:flex-row h-auto md:h-[80vh] w-full justify-around items-center px-4">
        
        {/* Text Section */}
        <div className="flex flex-col items-start justify-center w-full md:w-1/2 h-full text-black text-2xl md:text-4xl font-bold pb-6 md:pb-10 pr-0 md:pr-10 pl-0 md:pl-10">
          
          <div id='top' className="flex items-end justify-start w-full md:w-[35vw]"> 
            Every One Love’s <hr className="flex-1 border-t-2 border-black rounded-lg my-3 ml-3" />
          </div>  

          <div id='mid1' className="w-full h-auto">Yummy and</div>  
          <div id='mid2' className="w-full h-auto text-[#FF6F71]">Tasty Cakes!</div>  

          <div id='bot' className="text-sm md:text-base w-full pt-3">
            Order one of our incredible cakes. We have lots of options 
            for you to choose from. You can also work with us to make 
            your very own custom cake!
          </div>

          <div className='flex items-center justify-start pt-8 md:pt-10 flex-wrap'>
            <Button variant='red' className='mt-[2vh]'>Order Now!</Button>
            <Button variant='outline' className='mt-[2vh] md:ml-[2vw]'>Learn More</Button>
          </div>
        </div>

        {/* Image container */}
        <div className="flex items-center justify-center w-full md:w-1/2 h-full pb-6 md:pb-15">
          <img 
            src={MainPicture} 
            alt="Main" 
            className="w-[70vw] md:w-[35vw] h-auto object-contain" 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
