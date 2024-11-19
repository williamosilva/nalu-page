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
  return (
    <button
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

  const { backgroundGradient, sideBorder } = currentTheme;

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
      className="w-full h-16 border-b flex items-center justify-between px-4 top-0 left-0 right-0"
    >
      {/* Middle Section - Search */}
      <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
        <div className="w-full relative flex items-center justify-center py-2 bg-gray-100 rounded-lg">
          <div className="flex items-center text-gray-400 space-x-4">
            <Search className="h-5 w-5 text-gray-800" aria-hidden="true" />
            <span className="text-gray-500">What are you looking for?</span>
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
          theme="bg-blue-100"
          variant="text-blue-500"
        >
          <Bell className="h-5 w-5 text-gray-600" />
        </IconButton>

        <IconButton
          aria-label="Messages"
          theme="bg-green-100"
          variant="text-green-500"
        >
          <MessageCircle className="h-5 w-5 text-gray-600" />
        </IconButton>
      </div>
    </div>
  );
};

export default Topbar;
