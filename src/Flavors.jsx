import ice1 from './assets/ice1.jpg';
import ice2 from './assets/ice2.jpg';
import ice3 from './assets/ice3.jpg';
import ice4 from './assets/ice4.jpg';

const Flavors = () => {
    return (
        <div className="flex bg-[#351a0e] items-center justify-center py-9 w-full pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4 md:px-16">
                {/* Flavor Card 1 */}
                <div className="bg-yellow-500 shadow-lg mb-10 space-y-6 rounded-xl p-4">
                    <img
                        src={ice1}
                        alt="Choco Gelato"
                        className="h-72 w-full rounded-xl object-cover"
                    />
                    <div className="text-center">
                        <h1 className="text-black text-lg font-semibold">Choco Gelato</h1>
                        <p className="text-black text-lg font-medium">R 20.23</p>
                        <button className="mt-4 rounded-md border-4 border-orange-950 text-black py-2 px-4 text-lg font-semibold hover:bg-orange-950 hover:text-yellow-500 transition duration-300">
                            Buy it Now
                        </button>
                    </div>
                </div>

                {/* Flavor Card 2 */}
                <div className="bg-yellow-500 shadow-lg mb-10 space-y-6 rounded-xl p-4">
                    <img
                        src={ice2}
                        alt="Vanilla Gelato"
                        className="h-72 w-full rounded-xl object-cover"
                    />
                    <div className="text-center">
                        <h1 className="text-black text-lg font-semibold">Vanilla Gelato</h1>
                        <p className="text-black text-lg font-medium">R 12.23</p>
                        <button className="mt-4 rounded-md border-4 border-orange-950 text-black py-2 px-4 text-lg font-semibold hover:bg-orange-950 hover:text-yellow-500 transition duration-300">
                            Buy it Now
                        </button>
                    </div>
                </div>

                {/* Flavor Card 3 */}
                <div className="bg-yellow-500 shadow-lg mb-10 space-y-6 rounded-xl p-4">
                    <img
                        src={ice3}
                        alt="Vanilla Bean"
                        className="h-72 w-full rounded-xl object-cover"
                    />
                    <div className="text-center">
                        <h1 className="text-black text-lg font-semibold">Vanilla Bean</h1>
                        <p className="text-black text-lg font-medium">R 30.23</p>
                        <button className="mt-4 rounded-md border-4 border-orange-950 text-black py-2 px-4 text-lg font-semibold hover:bg-orange-950 hover:text-yellow-500 transition duration-300">
                            Buy it Now
                        </button>
                    </div>
                </div>

                {/* Flavor Card 4 */}
                <div className="bg-yellow-500 shadow-lg mb-10 space-y-6 rounded-xl p-4">
                    <img
                        src={ice4}
                        alt="Banana Gelato"
                        className="h-72 w-full rounded-xl object-cover"
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
    );
};

export default Flavors;
