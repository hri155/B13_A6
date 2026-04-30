import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Products from "../components/Products";

const Home = () => {
    return(
        <div>
            <Navbar/>
            <Banner/>
            <About/>
            <div className="px-36">
                <Products/>
            </div>
        </div>
    );
};
export default Home;