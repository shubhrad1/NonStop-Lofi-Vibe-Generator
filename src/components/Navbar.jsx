import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import gsap from "gsap";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    gsap.from(".logo", {
      x: -30,
      opacity: 0,
      delay: 1,
    });
    gsap.to(".logo", {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "power3.inOut",
    });

    gsap.from(".item", {
      y: -300,
      opacity: 0,
      delay: 1,
    });

    gsap.to(".item", {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "expo.inOut",
      stagger: {
        each: 0.1,
      },
    });
  }, []);
  return (
    <div className="bg-black text-white z-10 bg-opacity-50 backdrop-blur-lg">
      <div className="text-white pt-4 pl-6 pb-4 text-2xl flex items-center justify-between">
        <div className="logo ml-10">Logo</div>
        <div>
          <div className="flex items-center uppercase text-2xl">
            <Link
              to="/"
              className="item mr-8 hover:bg-pink-500 hover:text-white transition-all duration-300 rounded p-2"
            >
              Home
            </Link>
            <Link to="/profile">
              {currentUser ? (
                <img
                  src={currentUser.profilePicture}
                  alt="profile"
                  className="item h-10 w-10 mr-4 rounded-full object-cover"
                />
              ) : (
                <Link
                  to="/login"
                  className="item mr-8 hover:bg-pink-500 hover:text-white transition-all duration-300 rounded p-2"
                >
                  Log In
                </Link>
              )}
            </Link>
            <Link
              to="/signup"
              className="item mr-8 hover:bg-pink-500 hover:text-white transition-all duration-300 rounded p-2"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
