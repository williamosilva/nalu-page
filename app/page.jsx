// components/pages/Example.jsx
"use client";
import NaluTable from "nalu-table";
import "nalu-table/dist/style.css";
import Sidebar from "../../components/ui/Sidebar";
import Topbar from "../../components/ui/Topbar";
import colorTheme from "@/components/constants/colorTheme";

export default function Example({ variant = "sapphire", theme = "light" }) {
  const { backgroundGradient } = colorTheme[variant];

  return (
    <Sidebar variant="sapphire" theme="light">
      <div
        className="flex flex-col w-full min-h-screen" // Mudamos para min-h-screen
        style={{
          background: `linear-gradient(280deg, ${backgroundGradient.firstColor[theme]}, ${backgroundGradient.finalColor[theme]})`,
        }}
      >
        <Topbar />
        <div className="p-8 flex-grow">
          <NaluTable />
        </div>
      </div>
    </Sidebar>
  );
}

// app/main/page.jsx
"use client";
import "nalu-table/dist/style.css";
import Example from "../components/pages/Example";
import HeroSection from "@/components/pages/HeroSection";

export default function Main({ variant = "sapphire", theme = "light" }) {
  return (
    <div className="flex flex-col w-full">
      <div className="min-h-screen">
        <Example variant="sapphire" theme="light" />
      </div>
      <div className="min-h-screen">
        <HeroSection variant="sapphire" theme="light" />
      </div>
    </div>
  );
}