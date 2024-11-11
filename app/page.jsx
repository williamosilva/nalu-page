"use client";
import "nalu-table/dist/style.css";
import Example from "../components/pages/Example";
import HeroSection from "@/components/pages/HeroSection";
import MainTopBar from "@/components/ui/MainTopBar";
import { MiddleSection } from "@/components/pages/MiddleSection";

export default function Main({ variant = "sapphire", theme = "light" }) {
  return (
    <div className="flex flex-col w-full relative">
      <MainTopBar />
      <div className="min-h-screen">
        <HeroSection variant="sapphire" theme="light" />
      </div>
      <div className="min-h-screen px-[380px] h-[100px]">
        <MiddleSection variant="sapphire" theme="light" />
      </div>
      <div className="min-h-screen">
        <Example variant="sapphire" theme="light" />
      </div>
    </div>
  );
}
