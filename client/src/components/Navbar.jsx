import React from "react";
import Logo from "../resources/logo.svg";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import ContactFrom from "./contactFrom";
const Navbar = () => {
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  const signOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const { googleSignIn, logOut } = useUserAuth();
  const navigate = useNavigate();
  return (
    <>
      <nav className=" w-full h-16 flex justify-center items-center mt-3 overflow-hidden interFont">
        <div className=" h-14 w-[95%] flex justify-between items-center">
          <div className="flex w-auto items-center justify-evenly">
            <img
              src={Logo}
              alt="logo"
              className="h-20 ml-3"
              draggable={false}
            />
            <header>Gossip Hub</header>
          </div>
          <div className="w-[40%]">
            <ul className="flex items-center justify-evenly relative left-8">
              <li>
                <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="features"
                  spy={true}
                  smooth={true}
                  offset={35}
                  duration={500}
                >
                  Features
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={500}
                >
                  Why Gossip Hub?
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="customer"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={500}
                >
                  Testimonial
                </ScrollLink>
              </li>
              <ContactFrom />
            </ul>
          </div>
          <div className="flex justify-evenly item-center">
            <button
              onClick={signOut}
              className="mr-5 h-[4.5vh] w-[15vh] bg-slate-200 rounded-lg hover:bg-[#03C988] transition-all hover:text-white"
            >
              Log Out
            </button>
            {/*         <RouterLink to="/register"> */}

            <button
              className="h-[4.5vh] w-[15vh] rounded-lg text-white bg-[#03C988] hover:bg-slate-200 transition-all hover:text-black"
              onClick={handleGoogleSignIn}
            >
              SignUp
            </button>
            {/*         </RouterLink> */}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
