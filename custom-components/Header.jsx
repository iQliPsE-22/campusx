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
      href: "/seller-dashboard",
      icon: <User className="h-5 w-5" />,
    },
  ];

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <header className="bg-black text-gray-200 border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="audiowide text-xl lg:text-2xl text-white">
              <span className="text-blue-500">C</span>AMPUSX
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
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
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition"
            >
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition">
              <MessageSquare className="h-5 w-5" />
            </button>
            <Link
              href="/profile"
              className="px-4 py-2 bg-blue-500 text-black rounded-lg font-medium hover:brightness-90 transition"
            >
              Login/Register
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
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-400 hover:text-white transition"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "bg-gray-800 text-blue-500"
                      : "text-gray-400 hover:bg-gray-900 hover:text-white"
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-700 flex flex-col gap-2">
              <button className="flex items-center p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition">
                <Bell className="h-5 w-5 mr-2" />
                Notifications
              </button>
              <button className="flex items-center p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition">
                <MessageSquare className="h-5 w-5 mr-2" />
                Messages
              </button>
              <Link
                href="/profile"
                className="flex items-center justify-center bg-blue-500 text-black font-semibold py-2 px-4 rounded-lg hover:brightness-90 transition"
              >
                Login/Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
