import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import gsap from "gsap";
import { useSelector } from "react-redux";

const Navbar = () => {
<<<<<<< HEAD
    const { currentUser } = useSelector((state) => state.user);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Check if the window width is larger than a certain breakpoint (e.g., 1024px)
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1024);
        };

        // Set initial value
        handleResize();

        // Listen to window resize events
        window.addEventListener("resize", handleResize);

        return () => {
            // Remove the event listener on component unmount
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
=======
  const { currentUser } = useSelector((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  
  let location = useLocation();
  
  useEffect(() => {
    // Check if the window width is larger than a certain breakpoint (e.g., 1024px)
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
>>>>>>> bb10bfebc796ce9696b6a642c4545eeee06da875
    };

    return (
        <div className="bg-opacity-20 backdrop-filter backdrop-blur-md fixed top-0 left-0 right-0 z-10 navbar">
            <div className="text-white pt-4 pl-6 pb-4 text-2xl flex items-center justify-between lg:justify-between">
                <div className="logo ml-10 lg:ml-0">
                    <Link to="/">
                        <img
                            src="./images/logo.png"
                            alt="logo"
                            className="max-w-16 max-h-16"
                        />
                    </Link>
                </div>

<<<<<<< HEAD
                <div className="lg:hidden">
                    <button
                        type="button"
                        className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
                        onClick={toggleMenu}
                    >
                        ☰
                    </button>
                </div>
                <div>
                    <div className="hidden lg:flex items-center uppercase text-2xl">
                        <Link
                            to="/"
                            className="item mr-8 bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300 rounded-lg p-2"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="item mr-8 bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300 rounded-lg p-2"
                        >
                            About
                        </Link>
                        {currentUser ? (
                            <div className="hidden lg:flex items-center uppercase text-2xl mr-5">
                                <Link to="/profile">
                                    <img
                                        src={currentUser.profilePicture}
                                        alt="profile"
                                        className="item h-10 w-10 mr-4 rounded-full object-cover"
                                    />
                                </Link>
                                <Link to="/compose">Compose Music</Link>
                            </div>
                        ) : (
                            <div className="hidden lg:flex items-center uppercase text-2xl">
                                {/* <Link
              to="/research"
=======
    // Listen to window resize events
    window.addEventListener("resize", handleResize);

    return () => {
      // Remove the event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="bg-opacity-20 backdrop-filter backdrop-blur-md fixed top-0 left-0 right-0 z-10 navbar">
      <div className="text-white pt-4 pl-6 pb-4 text-2xl flex items-center justify-between lg:justify-between">
        <div className="logo ml-10 lg:ml-0">
         {location.pathname === "/" ? <button onClick={scrollToTop}>
            <img
              src="./images/logo.png"
              alt="logo"
              className="max-w-16 max-h-16"
            />
          </button> :  <Link to="/">
            <img
              src="./images/logo.png"
              alt="logo"
              className="max-w-16 max-h-16"
            />
          </Link> }
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
        <div>
          <div className="hidden lg:flex items-center uppercase text-2xl">
            <Link
              to="/"
>>>>>>> bb10bfebc796ce9696b6a642c4545eeee06da875
              className="item mr-8 bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300 rounded-lg p-2"
            >
              Research
            </Link> */}
                                <Link
                                    to="/contact"
                                    className="item mr-8 bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300 rounded-lg p-2"
                                >
                                    Contact
                                </Link>
                                <Link
                                    to="/login"
                                    className="item mr-8 bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300 rounded-lg p-2"
                                >
                                    Log In
                                </Link>
                                <Link
                                    to="/signup"
                                    className="item mr-8 bg-gradient-to-r from-violet-600 to-pink-500 transition-colors duration-300 rounded-lg p-2"
                                >
                                    Sign up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
