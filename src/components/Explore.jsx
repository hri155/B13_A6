const Explore = () => {
    return(
        <div className=" text-center bg-linear-to-r from-[#4f39f6] via-[#6a5af9] to-[#8b5cf6] space-y-2">
            <div className="mt-20 text-center">
                <h1 className="text-3xl text-white font-bold py-10">Ready to Transform Your Workflow?</h1>
                <p className="text-gray-200 mb-2">Join thousands of professionals who are already using Digitools to work smarter.<br/>
                   Start your free trial today.
                </p>
            </div>
            <div className="inline-flex gap-4 mt-5 items-center">
                <button className="btn  text-[#4f39f6] via-[#6a5af9] to-[#8b5cf6] rounded-full">Explore Products</button>
                <button className="btn bg-transparent border text-white rounded-full ">View Pricing</button>
            </div>
            <p className="mt-5 text-gray-200">14-day free trial • No credit card required • Cancel anytime</p>
        </div>

    );
};
export default Explore;