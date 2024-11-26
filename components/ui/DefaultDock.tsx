import { Dock, DockIcon } from "@/components/ui/dock";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { Brush } from "lucide-react";
import { SquarePlus } from "lucide-react";
import { Languages } from "lucide-react";
import { Hourglass } from "lucide-react";
import { ListStart } from "lucide-react";
import { Circle } from "lucide-react";
import { TableCellsMerge } from "lucide-react";
import { SquareCheck } from "lucide-react";
import { IconButton, Tooltip } from "@mui/material";
import colorTheme from "@/components/constants/colorTheme";
import { useState } from "react";

export default function DefaultDock({
  isShow,
  themeToggle,
  styleToggle,
  tabButton,
  headerButton,
  plusButton,
  languageButton,
  visibilityButton,
  checkboxButtons,
  loading,
  variant = "sapphire",
  theme = "light",
}) {
  const [isToggleTheme, setIsToggleTheme] = useState("light");
  const [isToggleStyle, setIsToggleStyle] = useState("sapphire");
  const [isToggleLanguage, setIsToggleLanguage] = useState("en");
  const [isToggleAddButton, setIsToggleAddButton] = useState(true);
  const [isToggleHeader, setIsToggleHeader] = useState(true);
  const [isToggleTab, setIsToggleTab] = useState(false);
  const [isToggleVisibility, setIsToggleVisibility] = useState(true);
  const [isCheckboxButtons, setIsCheckboxButtons] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { dockIconColor, dockBackgroundColor } = colorTheme[variant];
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);

  function toggleAddButton() {
    setIsToggleAddButton(!isToggleAddButton);
    plusButton();
  }

  function toggleHeader() {
    setIsToggleHeader(!isToggleHeader);
    headerButton();
  }

  function toggleTheme() {
    setIsToggleTheme(isToggleTheme === "light" ? "dark" : "light");
    themeToggle();
  }

  function toggleLanguage() {
    setIsToggleLanguage(isToggleLanguage === "en" ? "pt-br" : "en");
    languageButton();
  }

  function toggleStyle() {
    setIsToggleStyle(isToggleStyle === "sapphire" ? "crimson" : "sapphire");
    styleToggle();
  }

  function toggleTab() {
    setIsToggleTab(!isToggleTab);
    tabButton();
  }

  function toggleVisibility() {
    setIsToggleVisibility(!isToggleVisibility);
    visibilityButton();
  }

  function toggleCheckboxButtons() {
    setIsCheckboxButtons(!isCheckboxButtons);
    checkboxButtons();
  }

  function handleLoading() {
    setIsLoading(true);
    loading();
    setTimeout(() => {
      setIsLoading(false);
      loading();
    }, 2000);
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
        className={` gap-4  transition-all duration-500 ease-in-out
          ${isLoading ? "opacity-30 pointer-events-none" : "opacity-100"}
        `}
      >
        <DockIcon>
          <Tooltip
            title={`Change theme to ${
              isToggleTheme === "dark" ? "light" : "dark  "
            }`}
            placement="top"
          >
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
              {isToggleTheme === "light" ? (
                <Moon size={18} />
              ) : (
                <Sun size={18} />
              )}
            </IconButton>
          </Tooltip>
        </DockIcon>

        <DockIcon>
          <Tooltip
            title={`Change style to ${
              isToggleStyle === "sapphire" ? "crimson" : "sapphire"
            }`}
            placement="top"
          >
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
              onClick={toggleStyle}
            >
              <Brush size={18} />
            </IconButton>
          </Tooltip>
        </DockIcon>

        <DockIcon>
          <Tooltip
            title={`Change language to ${
              isToggleLanguage === "en" ? "pt-br" : "en"
            }`}
            placement="top"
          >
            <IconButton
              size="large"
              onMouseEnter={() => setIsHovered6(true)}
              onMouseLeave={() => setIsHovered6(false)}
              style={{
                background: isHovered6
                  ? dockBackgroundColor[theme]
                  : "transparent",
                color: dockIconColor[theme],
              }}
              onClick={toggleLanguage}
            >
              <Languages size={18} />
            </IconButton>
          </Tooltip>
        </DockIcon>

        <DockIcon>
          <Tooltip
            title={`${
              isToggleAddButton === true ? "Remove" : "Add"
            } plus button `}
            placement="top"
          >
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
              onClick={toggleAddButton}
            >
              <SquarePlus size={18} />
            </IconButton>
          </Tooltip>
        </DockIcon>

        <DockIcon>
          <Tooltip
            title={`${isToggleHeader === true ? "Remove" : "Add"} header `}
            placement="top"
          >
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
              onClick={toggleHeader}
            >
              <ListStart size={18} />
            </IconButton>
          </Tooltip>
        </DockIcon>

        <DockIcon>
          <Tooltip
            title={`${isToggleTab === true ? "Remove" : "Add"} tabs `}
            placement="top"
          >
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
              onClick={toggleTab}
            >
              <TableCellsMerge size={18} />
            </IconButton>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip title={`Toggle empty state`} placement="top">
            <IconButton
              size="large"
              onMouseEnter={() => setIsHovered7(true)}
              onMouseLeave={() => setIsHovered7(false)}
              style={{
                background: isHovered7
                  ? dockBackgroundColor[theme]
                  : "transparent",
                color: dockIconColor[theme],
              }}
              onClick={toggleVisibility}
            >
              <Circle size={18} />
            </IconButton>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip
            title={`${
              isCheckboxButtons === false ? "Remove" : "Add"
            } checkbox buttons `}
            placement="top"
          >
            <IconButton
              size="large"
              onMouseEnter={() => setIsHovered8(true)}
              onMouseLeave={() => setIsHovered8(false)}
              style={{
                background: isHovered8
                  ? dockBackgroundColor[theme]
                  : "transparent",
                color: dockIconColor[theme],
              }}
              onClick={toggleCheckboxButtons}
            >
              <SquareCheck size={18} />
            </IconButton>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip title={`Toggle loading`} placement="top">
            <IconButton
              size="large"
              onMouseEnter={() => setIsHovered9(true)}
              onMouseLeave={() => setIsHovered9(false)}
              style={{
                background: isHovered9
                  ? dockBackgroundColor[theme]
                  : "transparent",
                color: dockIconColor[theme],
              }}
              onClick={handleLoading}
            >
              <Hourglass size={18} />
            </IconButton>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
