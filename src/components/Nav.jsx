import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full h-14 absolute top-0 flex justify-around items-center sm:bg-gray-700 sm:bg-opacity-60">
      <Link to="/">
        <img src={logo} alt="royanenergy" className="w-10" />
      </Link>
      <Link to="/about">
        <p className="font-sans hover:scale-110 transition-all sm:text-white sm:opacity-80">About Us</p>
      </Link>
      <Link to="/team">
        <p className="font-sans hover:scale-110 transition-all sm:text-white sm:opacity-80">Our Team</p>
      </Link>
      <Link to="/contact">
        <p className="font-sans hover:scale-110 transition-all sm:text-white sm:opacity-80">Contact Us</p>
      </Link>
    </div>
  );
};

export default Nav;
