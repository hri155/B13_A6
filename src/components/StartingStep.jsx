import user from "../assets/user.png";
import box from "../assets/package.png";
import rocket from "../assets/rocket.png";

const StartingStep=()=>{
    return(
    <div className=" mt-20 text-center space-y-4">
          
        <h1 className="text-3xl text-black font-bold">Get Started in 3 Steps</h1>
        <p>Start using premium digital tools in minutes, not hours.</p>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">

      <div className="bg-white rounded-2xl shadow-md p-8 text-center relative">
        <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
          01
        </span>

        <img src={user} className="w-16 mx-auto mb-4" />

        <h2 className="text-xl font-bold">Create Account</h2>
        <p className="text-gray-500 mt-2 text-sm">
          Sign up for free in seconds. No credit card required.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8 text-center relative">
        <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
          02
        </span>

        <img src={box} className="w-16 mx-auto mb-4" />

        <h2 className="text-xl font-bold">Choose Products</h2>
        <p className="text-gray-500 mt-2 text-sm">
          Browse our catalog and select the tools you need.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8 text-center relative">
        <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
          03
        </span>

        <img src={rocket} className="w-16 mx-auto mb-4" />

        <h2 className="text-xl font-bold">Start Creating</h2>
        <p className="text-gray-500 mt-2 text-sm">
          Download and start using your tools instantly.
        </p>
      </div>

    </div>
        </div>

    );
};
export default StartingStep;