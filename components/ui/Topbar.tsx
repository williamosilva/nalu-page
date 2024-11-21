import React from "react";
import { Search, Bell, MessageCircle } from "lucide-react";
import colorTheme from "@/components/constants/colorTheme";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  hasNotification?: boolean;
  theme?: string;
  variant?: string;
}

const IconButton: React.FC<ButtonProps> = ({
  children,
  hasNotification,
  theme,
  variant,
  ...props
}) => {
  const currentTheme = colorTheme[variant];
  const [isHovered, setIsHovered] = React.useState(false);

  if (!currentTheme) {
    console.error(`Invalid variant: ${variant}`);
    return null;
  }

  const { iconButtonHover } = currentTheme;

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered ? iconButtonHover[theme] : "transparent ",
      }}
      className={`p-2 hover:bg-gray-100 rounded-full relative transition-all duration-300 ease-in-out ${theme} ${variant}`}
      {...props}
    >
      {children}
      {hasNotification && (
        <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
      )}
    </button>
  );
};

interface TopbarProps {
  variant?: "sapphire" | "crimson";
  theme?: "light" | "dark";
}

const Topbar: React.FC<TopbarProps> = ({
  theme = "light",
  variant = "sapphire",
  ...props
}) => {
  // Garantir que o tema e a variante sejam válidos
  const currentTheme = colorTheme[variant];
  if (!currentTheme) {
    console.error(`Invalid variant: ${variant}`);
    return null;
  }

  const {
    backgroundGradient,
    sideBorder,
    searchBackground,
    searchTextColor,
    searchIconColor,
    iconButton,
  } = currentTheme;

  if (!backgroundGradient || !sideBorder) {
    console.error(`Invalid theme structure for variant: ${variant}`);
    return null;
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
  };

  return (
    <div
      style={{
        background: backgroundGradient.firstColor[theme],
        borderColor: sideBorder[theme],
      }}
      className="w-full h-16 border-b flex items-center justify-between px-4 top-0 left-0 right-0 transition-all 
      duration-300 ease-in-out"
    >
      {/* Middle Section - Search */}
      <div className="hidden md:flex items-center flex-1 max-w-xl mx-auto">
        <div
          style={{
            background: searchBackground[theme],
          }}
          className="w-full relative flex items-center justify-center py-2 transition-all duration-300 ease-in-out  rounded-lg"
        >
          <div className="flex items-center  space-x-4">
            <Search
              className="h-5 w-5 transition-all duration-300 ease-in-out "
              aria-hidden="true"
              style={{ color: searchIconColor[theme] }}
            />
            <span style={{ color: searchTextColor[theme] }}>
              What are you looking for?
            </span>
          </div>
          <input
            type="text"
            className="absolute inset-0 w-full h-full opacity-0 focus:outline-none"
            onChange={handleSearch}
            aria-label="Search input"
          />
        </div>
      </div>

      {/* Right Section - Icons */}
      <div className="flex items-center space-x-4">
        <IconButton
          hasNotification
          aria-label="Notifications"
          theme={theme}
          variant={variant}
        >
          <Bell className="h-5 w-5 " style={{ color: iconButton[theme] }} />
        </IconButton>

        <IconButton aria-label="Messages" variant={variant} theme={theme}>
          <MessageCircle
            className="h-5 w-5 "
            style={{ color: iconButton[theme] }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default Topbar;
