"use client";

import NaluTable from "nalu-table";
import "nalu-table/dist/style.css";
import Sidebar from "../../components/ui/Sidebar";
import Topbar from "../../components/ui/Topbar";
import colorTheme from "@/components/constants/colorTheme";

interface ExampleProps {
  variant?: "sapphire" | "crimson";
  theme?: "light" | "dark";
  id?: string;
  header?: React.ReactNode;
  tabButton?: React.ReactNode;
  plusButton?: React.ReactNode;
}

export default function Example({
  variant = "sapphire",
  theme = "light",
  id,
  header,
  tabButton,
  plusButton,
}: ExampleProps) {
  const { backgroundGradient } = colorTheme[variant];

  return (
    <Sidebar variant={variant} theme={theme} id={id}>
      <div
        className="flex flex-col w-full h-full"
        style={{
          background: `${backgroundGradient.firstColor[theme]}`,
        }}
      >
        <Topbar variant={variant} theme={theme} />
        <div className="px-8 pb-0 pt-16">
          <NaluTable
            itemsPerPage={10}
            totalItems={30}
            language="en"
            variant={variant}
            theme={theme}
          />
        </div>
      </div>
    </Sidebar>
  );
}
