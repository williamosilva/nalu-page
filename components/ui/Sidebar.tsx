import React, { useState, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Users,
  Settings,
  HelpCircle,
  ListFilter,
  LayoutGrid,
  PaintBucket,
  Workflow,
  Ellipsis,
} from "lucide-react";
import colorTheme from "@/components/constants/colorTheme";
import NaluLogo from "@/assets/NaluSapphire.svg";
import Profile from "@/assets/Profile.jpg";

interface Badge {
  type: "number" | "text";
  content: string;
}

interface MenuItem {
  icon: React.FC<{ className?: string }>;
  label: string;
  href: string;
  badge?: Badge;
}

interface ColorTheme {
  backgroundGradient: {
    firstColor: {
      light: string;
      dark: string;
    };
    finalColor: {
      light: string;
      dark: string;
    };
  };
  mainText: {
    light: string;
    dark: string;
  };
  sideBorder: {
    light: string;
    dark: string;
  };
  imgBackground: {
    light: string;
    dark: string;
  };
}

interface SidebarProps {
  children: ReactNode;
  variant: keyof typeof colorTheme;
  theme: "light" | "dark";
}

const Sidebar: React.FC<SidebarProps> = ({ children, variant, theme }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState<number | null>(null);
  const { mainText, sideBorder, imgBackground } = colorTheme[
    variant
  ] as ColorTheme;

  const menuItems: MenuItem[] = [
    { icon: LayoutGrid, label: "Overview", href: "/" },
    {
      icon: Users,
      label: "Users",
      href: "/",
      badge: {
        type: "number",
        content: "5",
      },
    },
    {
      icon: PaintBucket,
      label: "Branding",
      href: "/",
    },
    {
      icon: Workflow,
      label: "Integration",
      href: "/",
      badge: {
        type: "text",
        content: "New",
      },
    },
    { icon: Settings, label: "Settings", href: "/" },
    { icon: HelpCircle, label: "Help", href: "/" },
  ];

  const handleMenuItemClick = (index: number): void => {
    setSelectedMenuItem(index);
  };

  const toggleSidebar = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  const renderBadge = (badge?: Badge): ReactNode => {
    if (!badge) return null;

    if (badge.type === "number") {
      return (
        <span className="ml-auto bg-blue-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
          {badge.content}
        </span>
      );
    }

    if (badge.type === "text") {
      return (
        <span className="ml-auto bg-green-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
          {badge.content}
        </span>
      );
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden z-50 relative">
      <div
        style={{
          background: `white`,
          borderRight: `1px solid ${sideBorder[theme]}`,
          color: mainText[theme],
        }}
        className={`fixed left-0 top-0 z-40 h-screen transition-all duration-500 ease-in-out flex flex-col ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Header */}
        <div className="flex-shrink-0 h-32 px-4 py-8">
          <div
            className={`flex items-center justify-between w-full transition-all duration-500 ease-in-out ${
              isOpen ? "opacity-100" : "opacity-100"
            }`}
          >
            <div
              style={{
                background: imgBackground[theme],
              }}
              className={`flex items-center justify-center border rounded-2xl transition-all duration-500 ease-in-out
                ${isOpen ? "w-14 h-14 p-2" : "w-0 h-0 p-0"}`}
            >
              <Image src={NaluLogo} alt="Nalu Logo" width={56} height={56} />
            </div>

            <div className="w-14 h-14 flex items-center justify-center relative z-50 ">
              <button
                onClick={toggleSidebar}
                style={{
                  border: isOpen
                    ? `1px solid ${sideBorder[theme]}`
                    : "1px solid #ffffff",
                }}
                className={`
                  ${
                    isOpen
                      ? "absolute top-[50%] left-[130%] -translate-x-1/2 -translate-y-1/2"
                      : "absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
                  }
                  flex h-8 w-8 items-center justify-center rounded-full bg-[#ffffff] hover:bg-[#ffefff] group text-gray-900 transition-all duration-500 ease-in-out
                `}
              >
                <X
                  className={`
                    ${
                      isOpen
                        ? "h-4 w-4 opacity-100 rotate-180"
                        : "h-0 w-0 opacity-0 rotate-0"
                    }
                    transition-all duration-500 rotate-0 absolute top-[50%] left-[50%] group-hover:rotate-[270deg] -translate-x-1/2 -translate-y-1/2
                  `}
                />
                <span
                  className={`
                    ${
                      isOpen
                        ? "h-0 w-0 opacity-0 rotate-0"
                        : "h-4 w-4 opacity-100 rotate-180"
                    }
                    transition-all duration-500 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 group
                  `}
                >
                  <Menu className="absolute top-[50%] left-[50%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-all ease-in-out duration-300" />
                  <ListFilter className="absolute top-[50%] left-[50%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 rotate-180 transition-all ease-in-out duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 flex flex-col min-h-0">
          <nav className="flex-1 px-4 overflow-y-auto">
            {menuItems.map((item, index) => (
              <div
                key={item.label}
                style={{
                  borderColor: sideBorder[theme],
                }}
                className={`relative px-3 py-4 text-sm font-medium transition-all text-neutral-600 cursor-pointer hover:text-neutral-950 ${
                  index === menuItems.length - 1 ? "" : "border-b-[1px]"
                } ${
                  isOpen
                    ? "justify-start space-x-3"
                    : "justify-between items-center pr-4"
                } ${selectedMenuItem === index ? "" : "opacity-50"}`}
                onClick={() => handleMenuItemClick(index)}
              >
                <Link
                  href={item.href}
                  className="flex items-center justify-between w-full"
                >
                  <div className="flex items-center">
                    <item.icon className="h-5 w-5" />
                    {isOpen && <span className="ml-3">{item.label}</span>}
                  </div>
                  {isOpen && renderBadge(item.badge)}
                </Link>

                <div
                  style={{
                    height: selectedMenuItem === index ? "60%" : "0%",
                    width: selectedMenuItem === index ? "6px" : "0px",
                    right: isOpen
                      ? selectedMenuItem === index
                        ? "103%"
                        : "108%"
                      : selectedMenuItem === index
                      ? "114%"
                      : "140%",
                  }}
                  className="absolute top-1/2 transition-all ease-in-out duration-300 bg-blue-500 rounded-tr-full rounded-br-full -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            ))}
          </nav>
        </div>

        {/* Footer/Profile */}
        <div
          className={`
              ${isOpen ? "w-[90%]" : "w-[70%]"}
            bg-[#ece9e9] rounded-full mb-4 p-2 overflow-hidden overflow-x-hidden mx-auto hover:bg-[#d6d2d2] cursor-pointer transition-all duration-300 ease-in-out`}
        >
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image src={Profile} alt="Profile" width={40} height={40} />
            </div>

            <div
              className={` ${
                isOpen ? "w-full ml-3" : "w-0 ml-0"
              } transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap overflow-x-hidden select-none`}
            >
              <p className="text-sm font-medium">William Silva</p>
              <p className="text-xs text-neutral-500">Send email</p>
            </div>

            <div
              className={` ${
                isOpen ? "h-5 w-5" : "h-0 w-0"
              } flex-shrink-0 flex items-center justify-center mr-3 text-[#89838d]`}
            >
              <Ellipsis />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex-1 transition-all duration-500 overflow-hidden ${
          isOpen ? "ml-64" : "ml-[80px]"
        }`}
      >
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
