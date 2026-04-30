const About = () => {
    return(
        <div className=" flex items-center gap-28 px-10 py-8 justify-evenly bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
            <div>
                <h2 className="text-white text-4xl font-bold">50K+</h2>
                <span className="text-gray-400"><p>Active Users</p></span>
                </div>
            <div>
                <h2 className="text-white text-4xl font-bold">200+</h2>
                 <span className="text-gray-400"><p>Premium Tools</p></span>
            </div>
            <div>
                <h2 className="text-white text-4xl font-bold">4.9</h2>
                <span className="text-gray-400"><p>Rating</p></span>
            </div>
        </div>

    );
};
export default About;