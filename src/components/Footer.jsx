const Footer = () => {
    return(
        <div className=" bg-[#101727] px-16 py-10">
        <footer className="footer sm:footer-horizontal text-base-content ">
    <aside>
       <h1 className="text-2xl text-white font-bold py-4">DigiTools</h1>
        <p className="text-white">
        Premium digital tools for creators, <br/>
        professionals, and businesses. Work smarter <br/>
         with our suite of powerful tools.
        </p>
    </aside>
    <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
    </nav>
    <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
    </nav>
    <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
    </nav>
    </footer>
            
 </div>

 );
};
export default Footer;