"use client"; // Add this if you want to ensure the component runs on the client side.

import { GlobeIcon, InputIcon } from "@radix-ui/react-icons";
import { Palette } from "lucide-react";
import { SquareChartGantt } from "lucide-react";
import Image from "next/image";
import actionsTable from "@/assets/actionsTable.png";
import pagination from "@/assets/pagination.png";
import RetroGrid from "../ui/retro-grid";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Meteors from "../ui/meteors";
import { SunDim } from "lucide-react";
import { Languages } from "lucide-react";

const features = [
  {
    Icon: SquareChartGantt,
    name: "Individual actions",
    description: "Individual actions for each table item.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute w-full right-[40%] top-[80%] transform translate-x-1/2 -translate-y-1/2 group">
        <Image
          src={actionsTable}
          alt="Actions table"
          className="relative object-cover w-[370px] h-[476px] opacity-60 border border-neutral-200 rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-tl from-white/100 via-white/90 to-transparent rounded-lg" />
        <div className="absolute inset-0 backdrop-blur-sm  group-hover:backdrop-blur-0 transition-all duration-300 ease-in-out rounded-xl" />
      </div>
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    hoverBackground: "slide",
    hoverIconColorClass: "#d41204",
  },
  {
    Icon: InputIcon,
    name: "Pagination",
    description: "Browse pages with the limit defined by you.",
    // href: "/",
    // cta: "Learn more",
    background: (
      <div className="absolute w-full right-[40%] top-[50%] transform translate-x-1/2 -translate-y-1/2 group">
        <Image
          src={pagination}
          alt="Actions table"
          className="relative object-cover w-[340px] h-[110px] opacity-60 border border-neutral-200 rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-tl from-white/100 via-white/90 to-transparent rounded-lg" />
        <div className="absolute inset-0 backdrop-blur-sm  group-hover:backdrop-blur-0 transition-all duration-300 ease-in-out rounded-xl" />
      </div>
    ),
    hoverBackground: "scale",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Palette,
    name: "Style",
    description: "Styling two different styles.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute w-[374px] h-48 left-[20%] top-[0%] opacity-40 -translate-x-[50%] -translate-y-[50%] group">
        <Meteors number={20} />
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: SunDim,
    name: "Minimalist",
    description: "Minimalist art with dark and light theme.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute w-[484px] h-48 left-[50%] top-[30%] -translate-x-[50%] -translate-y-[50%] group">
        <RetroGrid className="" angle={70} />
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Support for Portuguese and English.",

    hoverBackground: "scale",
    background: (
      <div className=" w-full h-full flex justify-center items-center mt-10 relative text-2xl gap-6 font-thin select-none">
        <p className="opacity-25">&quot;Hello world!&quot;</p>
        <div className="h-10 bg-neutral-400 w-[1px] opacity-25"></div>
        <p className="opacity-25">&quot;Olá mundo!&quot;</p>

        <Languages
          style={{
            color: "#8a8a8a",
            opacity: 0.2,
            position: "absolute",
            top: "2%",
            left: "85%",
          }}
          size={40}
        />
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function MiddleSection() {
  return (
    <BentoGrid className="lg:grid-rows-3  xl:max-w-[90%] max-w-[99%]  mx-auto">
      {features.map((feature) => (
        // @ts-expect-error: Feature type may not match BentoCard props
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
