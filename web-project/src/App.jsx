import MainPicture from './assets/main_pic.svg';

function App() {
  return (
    <>
      <div className="flex flex-col w-[100vw] h-[100vh] min-w-[500px] min-h-[15vhpx]  bg-blue-200">
        {/* Top bar (1/8 height) */}
        <div className="flex bg-[#FFE3E5] h-[18vh] justify-between items-center px-[2vw] overflow-x-auto">
          {/* Logo */}
          <div className="min-w-[220px] min-h-[80px] flex-shrink-0 flex items-center justify-center border-2 border-black">
            Logo
          </div>

          {/* Navigation */}
          <ul className="flex gap-[5vw] min-w-[300px] min-h-[80px] flex-shrink-0 items-center justify-center p-[1vw]">
            <li>Home</li>
            <li>Customize</li>
            <li>Products</li>
            <li>Contact</li>
          
            {/* Cart / additional items */}
            <div className="flex gap-[1vw] min-w-[100px] justify-around">
              <ul className="flex gap-[1vw] min-w-[100px]">
                <li>O</li>
                <li>Cart</li>
              </ul>
            </div>
          </ul>
        </div>

        {/* Bottom section (7/8 height) */}
        <div className="flex bg-[#11E3E5] h-[82vh] w-screen min-w-[400px] justify-around items-center">
          <div  className="flex items-center justify-center w-1/2 h-full bg-[#222222] text-white text-4xl font-bold">
            tobeput
          </div>

          {/* Image container */}
          <div className="flex items-center justify-center w-1/2 h-full bg-[#112225] ">
            <img
              src={MainPicture}
              alt="Main"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
