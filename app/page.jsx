"use client";
import "nalu-table/dist/style.css";
import Example from "../components/pages/Example";
import HeroSection from "@/components/pages/HeroSection";
import MainTopBar from "@/components/ui/MainTopBar";
import { MiddleSection } from "@/components/pages/MiddleSection";
import InstallationSection from "@/components/pages/InstallationSection";
import QuickStart from "@/components/pages/QuickStart";
import GridPattern from "@/components/ui/animated-grid-pattern";
import Toast from "@/components/ui/Toast";
import Props from "@/components/pages/Props";
import Footer from "@/components/ui/Footer";
import BasicExamples from "@/components/pages/BasicExamples";
import EventHandlers from "@/components/pages/EventHandlers";
import SparklesText from "@/components/ui/sparkles-text";
import GetStartFooter from "@/components/pages/GetStartFooter";
import { Poppins } from "@next/font/google";
import DefaultDock from "@/components/ui/DefaultDock";
import useNavbarVisibility from "@/hooks/useNavbarVisibility";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const poppinsFont = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Main() {
  // const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const isNavbarHidden = useNavbarVisibility(1900, 2800);
  const [theme, setTheme] = useState("light");
  const [style, setStyle] = useState("sapphire");
  const [isPlusButton, setIsPlusButton] = useState(false);
  const [isHeaderButton, setIsHeaderButton] = useState(false);
  const [isTabButton, setIsTabButton] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleShowToast = () => {
    setCounter((prev) => prev + 1);
  };
  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  function toggleStyle() {
    setStyle((prev) => (prev === "sapphire" ? "crimson" : "sapphire"));
  }

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="relative w-full">
        <MainTopBar
          showDesktopNav={isNavbarHidden}
          onLinkClick={handleScrollToSection}
        />
        <div className="relative container  mx-auto   mb-20 flex flex-col justify-center items-center ">
          <div className="flex flex-col w-full relative z-[2] items-center justify-center">
            {/* Esconde a navbar quando isNavbarHidden for true */}
            <div className="min-h-auto w-full">
              <HeroSection variant="sapphire" theme="light" />
            </div>
            <div className="min-h-auto w-full mb-56 md:px-0 px-6 ">
              <MiddleSection variant="sapphire" theme="light" />
            </div>
            <div className="min-h-auto md:px-8 px-6 flex flex-col gap-28 w-full">
              <SparklesText
                className={cn(
                  "text-5xl font-bold text-center mt-16 text-[#320E48]",
                  poppinsFont.className
                )}
                text="Usage Example"
                colors={{ first: "#c580ff", second: "#8c00ff" }}
                sparklesCount={5}
              />
              <span id="example">
                <Example
                  variant={style}
                  theme={theme}
                  tabButton={isTabButton}
                  plusButton={isPlusButton}
                  header={isHeaderButton}
                />
              </span>
            </div>
            <div
              className="min-h-auto flex flex-col gap-6 2xl:w-[50%]  w-[80%] items-center"
              id="docs"
            >
              <h1
                className={cn(
                  "text-3xl font-semibold w-full leading-[3rem] mt-16 border-b text-left text-[#320E48]",
                  poppinsFont.className
                )}
              >
                Installation
              </h1>
              <InstallationSection variant="sapphire" theme="light" />
            </div>
            <div className="min-h-auto flex flex-col gap-6  2xl:w-[50%]  w-[80%]  items-center">
              <h1
                className={cn(
                  "text-3xl font-semibold w-full leading-[3rem] mt-16 border-b text-left text-[#320E48]",
                  poppinsFont.className
                )}
              >
                Quick Start
              </h1>
              <QuickStart variant="sapphire" theme="light" />
            </div>
            <div className="min-h-auto flex flex-col gap-6  2xl:w-[50%]  w-[80%]  items-center">
              <h1
                className={cn(
                  "text-3xl font-semibold w-full leading-[3rem] mt-16 border-b text-left text-[#320E48]",
                  poppinsFont.className
                )}
              >
                Props
              </h1>
              <Props />
            </div>
            <div className="min-h-auto flex flex-col gap-6  2xl:w-[50%]  w-[80%]  items-center">
              <h1
                className={cn(
                  "text-3xl font-semibold w-full leading-[3rem] mt-16 border-b text-left text-[#320E48]",
                  poppinsFont.className
                )}
              >
                Event Handlers
              </h1>
              <EventHandlers />
            </div>
            <div className="min-h-auto flex flex-col gap-6  2xl:w-[50%]  w-[80%] ">
              <h1
                className={cn(
                  "text-3xl font-semibold w-full leading-[3rem] mt-16 border-b text-left text-[#320E48]",
                  poppinsFont.className
                )}
              >
                Examples
              </h1>

              <BasicExamples />
            </div>
          </div>
          <div className=" z-[1] opacity-20   ">
            <GridPattern
              maxOpacity={0.5}
              numSquares={7}
              height={80}
              width={80}
            />
          </div>
        </div>
        <GetStartFooter />
        <Footer onLinkClick={handleScrollToSection} />
      </div>
      <Toast
        message="Operação realizada com sucesso!"
        type="success"
        counter={counter}
        duration={1000}
      />
      <DefaultDock
        isShow={isNavbarHidden}
        plusButton={() => {
          setIsPlusButton((prev) => !prev);
        }}
        tabButton={() => {
          setIsTabButton((prev) => !prev);
          handleShowToast();
        }}
        themeToggle={() => {
          toggleTheme();
        }}
        styleToggle={() => {
          toggleStyle();
        }}
        headerButton={() => {
          setIsHeaderButton((prev) => !prev);
        }}
        theme={theme}
        variant={style}
      />
    </>
    // <div className="w-screen h-screen flex flex-col ">

    // </div>
  );
}
