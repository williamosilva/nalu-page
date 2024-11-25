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
import { getTableDataWithTabs } from "@/components/data/Data";

const poppinsFont = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// Itens para as abas de "Activated" e "Archived"
const ItemsForActiveTab = [
  {
    id: 2,
    code: "PRD002",
    name: "LG 27' Monitor",
    price: 2199.99,
    stock: 23,
  },
];

const ItemsForArchivedTab = [
  {
    id: 13,
    code: "PRD001",
    name: "XPS 13 Laptop",
    price: 8999.99,
    stock: 15,
    variations: [
      {
        id: 101,
        code: "PRD001-S",
        name: "XPS 13 - SSD 512GB",
        price: 9499.99,
        stock: 8,
      },
    ],
  },
];

export default function Main() {
  // const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const isNavbarHidden = useNavbarVisibility(1900, 2800);
  const [theme, setTheme] = useState("light");
  const [style, setStyle] = useState("sapphire");
  const [language, setLanguage] = useState("en");
  const [isPlusButton, setIsPlusButton] = useState(false);
  const [isHeaderButton, setIsHeaderButton] = useState(false);
  const [isTabButton, setIsTabButton] = useState(true);
  const [tabs, setTabs] = useState([
    { title: "Activated", quantity: 2, checked: true, special: true },
    { title: "Archived", quantity: 1, checked: true, special: false },
  ]);
  const [activeTab, setActiveTab] = useState(tabs[0]?.title || "");

  const handleEditTab = (updatedTabs) => {
    const updatedTabsWithActive = updatedTabs.map((tab) => {
      if (!tab.checked && tab.title === activeTab) {
        const nextActiveTab = updatedTabs.find(
          (t) => t.checked && t.title !== tab.title
        );
        if (nextActiveTab) {
          setActiveTab(nextActiveTab.title);
        }
      }
      return tab;
    });

    setTabs(updatedTabsWithActive);
  };

  const data = getTableDataWithTabs(
    {
      tabs,
      tableInfo: {
        columns: [
          { header: "Code", ref: "code", alignment: "center", ordering: true },
          { header: "Product", ref: "name", alignment: "left", ordering: true },
          {
            header: "Price",
            ref: "price",
            alignment: "center",
            ordering: true,
          },
          {
            header: "Stock",
            ref: "stock",
            alignment: "center",
            ordering: true,
          },
        ],
        items:
          activeTab === "Activated" ? ItemsForActiveTab : ItemsForArchivedTab,
      },
    },
    isTabButton,
    activeTab
  );

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt-br" : "en"));
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
                  language={language}
                  tabButton={isTabButton}
                  plusButton={isPlusButton}
                  activeTab={activeTab}
                  header={isHeaderButton}
                  data={data}
                  onTabChange={(tab) => setActiveTab(tab)}
                  onTabsSave={(tabs) => handleEditTab(tabs)}
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
        languageButton={() => {
          handleToggleLanguage();
        }}
        theme={theme}
        variant={style}
      />
    </>
    // <div className="w-screen h-screen flex flex-col ">

    // </div>
  );
}
