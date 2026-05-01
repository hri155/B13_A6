import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Products from "../components/Products";
import { useState } from "react";
import StartingStep from "../components/StartingStep";
import Pricing from "../components/Pricing";
import Explore from "../components/Explore";
import Footer from "../components/Footer";

const Home = () => {
    const[carts,setCarts]=useState([])
    return(
        <div>
            <Navbar/>
            <Banner/>
            <About/>
            <div className="px-36">
                <Products carts={carts} setCarts={setCarts}/>
                <StartingStep/>
                <Pricing/>
            </div>
            <Explore/>
            <Footer/>
        </div>
    );
};
export default Home;