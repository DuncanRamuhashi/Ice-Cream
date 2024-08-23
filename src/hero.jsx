

function Hero(){
    return(
        <div className="bg-[#351a0e] text-white">
            <div className="flex pl-28 pt-8">
            <header className="flex items-center pt-6 p-11">
            <div className="logo text-4xl font-serif font-bold mr-96">Creamy</div>
                <nav className="flex items-center">
                    <ul className="flex list-none font-serif text-2xl">
                        <li className="mr-10"><a href="#about">About</a></li>
                        <li className="mr-10"><a href="#flav">Flavors</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>
            </header>
            </div>
            <hr className="w-[1000px] h-[1px] ml-[150px] border-orange-200"></hr>
            
        </div>
        
    );
}

export default Hero