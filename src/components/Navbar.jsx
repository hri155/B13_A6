const Navbar = ({ carts }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-16">

      <div className="navbar-start">
        <a className="btn btn-ghost text-2xl font-bold">
          <span className="text-[#4f39f6]">DigiTools</span>
        </a>
      </div>

      <div className="navbar-end space-x-5">
        
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round"
              strokeLinejoin="round" strokeWidth="2" 
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5" />
          </svg>

          <span className="badge badge-sm indicator-item">
            {carts.length}
          </span>
        </div>

        <a>Login</a>

        <a className="btn bg-[#4f39f6] text-white rounded-full">
          Get Started
        </a>
      </div>
    </div>
  );
};
    export default Navbar;