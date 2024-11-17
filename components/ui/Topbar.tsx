import React from "react";
import { Search, Bell, MessageCircle, Menu } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  hasNotification?: boolean;
}

const IconButton: React.FC<ButtonProps> = ({
  children,
  hasNotification,
  ...props
}) => {
  return (
    <button
      className="p-2 hover:bg-gray-100 rounded-full relative transition-all duration-300 ease-in-out"
      {...props}
    >
      {children}
      {hasNotification && (
        <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
      )}
    </button>
  );
};

const Topbar: React.FC = () => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // Handle search functionality here
    console.log(e.target.value);
  };

  return (
    <div className="w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 top-0 left-0 right-0">
      {/* Left Section - Logo */}
      {/* <div className="flex items-center">
        <div className="md:hidden">
          <Menu
            className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-900"
            aria-label="Menu"
          />
        </div>
      </div> */}

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
        <IconButton hasNotification aria-label="Notifications">
          <Bell className="h-5 w-5 text-gray-600" />
        </IconButton>

        <IconButton aria-label="Messages">
          <MessageCircle className="h-5 w-5 text-gray-600" />
        </IconButton>
      </div>
    </div>
  );
};

export default Topbar;
