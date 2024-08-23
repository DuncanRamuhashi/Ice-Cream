// import React from 'react';
import img from './assets/pexels-sittisak-c-842235-1739347.jpg';

const About = () => {
    return (
        <div className='bg-[#351a0e]'>
        <section className="bg-yellow-500 min-h-screen flex flex-col items-center font-serif rounded-tl-[500px] rounded-tr-[500px]">
            <div className="flex flex-col items-center mt-8 ">
                <div className="flex flex-wrap justify-center gap-6 py-1 font-semibold">
                    <button className="bg-yellow-400 text-white py-2 px-5 rounded-full">Vanilla</button>
                    <button className="bg-amber-800 text-white py-2 px-5 rounded-full">Choco Cookies</button>
                    <button className="bg-orange-500 text-white py-2 px-5 rounded-full">Mango</button>

                    <button className="bg-yellow-600 text-white py-2 px-5 rounded-full">Vanilla Bean</button>
                    <button className="bg-pink-500 text-white py-2 px-5 rounded-full">Strawberry</button>
                    <button className="bg-green-500 text-white py-2 px-5 rounded-full">Matcha</button>
                    <button className="bg-orange-400 text-white py-2 px-5 rounded-full">Salted Caramel</button>
                    <button className="bg-green-200 text-white py-2 px-5 rounded-full">Pistachio</button>
                </div>

            </div>


            <div className="flex flex-col md:flex-row items-center justify-center gap-1 py-60 px-4 w-[90%]">
                <div className="w-full md:w-[40%]">
                    <img
                        src={img}
                        alt="Example"
                        className="w-[60%] h-auto rounded-xl shadow-md"
                    />
                </div>

                <div className="flex-grow text-center md:text-left">
                    <h2 className="text-4xl font-bold text-white mb-4 font-serif">ABOUT US</h2>
                    <p className="text-lg font-normal font-serif mx-auto md:mx-0 max-w-xl">
                        At Frosty Delights, we are passionate about crafting the finest ice creams with only the freshest ingredients. Our artisanal flavors are made from premium, locally-sourced dairy and real fruit, creating a deliciously creamy texture and a burst of flavor in every bite. From classic vanilla and chocolate to inventive creations like salted caramel pretzel and mango passionfruit swirl, we offer a wide range of options to satisfy every palate. Our commitment to quality and innovation ensures that each scoop is a delightful experience, making Frosty Delights the perfect destination for anyone seeking a sweet escape. Join us and indulge in a moment of pure, frozen bliss!
                    </p>
                </div>
            </div>
        </section>
        </div>
    );
};

export default About;
