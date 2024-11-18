import React, { useState, useEffect } from "react";
import ShimmerButton from "../../components/ui/shimmer-button";
import NumberTicker from "../../components/ui/number-ticker";
import NaluDark from "../../assets/NaluDark.png";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Menu, X } from "lucide-react";

export default function MainTopBar({ showDesktopNav }) {
  console.log("MainTopBar -> showDesktopNav", showDesktopNav);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // useEffect(() => {
  //   let prevScrollPos = window.pageYOffset;

  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     setIsHidden(prevScrollPos > currentScrollPos);
  //     prevScrollPos = currentScrollPos;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div
        className={`bg-white shadow-sm w-full fixed top-0 left-0 px-4 md:px-8 lg:px-16 z-[100] transition-transform duration-300 ease-in-out ${
          showDesktopNav ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center lg:flex-1">
            {/* Left side: Logo */}
            <div className="flex items-center mr-8 lg:mr-16 gap-2">
              <Image src={NaluDark} alt="Logo" width={26} layout="intrinsic" />
              <span className="text-lg font-medium">Nalu table</span>
            </div>

            {/* Navigation - Hidden on mobile and controlled by showDesktopNav */}

            <nav className="hidden lg:flex space-x-12 text-sm items-center mr-16">
              <a
                href="#"
                onClick={handleLinkClick}
                className="text-gray-600 hover:text-gray-900 transition-all ease-in-out font-semibold"
              >
                Example
              </a>
              <a
                href="#"
                onClick={handleLinkClick}
                className="text-gray-600 hover:text-gray-900 transition-all ease-in-out font-semibold"
              >
                Docs
              </a>
              <a
                href="#"
                onClick={handleLinkClick}
                className="text-gray-600 hover:text-gray-900 transition-all ease-in-out font-semibold"
              >
                Contact
              </a>
            </nav>

            {/* GitHub container - Hidden on mobile and controlled by showDesktopNav */}

            <div className="hidden lg:flex items-center space-x-2 relative">
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex group items-center text-white gap-3 px-4 py-[7px] rounded-xl hover:text-neutral-100 bg-[#010409] transition-all duration-700 ease-in-out hover:shadow-[0_0px_20px_2px_rgba(0,0,0,0.2)] overflow-hidden relative"
              >
                <span className="w-8 h-20 opacity-10 group-hover:left-[2%] ease-in-out transition-all duration-1000 from-[#dedede] to-white absolute left-[102%] rotate-12 bg-gradient-to-t group-hover:opacity-20"></span>
                <div className="flex items-center justify-center gap-2">
                  <GitHubIcon className="text-lg" />
                  <span className="text-[14px] font-medium">
                    Star on GitHub
                  </span>
                </div>

                <div className="flex items-center justify-center">
                  <StarRoundedIcon className="text-lg text-[#6b7280] group-hover:text-[#fcc032] transition-all duration-500 ease-in-out" />
                  <NumberTicker
                    value={123}
                    className="text-white -tracking-wider font-medium"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Get Started button - Hidden on mobile and controlled by showDesktopNav */}

          <div className="hidden lg:block">
            <ShimmerButton>
              <p className="text-sm font-medium">Get Started</p>
            </ShimmerButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[99] bg-white pt-20">
          <div className="container mx-auto px-4 py-6 space-y-8">
            <nav className="flex flex-col space-y-6">
              <a
                href="#"
                onClick={handleLinkClick}
                className="text-gray-600 hover:text-gray-900 transition-all ease-in-out font-semibold text-lg"
              >
                Example
              </a>
              <a
                href="#"
                onClick={handleLinkClick}
                className="text-gray-600 hover:text-gray-900 transition-all ease-in-out font-semibold text-lg"
              >
                Docs
              </a>
              <a
                href="#"
                onClick={handleLinkClick}
                className="text-gray-600 hover:text-gray-900 transition-all ease-in-out font-semibold text-lg"
              >
                Contact
              </a>
            </nav>

            <div className="space-y-6">
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex items-center justify-center text-white gap-3 px-4 py-3 rounded-xl bg-[#010409] w-full"
              >
                <GitHubIcon className="text-lg" />
                <span className="text-[14px] font-medium">Star on GitHub</span>
                <div className="flex items-center">
                  <StarRoundedIcon className="text-lg text-[#fcc032]" />
                  <NumberTicker
                    value={123}
                    className="text-white -tracking-wider font-medium"
                  />
                </div>
              </a>

              <div className="w-full" onClick={handleLinkClick}>
                <ShimmerButton className="w-full">
                  <p className="text-sm font-medium">Get Started</p>
                </ShimmerButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
