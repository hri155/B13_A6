import ToolsCard from "./ToolsCard";

const Products = () => {
    return(
       <div className="mt-20">
          <div className="text-center space-y-5">
            <h1 className="text-3xl text-black font-bold">Premium Digital Tools</h1>
                <span className="text-[#627382]">
                    <p>Choose from our curated collection of premium digital products designed<br/>
                to boost your productivity and creativity.
                </p>
                </span>
                <div className="inline-flex px-2 py-1.5 gap-4">
                    <button className="btn btn-primary rounded-full">Products</button>
                    <button className="btn rounded-full">Cart</button>
                </div>
           </div>
           <div>
              <ToolsCard/>
           </div>

        </div>
    );
};
export default Products;