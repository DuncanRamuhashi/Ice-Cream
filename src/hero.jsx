import { useEffect, useState } from 'react';

function Hero() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (!menuOpen) {
            setTimeout(() => {
                setMenuOpen(false);
            }, 10000); // 10 seconds
        }
    };

    return (
        <div className="bg-[#2C1A12] text-white w-full">
            <div className="flex flex-col md:flex-row px-4 md:px-28 py-6">
                <header className="flex justify-between items-center w-full">
                    <div className="text-3xl md:text-5xl font-serif font-bold">
                        Creamy
                    </div>
                    <button 
                        className="text-[#FFD700] text-3xl lg:hidden focus:outline-none"
                        onClick={toggleMenu}
                        aria-expanded={menuOpen}
                        aria-controls="nav-menu"
                    >
                        &#9776;
                    </button>
                    <nav id="nav-menu" className={`transition-transform duration-300 ${menuOpen ? 'block' : 'hidden'} lg:block`}>
                        <ul className="flex flex-col lg:flex-row list-none font-serif text-lg md:text-xl space-y-2 lg:space-y-0 lg:space-x-10">
                            <li>
                                <a href="#about" className="hover:text-[#FFD700] transition duration-200">About</a>
                            </li>
                            <li>
                                <a href="#flav" className="hover:text-[#FFD700] transition duration-200">Flavors</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-[#FFD700] transition duration-200">Contact Us</a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
            <hr className="border-t border-[#FF8C00] mt-4 md:mt-8" />
        </div>
    );
}

export default Hero;
