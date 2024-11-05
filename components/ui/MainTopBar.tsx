import React, { useState, useEffect } from "react";

import ShimmerButton from "../../components/ui/shimmer-button";
import NaluDark from "../../assets/NaluDark.png";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

export default function MainTopBar() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-white shadow-sm w-full fixed top-0 left-0 px-16 z-[100] transition-transform duration-300 ease-in-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 ">
        <div className="flex ">
          {/* Left side: Logo */}
          <div className="flex items-center mr-16 gap-2">
            <Image
              src={NaluDark}
              alt="Logo"
              //   className="h-8 mr-2"
              width={26}
              layout="intrinsic"
            />
            <span className="text-lg font-medium">Nalu table</span>
          </div>

          {/* Navigation */}
          <nav className="space-x-12 text-sm flex items-center mr-16">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-all ease-in-out "
            >
              Get started
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900  transition-all ease-in-out "
            >
              Docs
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900  transition-all ease-in-out "
            >
              Contact
            </a>
          </nav>

          {/* GitHub container */}
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white gap-6 px-4 py-[6px] rounded-md hover:text-neutral-100 bg-[#010409]"
            >
              <div className="flex items-center justify-center gap-2">
                <GitHubIcon className="text-lg" />
                <span className="text-[14px] font-medium">Star on GitHub</span>
              </div>

              <div className="flex items-center justify-center ">
                <StarRoundedIcon className="text-lg" />
                <span className="ml-1">123</span>
              </div>
            </a>
          </div>
        </div>

        {/* Get Started button */}
        <ShimmerButton>Get Started</ShimmerButton>
      </div>
    </div>
  );
}
