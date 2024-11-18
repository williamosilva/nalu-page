import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import MainTopBar from "../../components/ui/MainTopBar";
import GradualSpacing from "../../components/ui/gradual-spacing";
import { RainbowButton } from "../../components/ui/rainbow-button";
import { FadeText } from "../../components/ui/fade-text";
import NpmStart from "../../components/ui/NpmStart";
import SecondButton from "../../components/ui/SecondButton";

export default function HeroSection() {
  const [showTransition, setShowTransition] = useState(false);
  const buttonControls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTransition(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showTransition) {
      buttonControls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      });
    } else {
      buttonControls.start({
        opacity: 0,
        y: 20,
      });
    }
  }, [buttonControls, showTransition]);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <div className="relative ">
      <div className=" h-[1080px] flex flex-col w-full justify-center items-center z-[10] relative md:px-0 px-6">
        {isDesktopOrLaptop ? (
          <>
            <GradualSpacing
              text={`Manage and manipulate`}
              className="2xl:text-8xl xl:text-8xl lg:text-7xl xl:h-28 lg:h-24 font-black 2xl:h-28 text-4xl h-14  md:text-6xl md:h-20 sm:text-5xl sm:h-16  text-wrap bg-gradient-to-b from-[#26043b] to-[#441c5c]  text-transparent bg-clip-text animate-[gradient_3s_ease-in-out_infinite] bg-[length:200%_auto] bg-[position:0%_center]"
            />
            <GradualSpacing
              text="your items easily"
              className="2xl:text-8xl xl:text-8xl lg:text-7xl  xl:h-28  lg:h-20 2xl:h-28  text-4xl h-14   md:text-6xl md:h-20 sm:text-5xl sm:h-16  font-extrabold mb-4 text-wrap bg-gradient-to-b from-[#26043b] to-[#441c5c]   text-transparent bg-clip-text animate-[gradient_3s_ease-in-out_infinite] bg-[length:200%_auto] bg-[position:0%_center]"
            />
          </>
        ) : (
          <>
            <GradualSpacing
              text="Manage and"
              className="2xl:text-8xl xl:text-8xl lg:text-7xl xl:h-28 lg:h-24 font-black 2xl:h-28 text-5xl h-14  md:text-6xl md:h-20 sm:text-6xl sm:h-20    text-wrap bg-gradient-to-b from-[#26043b] to-[#441c5c]  text-transparent bg-clip-text animate-[gradient_3s_ease-in-out_infinite] bg-[length:200%_auto] bg-[position:0%_center]"
            />
            <GradualSpacing
              text=" manipulate"
              className="2xl:text-8xl xl:text-8xl lg:text-7xl xl:h-28 lg:h-24 font-black 2xl:h-28 text-5xl h-14  md:text-6xl md:h-20 sm:text-6xl sm:h-20  text-wrap bg-gradient-to-b from-[#26043b] to-[#441c5c]  text-transparent bg-clip-text animate-[gradient_3s_ease-in-out_infinite] bg-[length:200%_auto] bg-[position:0%_center]"
            />
            <GradualSpacing
              text="your items easily"
              className="2xl:text-8xl xl:text-8xl lg:text-7xl  xl:h-28  lg:h-20 2xl:h-28  text-5xl h-14   md:text-6xl md:h-20 sm:text-6xl sm:h-20  font-extrabold mb-4 text-wrap bg-gradient-to-b from-[#26043b] to-[#441c5c]   text-transparent bg-clip-text animate-[gradient_3s_ease-in-out_infinite] bg-[length:200%_auto] bg-[position:0%_center]"
            />
          </>
        )}

        <FadeText
          className="lg:text-xl  text-lg  text-[#6b7280] !text-center sm:text-base md:w-[680px]  lg:w-full block"
          text="A modern, customizable React table with theming, pagination, and
        advanced features for an intuitive table."
        />
        <motion.div
          className="pt-14 flex gap-20"
          initial={{ opacity: 0, y: 50 }}
          animate={buttonControls}
        >
          <RainbowButton className="w-full hover:opacity-90 transition-all">
            Get Started for free
          </RainbowButton>
          <SecondButton />
        </motion.div>
        <motion.div
          className="mt-0 flex gap-20"
          initial={{ opacity: 0, y: 50 }}
          animate={buttonControls}
        >
          <div className="pt-10 ">
            <NpmStart />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
