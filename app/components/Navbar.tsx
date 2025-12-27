import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="border-b shadow-lg bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-3 mb-3 sm:mb-0">
          <img
            src="https://img.icons8.com/stickers/1200/dashboard-layout.jpg"
            alt="logo"
            className="h-8 w-8 md:h-10 md:w-10"
          />
          <h1 className="text-lg md:text-xl font-semibold text-black">
            Smart Workspace
          </h1>
        </div>
        <div className="flex space-x-4 md:space-x-6 lg:space-x-8 text-gray-600 w-full sm:w-auto justify-center sm:justify-end">
          <Link to="/">
            <div className="cursor-pointer bg-slate-50 py-2 px-3 md:py-1 md:px-2 rounded-md text-sm md:text-base text-center hover:bg-slate-100 transition-colors">
              Teams
            </div>
          </Link>
          <Link to="/projects">
            <div className="cursor-pointer bg-slate-50 py-2 px-3 md:py-1 md:px-2 rounded-md text-sm md:text-base text-center hover:bg-slate-100 transition-colors">
              Projects
            </div>
          </Link>
          <Link to="/tasks">
            <div className="cursor-pointer bg-slate-50 py-2 px-3 md:py-1 md:px-2 rounded-md text-sm md:text-base text-center hover:bg-slate-100 transition-colors">
              Tasks
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}