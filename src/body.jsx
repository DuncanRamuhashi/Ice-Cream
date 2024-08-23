import ice from './assets/eeerwer.png';

function Body() {
    return (
        <div className="hero bg-[#351a0e] text-white h-[700px] flex justify-between items-center px-20">
            <div className='w-[600px]'>
                <h1 className='font-serif font-bold text-8xl pl-16'>
                    Grab the best ice cream.
                </h1>
                <p className="pl-16 pt-6 text-lg">
                Our commitment to quality and innovation ensures that each scoop is a delightful experience, making Frosty Delights the perfect destination for anyone seeking a sweet escape.
                </p>
                <div className='pl-16 pt-6'>
                    <button className='bg-yellow-500 rounded-full w-[200px] h-[50px] text-xl text-black font-serif font-bold'>
                        Shop Flavors
                    </button>
                </div>
            </div>
            <div className=''>
                <img src={ice} alt="Ice Cream" className='h-[550px] w-[650px] rounded-2xl object-cover' />
            </div>
        </div>
    );
}

export default Body;
