import { Dock, DockIcon } from "@/components/ui/dock";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { Brush } from "lucide-react";
import { SquarePlus } from "lucide-react";
import { ListStart } from "lucide-react";
import { TableCellsMerge } from "lucide-react";
import colorTheme from "@/components/constants/colorTheme";

import { IconButton } from "@mui/material";
import { useState } from "react";

export default function DefaultDock({
  isShow,
  themeToggle,
  styleToggle,
  tabButton,
  headerButton,
  plusButton,
  variant = "sapphire",
  theme = "light",
}) {
  const [isToggleTheme, setIsToggleTheme] = useState("light");
  const { dockIconColor, dockBackgroundColor } = colorTheme[variant];
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);

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
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={toggleTheme}
            style={{
              background: isHovered
                ? dockBackgroundColor[theme]
                : "transparent",
              color: dockIconColor[theme],
            }}
          >
            {isToggleTheme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </IconButton>
        </DockIcon>
        <DockIcon>
          <IconButton
            size="large"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            className="transition-all duration-300 ease-in-out"
            style={{
              background: isHovered2
                ? dockBackgroundColor[theme]
                : "transparent",
              color: dockIconColor[theme],
            }}
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
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
            style={{
              background: isHovered3
                ? dockBackgroundColor[theme]
                : "transparent",
              color: dockIconColor[theme],
            }}
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
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
            style={{
              background: isHovered4
                ? dockBackgroundColor[theme]
                : "transparent",
              color: dockIconColor[theme],
            }}
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
            onMouseEnter={() => setIsHovered5(true)}
            onMouseLeave={() => setIsHovered5(false)}
            style={{
              background: isHovered5
                ? dockBackgroundColor[theme]
                : "transparent",
              color: dockIconColor[theme],
            }}
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
