"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShoppingBag,
  Home,
  Briefcase,
  User,
  Search,
  Menu,
  X,
  Bell,
  MessageSquare,
  LogIn,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      name: "Marketplace",
      href: "/marketplace",
      icon: <ShoppingBag className="h-5 w-5" />,
    },
    { name: "Rentals", href: "/rentals", icon: <Home className="h-5 w-5" /> },
    {
      name: "Projects",
      href: "/projects",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <User className="h-5 w-5" />,
    },
  ];

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <header className="w-full bg-black text-gray-200 border-b border-gray-700 sticky top-0 z-50">
      <div className="flex justify-between items-center h-16 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <h1 className="audiowide text-xl lg:text-2xl text-white">
            <span className="text-blue-500">C</span>AMPUSX
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-blue-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition"
            >
              <Search className="h-5 w-5" />
            </button> */}
          <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition">
            <MessageSquare className="h-5 w-5" />
          </button>
          <Link
            href="/login"
            className="px-4 py-2 flex flex-row gap-2 bg-blue-500 text-sm rounded-lg font-medium hover:brightness-90 transition"
          >
            <LogIn size={20} />
            <span className="hidden lg:block">Login/Register</span>
          </Link>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 mr-2 text-gray-400 hover:text-white transition"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="py-3 border-t border-gray-700">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search for items, rentals, or projects..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 text-gray-200 placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
          </div>
        </div>
      )}
    </header>
  );
}
