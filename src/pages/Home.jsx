import MainPicture from '../assets/main_pic.svg'
import CustomButton from '../components/button'
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="
      flex flex-col-reverse md:flex-row
      min-h-screen w-full
      justify-around items-end
      pt-24 md:pt-0
      px-4 
    ">

      {/* Text Section */}
      <div className="
        flex flex-col
        items-start justify-center
        w-full md:w-1/2
        text-black text-2xl md:text-4xl font-bold
        pb-6 md:pb-20
        md:px-10
      ">

        <div
          id="top"
          className="
            flex items-end justify-start
            w-full md:w-[30vw]
            select-none
            flex-wrap
          "
        >
          Every One Love’s
          <hr className="
            hidden md:flex
            flex-1
            border-t-3 border-black
            rounded-4xl
            my-2 ml-3
          " />
        </div>

        <div id="mid1" className="w-full h-auto select-none chalk-shake1">
          Yummy and
        </div>

        <div id="mid2" className="w-full h-auto text-[#FF6F71] select-none chalk-shake2">
          Tasty Cakes!
        </div>

        <div
          id="bot"
          className="text-lg md:text-base w-full md:w-7/8 text-justify pt-3"
        >
          Order one of our incredible cakes. We have lots of options
          for you to choose from. You can also work with us to make
          your very own custom cake!
        </div>

        <div className="flex items-center justify-start pt-4 md:pt-10 flex-wrap gap-4">
          <CustomButton
            variant="red"
            className="mt-[2vh]"
            onClick={() => navigate("/customize")}
          >
            ORDER NOW!
          </CustomButton>

          <CustomButton
            variant="outline"
            className="mt-[2vh]"
            onClick={() => navigate("/products")}
          >
            EXPLORE MORE
          </CustomButton>
        </div>
      </div>

      {/* Image Section */}
      <div className="
        flex items-center justify-center
        w-full md:w-1/2
        pb-6 md:pb-15
      ">
        <img
          src={MainPicture}
          alt="Main"
          className="
            w-[80vw] sm:w-[70vw]
            md:w-[35vw]
            h-auto object-contain
          "
        />
      </div>

    </div>
  );
}

export default Home;
