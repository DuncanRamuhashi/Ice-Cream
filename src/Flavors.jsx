// import React from 'react'

import ice1 from './assets/ice1.jpg';
import ice2 from './assets/ice2.jpg';
import ice3 from './assets/ice3.jpg';
import ice4 from './assets/ice4.jpg';
// import ice5 from './assets/ice5.jpg';
// import ice6 from './assets/ice6.jpg';

//rounded-3xl
const Flavors = () => {
  return (
    <div className="flex bg-[#351a0e] items-center justify-center py-9 w-full pt-20">
    <div className=" flex flex-col md:flex-row w-full px-16 md:gap-10 ">
        <div className="w-full bg-yellow-500 shadow-lg mb-10 space-y-6 rounded-xl p-4">
            <img
                src={ice1}
                alt="Choco Gelato"
                className="h-72 w-full rounded-xl object-cover md:rounded-se-3xl md:rounded-ss-full"
            />
            <div className="text-center">
                <h1 className="text-black text-lg font-semibold">Choco Gelato</h1>
                <p className="text-black text-lg font-medium">R 20.23</p>
                <button className="mt-4 rounded-md border-4 border-orange-950 text-black py-2 px-4 text-lg font-semibold hover:bg-orange-950 hover:text-yellow-500 transition duration-300">
                    Buy it Now
                </button>
            </div>
        </div>

        <div className="w-full bg-yellow-500 shadow-lg mb-10 space-y-6 rounded-xl p-4">
            <img
                src={ice2}
                alt="Vanilla Gelato"
                className="h-72 w-full rounded-xl object-cover  md:rounded-se-full md:rounded-ss-3xl"
            />
            <div className="text-center">
                <h1 className="text-black text-lg font-semibold">Vanilla Gelato</h1>
                <p className="text-black text-lg font-medium">R 12.23</p>
                <button className="mt-4 rounded-md border-4 border-orange-950 text-black py-2 px-4 text-lg font-semibold hover:bg-orange-950 hover:text-yellow-500 transition duration-300">
                    Buy it Now
                </button>
            </div>
        </div>
        <div className="w-full bg-yellow-500 shadow-lg mb-10 space-y-6 rounded-xl p-4">
            <img
                src={ice3}
                alt="Vanilla Gelato"
                className="h-72 w-full rounded-xl object-cover md:rounded-se-3xl md:rounded-ss-full"
            />
            <div className="text-center">
                <h1 className="text-black text-lg font-semibold">Vanilla Being</h1>
                <p className="text-black text-lg font-medium">R 30.23</p>
                <button className="mt-4 rounded-md border-4 border-orange-950 text-black py-2 px-4 text-lg font-semibold hover:bg-orange-950 hover:text-yellow-500 transition duration-300">
                    Buy it Now
                </button>
            </div>
        </div>
        <div className="w-full bg-yellow-500 shadow-lg mb-10 space-y-6 rounded-xl p-4">
            <img
                src={ice4}
                alt="Vanilla Gelato"
                className="h-72 w-full rounded-xl object-cover md:rounded-se-full md:rounded-ss-3xl"
            />
            <div className="text-center">
                <h1 className="text-black text-lg font-semibold">Banana Gelato</h1>
                <p className="text-black text-lg font-medium">R 50.23</p>
                <button className="mt-4 rounded-md border-4 border-orange-950 text-black py-2 px-4 text-lg font-semibold hover:bg-orange-950 hover:text-yellow-500 transition duration-300">
                    Buy it Now
                </button>
            </div>
        </div>
    </div>
</div>

  )
}

export default Flavors