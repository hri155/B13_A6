import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";

const Footer = () => {
    return(
        <div className=" bg-[#101727] px-16 py-10">
        <footer className="footer sm:footer-horizontal text-base-content ">
    <aside>
       <h1 className="text-4xl text-white font-bold py-4">DigiTools</h1>
        <p className="text-white">
        Premium digital tools for creators, <br/>
        professionals, and businesses. Work smarter <br/>
         with our suite of powerful tools.
        </p>
    </aside>
    <nav className="text-white">
        <h6 className="footer-title">Product</h6>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Pricing</a>
        <a className="link link-hover">Templates</a>
        <a className="link link-hover">Integrations</a>
    </nav>
    <nav className="text-white">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Press</a>
    </nav>
    <nav className="text-white">
        <h6 className="footer-title">Resources</h6>
        <a className="link link-hover">Documentation</a>
        <a className="link link-hover">Help Center</a>
        <a className="link link-hover">Community</a>
        <a className="link link-hover">Contact</a>
    </nav>
    <nav className="text-white">
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <img src={instagram} className="w-8"/>
      <img src={facebook} className="w-8"/>
      <img src={twitter} className="w-8"/>
    </div>
  </nav>
    </footer>

    <footer className="footer sm:footer-horizontal bg-[#101727] text-[#fafafa] items-center p-4">
   <aside className="grid-flow-col items-center mt-15">
    <p>© 2026 Digitools. All rights reserved.</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end mt-15 text-[#fafafa]">
    <a>Privacy Policy</a>
    <a>Terms of Service</a>
    <a>Cookies</a>
  </nav>
</footer>
            
 </div>

 );
};
export default Footer;