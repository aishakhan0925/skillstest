import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";

const Navbar: React.FC = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToHistory = () => {
    const historySection = document.getElementById("history-section");
    if (historySection) {
      historySection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToTeams = () => {
    const teamsSection = document.getElementById("teams-section");
    if (teamsSection) {
      teamsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full z-20 ${
          sticky ? "bg-white text-[#3c4b6a]" : "bg-transparent text-white"
        } hidden md:block `}
      >
        <nav className="flex items-center justify-between container mx-auto py-4 px-3">
          <img
            src={Logo}
            alt="Logo here"
            className="cursor-pointer"
            onClick={scrollToTop} // Add this onClick handler
          />
          <div className="flex items-center justify-end space-x-12 italic underline">
            <div className="cursor-pointer" onClick={scrollToTeams}>
              1.0 TEAM
            </div>
            <div className="cursor-pointer" onClick={scrollToHistory}>
              2.0 HISTORY
            </div>
          </div>
        </nav>
      </div>

      {/* mobile menu */}
      <div
        className={`fixed top-0 left-0 w-full z-20 block md:hidden bg-white`}
      >
        <nav className="flex items-center justify-between text-white px-8 py-4">
          <img
            src={Logo}
            alt="Logo here"
            className="cursor-pointer"
            onClick={scrollToTop} // Add this onClick handler
          />
          <button
            onClick={toggleNavbar}
            className=" items-center justify-center  text-[#3c4b6a]"
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger Icon */}
            <svg
              className={`${isOpen ? "hidden" : "block"} h-10 w-10`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* Close Icon */}
            <svg
              className={`${isOpen ? "block" : "hidden"} h-10 w-10`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </nav>
        <hr />
        <div
          className={`${isOpen ? "block" : "hidden"} md:hidden px-8 py-10  text-[#3c4b6a]`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className=" flex flex-col space-y-10 italic underline">
              <div className="cursor-pointer" onClick={scrollToTeams}>
                1.0 TEAM
              </div>
              <div className="cursor-pointer" onClick={scrollToHistory}>
                2.0 HISTORY
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
