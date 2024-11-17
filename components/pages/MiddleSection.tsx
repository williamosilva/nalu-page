"use client"; // Add this if you want to ensure the component runs on the client side.

import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import actionsTable from "@/assets/actionsTable.png";
import pagination from "@/assets/pagination.png";
import RetroGrid from "../ui/retro-grid";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Meteors from "../ui/meteors";
import GridPattern from "../ui/animated-grid-pattern";
import { Languages } from "lucide-react";

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute w-full right-[40%] top-[60%] transform translate-x-1/2 -translate-y-1/2 group">
        <Image
          src={actionsTable}
          alt="Actions table"
          className="relative object-cover w-[370px] h-[400px] opacity-60 border border-neutral-200 rounded-xl"
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
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute w-full right-[40%] top-[50%] transform translate-x-1/2 -translate-y-1/2 group">
        <Image
          src={pagination}
          alt="Actions table"
          className="relative object-cover w-[290px] h-[90px] opacity-60 border border-neutral-200 rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-tl from-white/100 via-white/90 to-transparent rounded-lg" />
        <div className="absolute inset-0 backdrop-blur-sm  group-hover:backdrop-blur-0 transition-all duration-300 ease-in-out rounded-xl" />
      </div>
    ),
    hoverBackground: "scale",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
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
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="absolute w-[374px] h-48 left-[50%] top-[0%] -translate-x-[50%] -translate-y-[50%] group">
        <RetroGrid className="" angle={70} />
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className=" w-full h-full flex justify-center items-end">
        <Languages
          style={{
            color: "#8a8a8a",
            opacity: 0.4,
          }}
          size={140}
        />
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export function MiddleSection() {
  return (
    <BentoGrid className="lg:grid-rows-3 max-w-[1500px] mx-auto">
      {features.map((feature) => (
        //@ts-ignore
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
