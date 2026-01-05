import MainPicture from '../assets/main_pic.svg'
import Button from '../components/button'

function Home() {
    return (
        <div className="flex flex-col-reverse md:flex-row h-auto md:h-[100vh] w-full justify-around items-center pt-30 px-4">
        
            {/* Text Section */}
            <div className="flex flex-col items-start justify-center w-full md:w-1/2 h-full text-black text-2xl md:text-4xl font-bold pb-6 md:pb-10 pr-0 md:pr-10 pl-0 md:pl-10">
                
                <div id='top' className="flex items-end justify-start w-full md:w-[35vw] select-none"> 
                    Every One Love’s <hr className="flex-1 border-t-3 border-black rounded-4xl my-2.5 ml-3 mr-15" />
                </div>  

                <div id='mid1' className="w-full h-auto select-none chalk-shake1">Yummy and</div>  
                <div id='mid2' className="w-full h-auto text-[#FF6F71] select-none chalk-shake2">Tasty Cakes!</div>  

                <div id='bot' className="text-lg md:text-base w-7/8 text-justify pt-3">
                    Order one of our incredible cakes. We have lots of options 
                    for you to choose from. You can also work with us to make 
                    your very own custom cake!
                </div>

                <div className='flex items-center justify-start pt-8 md:pt-10 flex-wrap'>
                <Button variant='red' className='mt-[2vh]'>ORDER NOW!</Button>
                <Button variant='outline' className='mt-[2vh] md:ml-[2vw]'>EXPLORE MORE</Button>
                </div>
            </div>

            {/* Image Section */}
            <div className="flex items-center justify-center w-full md:w-1/2 h-full pb-6 md:pb-15">
                <img 
                src={MainPicture} 
                alt="Main" 
                className="w-[70vw] md:w-[35vw] h-auto object-contain "  
                />
            </div>

        </div>
    )
}

export default Home
