import Hero from './hero'
import Body from './body'
import Flavors from './Flavors'
import Contact from "./ContactPage"
import Footer from './Footer'
import About from './About'


function App(){
    return(
        <div>
        
            <Hero></Hero>
            <Body></Body>         
            <section id='about'> <About></About></section>
            <section id='flav'> <Flavors></Flavors></section>
            <section id='contact'><Contact></Contact></section>
            <section id='footer'><Footer></Footer></section>
        </div>
    );
}

export default App