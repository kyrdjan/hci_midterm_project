import ReviewCard from "../components/ReviewCard";
import ProductCard from "../components/ProductCard";

import left_pic from '../assets/bananacake.svg'
import mid_pic from '../assets/adunnocake.svg'
import right_pic from '../assets/chococake.svg'



function Products() {
    return (
    <div className="h-auto w-full flex flex-col items-center justify-center">
        <div className = "flex flex-col items-center justify-center w-full h-[100vh] mb-[50px]">
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

        <div className="h-[70vh] w-full flex flex-row items-center justify-around bg-white border-t-3 border-b-3 ">
            <div className="flex flex-col items-center justify-center w-full h-auto mt-[-9.3%]">
                
                <div className="flex flex-row items-center justify-center w-full px-30 ">

                    <h1 className="text-6xl font-bold pr-3">
                    Today's
                    </h1>
                    <h1 className="text-6xl font-bold text-[#E74A4A]">
                        Special!
                    </h1>
                
                </div>

            </div>

            <div className="flex flex-row items-center justify-center w-full h-auto">
                <div className="text-4xl w-1/2 flex flex-wrap alignment-center justify-center bg-green-100 h-auto"> 
                    hehe 
                </div>
                
                <div className="text-4xl w-1/2 flex flex-wrap alignment-center justify-center bg-yellow-100 h-auto"> 
                    huhu 
                </div>
            </div>
            
        </div>

        <div className="h-[100vh] w-full flex flex-col items-center justify-center">
            <ProductCard
                title="Chocolate Brownies"
                price="180.00"
                description={[
                    "Rich, fudgy, and loaded with chunks of premium dark chocolate.",
                    "Perfect for chocolate lovers who want an indulgent treat!",
                ]}
                tags={["Super Fudgy 🍫", "Kids love it!", "Addicting 😍"]}
                rightComponent={
                    <ReviewCard 
                    image= {left_pic}
                    rating={4.5} 
                    count={42} 
                    />
                }
            />
        </div>

        <div className="h-[100vh] w-full flex flex-col items-center justify-center">
            <ProductCard
                title="Chocolate Brownies"
                price="180.00"
                description={[
                    "Rich, fudgy, and loaded with chunks of premium dark chocolate.",
                    "Perfect for chocolate lovers who want an indulgent treat!",
                ]}
                tags={["Super Fudgy 🍫", "Kids love it!", "Addicting 😍"]}
                rightComponent={
                    <ReviewCard 
                    image= {left_pic}
                    rating={4.5} 
                    count={42} 
                    />
                }
            />
        </div>

    </div>
    )
}
export default Products;