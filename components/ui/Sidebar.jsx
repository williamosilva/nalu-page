import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  Users,
  Settings,
  HelpCircle,
  ListFilter,
} from "lucide-react";
import colorTheme from "@/components/constants/colorTheme";
import NaluLogo from "@/assets/NaluSapphire.svg";
import { Input } from "@/components/ui/input";

const Sidebar = ({ children, variant, theme }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const { backgroundGradient, mainText, sideBorder, imgBackground } =
    colorTheme[variant];

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Users, label: "Users", href: "/" },
    { icon: Settings, label: "Settings", href: "/" },
    { icon: HelpCircle, label: "Help", href: "/" },
  ];

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="flex min-h-screen">
      <div
        style={{
          background: `linear-gradient(280deg, ${backgroundGradient.firstColor[theme]}, ${backgroundGradient.finalColor[theme]})`,
          borderRight: `1px solid ${sideBorder[theme]}`,
          color: mainText[theme],
        }}
        className={`fixed left-0 top-0 z-40 h-screen transition-all duration-500 ease-in-out ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex h-fit w-full items-center justify-center px-4 py-4">
          <div
            className={`flex items-center justify-between w-full transition-all duration-500 ease-in-out ${
              isOpen ? "opacity-100" : "opacity-100"
            }`}
          >
            <div
              style={{
                background: imgBackground[theme],
              }}
              className={` flex items-center justify-center border rounded-2xl transition-all duration-500 ease-in-out
                ${isOpen ? "w-14 h-14 p-2" : "w-0 h-0 p-0"}`}
            >
              <Image
                src={NaluLogo}
                alt="Nalu Logo"
                width="100%"
                height="100%"
              />
            </div>

            <div
              className={`w-14 h-14 flex items-center justify-center relative`}
            >
              <button
                onClick={toggleSidebar}
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
                      transition-all duration-500 rotate-0 absolute top-[50%] left-[50%] group-hover:rotate-[270deg]   -translate-x-1/2 -translate-y-1/2 `}
                />
                <span
                  className={`
                           ${
                             isOpen
                               ? "h-0 w-0 opacity-0 rotate-0"
                               : "h-4 w-4 opacity-100 rotate-180"
                           }
                        transition-all duration-500    absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 group`}
                >
                  <Menu
                    className={
                      "absolute top-[50%] left-[50%]  h-4 w-4 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-all ease-in-out duration-300"
                    }
                  />
                  <ListFilter
                    className={
                      "absolute top-[50%] left-[50%] h-4 w-4  -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 rotate-180 transition-all ease-in-out duration-300"
                    }
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        <nav className="mt-4 space-y-2 px-2">
          <Input placeholder="Buscar produtos..." className="max-w-sm" />
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-neutral-50 ${
                isOpen
                  ? "justify-start space-x-3"
                  : "justify-between items-center pr-4 bg-neutral-50"
              } ${
                selectedMenuItem === index
                  ? "bg-neutral-50 border-l-4 border-l-blue-500"
                  : ""
              }`}
              onClick={() => handleMenuItemClick(index)}
            >
              <div className="flex items-center">
                <item.icon className="h-5 w-5" />
                {isOpen && <span className="ml-3">{item.label}</span>}
              </div>
              {!isOpen && selectedMenuItem === index && (
                <div className="w-2 h-full bg-blue-500"></div>
              )}
            </Link>
          ))}
        </nav>
      </div>

      <div
        className={`min-h-screen flex flex-1 transition-all duration-500 ${
          isOpen ? "ml-64" : "ml-16"
        } overflow-x-hidden`}
      >
        <main className="p-8 flex flex-1 w-full">{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
