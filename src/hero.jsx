

function Hero(){
    return(
        <div className="bg-[#351a0e] text-white w-fulls">
    <div className="flex flex-col md:flex-row pl-4 md:pl-28 pt-8">
        <header className="flex flex-col md:flex-row items-center pt-6 px-4 md:px-11">
            <div className="text-2xl md:text-4xl font-serif font-bold mb-4 md:mb-0 md:mr-96">
                Creamy
            </div>
            <nav className="">
                <ul className="flex flex-col md:flex-row list-none font-serif text-xl md:text-2xl">
                    <li className="mb-2 md:mb-0 md:mr-10 ">
                        <a href="#about" className="hover:bg-yellow-500">About</a>
                    </li>
                    <li className="mb-2 md:mb-0 md:mr-10">
                        <a href="#flav" className="hover:bg-yellow-500">Flavors</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:bg-yellow-500">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
    <hr className="border-t border-orange-200 mt-4 md:mt-8" />
</div>

        
    );
}

export default Hero