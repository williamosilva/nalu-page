import React from "react";
import { Search, Bell, MessageCircle, User, Menu } from "lucide-react";

export default function Topbar() {
  return (
    <div className="w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4  top-0 left-0 right-0 ">
      {/* Left Section - Logo */}
      <div className="flex items-center">
        <div className="md:hidden">
          <Menu className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-900" />
        </div>
        {/* <h1 className="text-xl font-bold text-gray-800 ml-4">Dashboard</h1> */}
      </div>

      {/* Middle Section - Search */}
      <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
        <div className="w-full relative flex items-center justify-center py-2 bg-gray-100 rounded-lg">
          <div className="flex items-center text-gray-400 space-x-4">
            <Search className="h-5 w-5 text-gray-800" />
            <span className="text-gray-500">What are you looking for?</span>
          </div>
          <input
            type="text"
            className="absolute inset-0 w-full h-full opacity-0 focus:outline-none"
          />
        </div>
      </div>

      {/* Right Section - Icons */}
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full relative transition-all duration-300 ease-in-out">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300 ease-in-out">
          <MessageCircle className="h-5 w-5 text-gray-600" />
        </button>
        {/* <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300">
          <User className="h-5 w-5 text-gray-600" />
        </div> */}
      </div>
    </div>
  );
}
