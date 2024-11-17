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
        className="flex flex-col w-full h-full"
        style={{
          background: `linear-gradient(280deg, ${backgroundGradient.firstColor[theme]}, ${backgroundGradient.finalColor[theme]})`,
        }}
      >
        <Topbar />
        <div className="px-8 pb-8 pt-20">
          <NaluTable itemsPerPage={10} totalItems={30} language="en" />
        </div>
      </div>
    </Sidebar>
  );
}
