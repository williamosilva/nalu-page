"use client";
import NaluTable from "nalu-table";
import "nalu-table/dist/style.css";
import Sidebar from "../components/ui/Sidebar";
import Topbar from "../components/ui/Topbar";
import colorTheme from "@/components/constants/colorTheme";

export default function Main({ variant = "sapphire", theme = "light" }) {
  const { backgroundGradient, mainText, sideBorder, imgBackground } =
    colorTheme[variant];
  return (
    <Sidebar variant="sapphire" theme="light" size="">
      <div
        className="flex flex-col w-full h-screen"
        style={{
          background: `linear-gradient(280deg, ${backgroundGradient.firstColor[theme]}, ${backgroundGradient.finalColor[theme]})`,
        }}
      >
        <Topbar />
        <div className="p-8">
          <NaluTable />
        </div>
      </div>
    </Sidebar>
  );
}
