

const Pricing=()=>{

  return(
    <div className="mt-20 space-y-6">
        <div className="text-center space-y-4">
         <h1 className="text-black text-4xl font-bold">Simple, Transparent Pricing</h1>
        <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
       </div>
    
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        <div className=" card w-full max-w-sm mx-auto bg-[#f2f2f2] shadow-sm px-4 py-2.5">
        <h2 className="text-2xl text-black font-semibold">Starter</h2>
        <p className="text-[#627382]">Perfect for getting started</p>
        <span className="text-2xl font-bold mt-5">$0<span className="text-[#627382] text-xl font-light">/month</span></span>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-[#627382]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Access to 10 free tools</span>
        </li>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-[#627382]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Basic templates</span>
        </li>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-[#627382]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Community support</span>
        </li>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-[#627382]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>1 project per month</span>
        </li>
        </ul>
        <div className="mt-18 ml-5 mr-5">
        <button className="btn bg-linear-to-r from-[#4f39f6] via-[#6a5af9] to-[#8b5cf6] text-white rounded-full w-full">Get Started Free</button>
        </div>
    </div>

    <div className="card w-full max-w-sm mx-auto bg-[#f2f2f2]-100 shadow-sm bg-linear-to-r from-[#4f39f6] via-[#6a5af9] to-[#8b5cf6] px-4 py-2.5">
        <span className="badge badge-xs badge-soft badge-warning absolute bottom-89 right-43">Most Popular</span>
         <h2 className="text-2xl text-white font-semibold">Pro</h2>
         <p className=" text-white">Best for professionals</p>
         <span className="text-2xl  text-white font-bold mt-5">$29<span className="text-white text-xl font-light">/month</span></span>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className=" text-white">Access to all premium tools</span>
        </li>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className=" text-white">Unlimited templates</span>
        </li>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className=" text-white">Priority support</span>
        </li>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className=" text-white">Unlimited projects</span>
        </li>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className=" text-white">Cloud sync</span>
        </li>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className=" text-white">Advanced analytics</span>
        </li>
        
        </ul>
        <div className="mt-6 ml-5 mr-5">
        <button className="btn btn-block rounded-full text-[#4f39f6] via-[#6a5af9] to-[#8b5cf6]">Start Pro Trial</button>
        </div>
    </div>

        <div className="card w-full max-w-sm mx-auto bg-[#f2f2f2] shadow-sm px-4 py-2.5">
         <h2 className="text-2xl text-black font-semibold">Enterprise</h2>
         <p className="text-[#627382]">For teams and businesses</p>
         <span className="text-2xl font-bold mt-5">$99<span className="text-[#627382] text-xl font-light">/month</span></span>

        <ul className="mt-6 flex flex-col gap-2 text-xs">
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-[#627382]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Everything in Pro</span>
        </li>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-[#627382]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Team collaboration</span>
        </li>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-[#627382]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Custom integrations</span>
        </li>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-[#627382]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Dedicated support</span>
        </li>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-[#627382]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>SLA guarantee</span>
        </li>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-[#627382]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Custom branding</span>
        </li>

        </ul>
        <div className="mt-6 ml-5 mr-5">
        <button className="btn  bg-linear-to-r from-[#4f39f6] via-[#6a5af9] to-[#8b5cf6] text-white rounded-full w-full">Contact Sales</button>
        </div>
    </div>
    </div>
</div>

    );
};
export default Pricing;
 