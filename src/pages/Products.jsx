import ReviewCard from "../components/ReviewCard";
import left_pic from '../assets/bananacake.svg'
import mid_pic from '../assets/adunnocake.svg'
import right_pic from '../assets/chococake.svg'

function Products() {
  return (
    <div className = "flex flex-col items-center justify-center w-full  h-100vh">
            <div className="flex flex-row items-center justify-center w-full px-30">
                <hr className="flex-1 border-t-3 border-black rounded-lg my-3 mr-3" />
                <h1 className="text-6xl font-bold text-[#E74A4A] text-shadow-[-2px_2px_0px_#F7C4C4]">
                    Our Best Sellers!
                </h1>
                <hr className="flex-1 border-t-3 border-black rounded-lg my-3 ml-3" />
            </div>
            <div className="flex flex-wrap justify-center gap-20 mt-10 w-full h-auto px-5 ">
                <ReviewCard 
                image= {left_pic}
                rating={4.5} 
                count={42} 
                />
                <ReviewCard 
                image= {mid_pic}
                rating={4.5} 
                count={52} 
                />
                <ReviewCard 
                image= {right_pic}
                rating={4} 
                count={32} 
                />
            </div>
    </div>
    )
}
export default Products;