import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Products from "../components/Products";
import { useState } from "react";
import StartingStep from "../components/StartingStep";
import Pricing from "../components/Pricing";

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
        </div>
    );
};
export default Home;