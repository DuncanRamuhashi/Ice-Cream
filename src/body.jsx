import ice from './assets/eeerwer.png';

function Body() {
    return (
        <div className="hero bg-[#351a0e] text-white h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-20 py-10">
            <div className='w-full md:w-[600px]'>
                <h1 className='font-serif font-bold text-4xl md:text-6xl lg:text-8xl md:pl-16'>
                    Grab the best ice cream.
                </h1>
                <p className="md:pl-16 pt-6 text-base md:text-lg">
                    Our commitment to quality and innovation ensures that each scoop is a delightful experience, making Frosty Delights the perfect destination for anyone seeking a sweet escape.
                </p>
                <div className='md:pl-16 pt-6'>
                    <a href='#flav'>
                        <button className='bg-yellow-500 rounded-full w-full md:w-[200px] h-[50px] text-lg md:text-xl text-black font-serif font-bold'>
                            Shop Flavors
                        </button>
                    </a>
                </div>
            </div>
            <div className='pt-6 md:pt-0'>
                <img 
                    src={ice} 
                    alt="Ice Cream" 
                    className='h-36 md:h-[450px] lg:h-[550px] w-full md:w-[650px] rounded-2xl object-cover' 
                />
            </div>
        </div>
    );
}

export default Body;
