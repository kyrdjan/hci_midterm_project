import FadeInSection from '../animations/FadeInSection';

import Button from '../components/button';
import ProductCard from "../components/ProductCard";
import ReviewCard from "../components/ReviewCard";

import left_pic from '../assets/bananacake.svg';
import mid_pic from '../assets/adunnocake.svg';
import right_pic from '../assets/chococake.svg';
import creamcheese from '../assets/creamcheese.svg';



var tags = ["Very Tasty! 😊", "Kalami!","Garlic my Fav! ", "Huyy dako siya sa personal!", "<3",  "More please!", "Pa 22ya"]

function Products() {
    return (
    <div className="h-auto w-full flex flex-col items-center justify-center">

        <FadeInSection className="flex flex-col items-center justify-center w-full h-[100vh]" value={0.6}>
            <div className = "flex flex-col items-center justify-center w-full h-[100vh] pt-20">
                <div className="flex flex-row items-center justify-center w-full px-30">
                    <hr className="flex-1 border-t-3 border-black rounded-lg my-3 mr-3" />
                    <h1 className="text-6xl font-bold text-[#E74A4A] text-shadow-[-2px_2px_0px_#F7C4C4]">
                        Our Best Sellers!
                    </h1>
                    <hr className="flex-1 border-t-3 border-black rounded-lg my-3 ml-3" />
                </div>
                <div className="flex flex-wrap justify-center gap-20 mt-10 w-full h-auto px-5 ">
                    <div className="flex flex-col gap-5">
                        <ReviewCard 
                        image= {left_pic}
                        rating={4.5} 
                        count={42} 
                        />
                        <div className='flex flex-row w-full alignment-center justify-center'>
                            <div id='bot'> Chocolate Banana Loaf </div> 
                            <div className='px-4'> - </div>
                            <div id='addtocartfont' className='text-lg'> ₱ 160</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <ReviewCard 
                        image= {mid_pic}
                        rating={4.5} 
                        count={52} 
                        />
                        <div className='flex flex-row w-full alignment-center justify-center'>
                            <div id='bot'> Cassava Cake </div> 
                            <div className='px-4'> - </div>
                            <div id='addtocartfont' className='text-lg'> ₱ 175</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <ReviewCard 
                        image= {right_pic}
                        rating={4} 
                        count={32} 
                        />
                        <div className='flex flex-row w-full alignment-center justify-center'>
                            <div id='bot'> Moist Cake in a Tub </div> 
                            <div className='px-4'> - </div>
                            <div id='addtocartfont' className='text-lg'> ₱ 185</div>
                        </div>
                    </div>
                </div>
            </div>
        </FadeInSection>

        <FadeInSection className="flex flex-col items-center justify-center w-full h-auto" value={0.6}>
            <div className="flex flex-col items-center justify-center w-full h-auto z-20">
                
                <div id='special' className="flex flex-row items-center justify-center w-full h-full">
                    <div className="w-50 pl-20 ">
                        <hr className="flex-1 border-t-3 border-black rounded-lg  w-full " />
                    </div>

                    <div className="w-1/3">

                        <div className="absolute z-10 transform -translate-y-1/2 translate-x-[3%] flex flex-row items-center justify-center">
                            <h1 className="ml-3 text-5xl font-bold pr-3 ">
                                Today's
                            </h1>
                            <h1 className="text-5xl font-bold text-[#E74A4A] ">
                                Special!
                            </h1>
                        </div>
                    </div>
                    

                    <div className="w-full pr-20">
                        <hr className="flex-1 border-t-3 border-black rounded-lg w-full" />
                    </div>
                </div>
            </div>
    
            <div className="h-[70vh] w-full flex flex-col items-center justify-center bg-white">

                <div className="flex flex-row items-center justify-center w-[90%] h-auto ml-10">
                    <div className=" w-1/2 flex flex-wrap alignment-center justify-start h-auto"> 
                    
                        <div className="flex flex-rows w-full h-auto alignment-center justify-between">
                                <div id='special' className="text-5xl text-[#E74A4A] ">
                                    Creamcheese Garlic Bread
                                </div>
                                <div className="text-5xl flex flex-rows w-auto h-auto">
                                    <div className="pr-1">₱</div>
                                    <div id='price'>
                                        135.00
                                    </div>
                                </div>
                        </div>
                    
                        <div id='bot' className="text-lg justify-center alignment-center w-full h-auto pb-4 pt-3 text-justify ">
                                Today, we're spotlighting the pure, creamy indulgence of premium cream cheese. Celebrated for its smooth texture and perfect tang, it's the versatile star of everything from decadent desserts to savory brunch creations. Discover the difference quality makes.
                        </div>

                        <div className="  w-3/4 " >
                            <hr className="flex-1 border-t-3 border-black rounded-lg" />
                        </div>
                    
                        <div className="flex flex-wrap alignment-center justify-start gap-2 py-5">
                            {tags.map((tag, idx) => (
                                <span
                                key={idx}
                                className="px-5 py-2 border-1 border-[#FF8315] rounded-lg text-sm text-bold"
                                >
                                {tag}
                                </span>
                            ))}
                        </div>
                            
                        <Button variant='solid'>ADD TO CART!</Button>
                    </div>
                    <div className="text-4xl w-1/3 flex flex-wrap alignment-center justify-center h-auto "> 
                            <ReviewCard 
                            image= {creamcheese}
                            rating={4} 
                            count={32}
                            borderDesign={'border-2 border-[#FF8315]'}
                            />
                    </div>
                </div>
            </div>

            <div className="w-full h-auto px-20">
                <hr className="flex-1 border-t-3 border-black rounded-lg w-full " />
            </div>
            
        </FadeInSection>

        <FadeInSection className="flex flex-col items-center justify-center w-full h-[100vh]" value={0.6}>
            <div className="h-[100vh] w-full flex flex-col items-center justify-center">
                <ProductCard
                    title="Chocolate Brownies 1"
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
                        borderDesign={'border-2 border-[#FF8315]'}
                        />
                    }
                />
            </div>
        </FadeInSection>

        <FadeInSection className="flex flex-col items-center justify-center w-full h-[100vh] " value={0.6}>
            <div className="h-[100vh] w-full flex flex-col items-center justify-center">
                <ProductCard
                    title="Chocolate Brownies 2"
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
                        borderDesign={'border-2 border-[#FF8315]'}
                        />
                    }
                />
            </div>
        </FadeInSection>

        <FadeInSection className="flex flex-col items-center justify-center w-full h-[100vh]" value={0.6}>
            <div className="h-[100vh] w-full flex flex-col items-center justify-center">
                <ProductCard
                    title="Chocolate Brownies 3"
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
                        borderDesign={'border-2 border-[#FF8315]'}
                        />
                    }
                />
            </div>
        </FadeInSection>

        <FadeInSection className="flex flex-col items-center justify-center w-full h-[100vh]" value={0.6}>
            <div className="h-[100vh] w-full flex flex-col items-center justify-center">
                <ProductCard
                    title="Chocolate Brownies 4"
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
                        borderDesign={'border-2 border-[#FF8315]'}
                        />
                    }
                />
            </div>
        </FadeInSection>

    </div>
    )
}
export default Products;