import { Dock, DockIcon } from "@/components/ui/dock";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { Brush } from "lucide-react";
import { SquarePlus } from "lucide-react";
import { ListStart } from "lucide-react";
import { TableCellsMerge } from "lucide-react";

import { IconButton } from "@mui/material";
import { useState } from "react";

export default function DefaultDock({
  isShow,
  themeToggle,
  styleToggle,
  tabButton,
  headerButton,
  plusButton,
}) {
  const [isToggleTheme, setIsToggleTheme] = useState("light");

  function toggleTheme() {
    setIsToggleTheme(isToggleTheme === "light" ? "dark" : "light");
    themeToggle();
  }

  return (
    <div
      className={`fixed ${
        isShow ? "translate-y-0 scale-100 " : "translate-y-96 scale-50"
      }  bottom-8 left-1/2 -translate-x-[50%] z-[50] transition-all duration-500 ease-in-out`}
    >
      <Dock
        direction="bottom"
        magnification={60}
        distance={100}
        className="gap-4"
      >
        <DockIcon>
          <IconButton
            size="large"
            onClick={toggleTheme}
            className="hover:bg-neutral-200"
          >
            {isToggleTheme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </IconButton>
        </DockIcon>
        <DockIcon>
          <IconButton
            size="large"
            className="hover:bg-neutral-200"
            onClick={() => {
              styleToggle();
            }}
          >
            <Brush size={18} />
          </IconButton>
        </DockIcon>

        <DockIcon>
          <IconButton
            size="large"
            className="hover:bg-neutral-200"
            onClick={() => {
              plusButton();
            }}
          >
            <SquarePlus size={18} />
          </IconButton>
        </DockIcon>
        <DockIcon>
          <IconButton
            size="large"
            className="hover:bg-neutral-200"
            onClick={() => {
              headerButton();
            }}
          >
            <ListStart size={18} />
          </IconButton>
        </DockIcon>
        <DockIcon>
          <IconButton
            size="large"
            className="hover:bg-neutral-200"
            onClick={() => {
              tabButton();
            }}
          >
            <TableCellsMerge size={18} />
          </IconButton>
        </DockIcon>
      </Dock>
    </div>
  );
}

// function IconButton({ children }) {
//   return (
//     <div className="flex items-center justify-center w-12 h-12 bg-transparent rounded-full hover:bg-neutral-100 transition-all duration-300 ease-in-out ">
//       {children}
//     </div>
//   );
// }
