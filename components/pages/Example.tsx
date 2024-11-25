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
  header?: boolean;
  tabButton?: React.ReactNode;
  plusButton?: React.ReactNode;
  language: string;
  data: any;
}

export default function Example({
  variant = "sapphire",
  theme = "light",
  id,
  header,
  tabButton,
  plusButton,
  language,
  data,
}: ExampleProps) {
  const { backgroundGradient } = colorTheme[variant];

  return (
    <Sidebar variant={variant} theme={theme} id={id}>
      <div
        className="flex flex-col w-full h-full transition-all duration-300 ease-in-out"
        style={{
          background: `${backgroundGradient.firstColor[theme]}`,
        }}
      >
        <Topbar variant={variant} theme={theme} />
        <div className="px-8 pt-4 pb-6 h-[1000px] flex flex-col overflow-y-auto">
          <div className="h-auto mt-11 ">
            <NaluTable
              itemsPerPage={10}
              totalItems={30}
              language={language}
              variant={variant}
              theme={theme}
              tableData={data}
              handlePageChange={(page) => console.log(page)}
              size="small"
              header={header}
              hasTabs={true}
              loading={false}
              plusButton={plusButton}
            />
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
