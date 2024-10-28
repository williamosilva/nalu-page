import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  PanelLeft,
  PanelRight,
  Home,
  Settings,
  Users,
  HelpCircle,
} from "lucide-react";
import colorTheme from "@/components/constants/colorTheme";
import NaluLogo from "@/assets/NaluSapphire.svg";

const Sidebar = ({ children, variant, theme }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { backgroundGradient, mainText, sideBorder, imgBackground } =
    colorTheme[variant];

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Users, label: "Users", href: "/users" },
    { icon: Settings, label: "Settings", href: "/settings" },
    { icon: HelpCircle, label: "Help", href: "/help" },
  ];

  return (
    <div className="flex min-h-screen">
      <div
        style={{
          background: `linear-gradient(280deg, ${backgroundGradient.firstColor[theme]}, ${backgroundGradient.finalColor[theme]})`,
          borderRight: `1px solid ${sideBorder[theme]}`,
          color: mainText[theme],
        }}
        className={`fixed left-0 top-0 z-40 h-screen   transition-all duration-300 ease-in-out
          ${isOpen ? "w-64" : "w-16"}`}
      >
        <div className="flex h-auto w-full items-center justify-between px-4 py-4">
          {isOpen ? (
            <div className="flex w-full justify-between">
              <div
                style={{
                  background: imgBackground[theme],
                }}
                className="p-2 w-14 h-14 flex items-center justify-center border rounded-2xl"
              >
                <Image
                  src={NaluLogo}
                  alt="Nalu Logo"
                  width="100%"
                  height="100%"
                />
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative  flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-white"
              >
                <PanelRight
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative  flex h-6 w-6 items-center justify-center rounded-full bg-neutral-50 text-white"
            >
              <PanelLeft
                className={`h-4 w-4 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>

        <nav className="mt-4 space-y-2 px-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-neutral-50
                ${isOpen ? "justify-start space-x-3" : "justify-center"}`}
            >
              <item.icon className="h-5 w-5" />
              {isOpen && <span className="ml-3">{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      <div
        className={`min-h-screen flex-1 transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-16"
        }`}
      >
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
