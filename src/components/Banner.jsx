import banner from '../assets/banner.png';
import icon from '../assets/icon.svg';
import play from '../assets/Play.png';
const Banner = () => {
    return(
       <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-16 max-w-7xl mx-auto px-4">
        <img
        src={banner} alt="banner"
        className="w-full max-w-sm rounded-lg shadow-2xl"
        />
        <div>
        <h4>
        <span className="inline-flex items-center gap-2 text-[#4f39f6] bg-[#e1e7ff] px-2 py-1 rounded-full">
            <img src={icon} className="w-4 h-4" />
            New: AI-Powered Tools Available
        </span>
        </h4>
        <br/>
        <h1 className="text-3xl md:text-5xl font-bold">Supercharge Your<br></br>Digital Workflow</h1>
        <p className="py-6 text-[#627382]">
       Access premium AI tools, design assets, templates, and productivity
       software—all in one place. Start creating faster today.
       Explore Products
        </p>
       <div className='flex flex-col sm:flex-row gap-3'>
         <button className="btn btn-primary rounded-full">Explore Products</button>
        <button >
            <span className="inline-flex items-center gap-2 text-[#581cf2d1] font-bold bg-transparent border-2 border-fuchsia px-2 py-1.5 rounded-full">
              <img src={play} className="w-4 h-4"/>
              Watch Demo
            </span>
        </button>
       </div>
        </div>
        </div>
        </div>
     );
   };
export default Banner;