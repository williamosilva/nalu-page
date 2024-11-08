import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import GridPattern from "../../components/ui/animated-grid-pattern";
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

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <MainTopBar />

      <GradualSpacing
        text="Manage and manipulate"
        className="text-8xl font-extrabold h-28 text-wrap bg-gradient-to-b from-[#26043b] to-[#441c5c]  text-transparent bg-clip-text animate-[gradient_3s_ease-in-out_infinite] bg-[length:200%_auto] bg-[position:0%_center]"
      />

      <GradualSpacing
        text="your items easily"
        className="text-8xl font-extrabold mb-8 h-28 text-wrap bg-gradient-to-b from-[#26043b] to-[#441c5c]   text-transparent bg-clip-text animate-[gradient_3s_ease-in-out_infinite] bg-[length:200%_auto] bg-[position:0%_center]"
      />
      <FadeText
        className="text-lg text-[#6b7280]"
        text="A modern, customizable React table with theming, pagination, and
        advanced features for an intuitive table."
      />
      <motion.div
        className="mt-8 flex gap-20"
        initial={{ opacity: 0, y: 50 }}
        animate={buttonControls}
      >
        <RainbowButton className="w-full hover:opacity-90 transition-all">
          Get Started for free
        </RainbowButton>
        <SecondButton />
      </motion.div>

      <div className="opacity-30 ">
        <GridPattern maxOpacity={0.1} numSquares={10} />
      </div>
      <div className="pt-10 ">
        <NpmStart />
      </div>
    </div>
  );
}
