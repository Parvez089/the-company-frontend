/** @format */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import localFont from "next/font/local";
const mohin = localFont({
  src: "../../fonts/Mahin.ttf",
});
const sarbondhara = localFont({
  src: "../../fonts/Srabondhara.ttf",
});
const akkor = localFont({
  src: "../../fonts/Akkhor.ttf",
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='w-full bg-white shadow-md fixed top-0 left-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div
            className={` text-2xl font-bold ${akkor.className}`}>
            দ্যা কোম্পানি
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-6 '>
            <NavigationMenu>
              <NavigationMenuList className={`flex space-x-4 font-bold font-siliguri`}>
                <NavigationMenuItem>
                  <Link className="font-siliguri" href='/'>হোম</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href='/'>প্রজেক্ট</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href='/'>আমাদের সম্পর্কে</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href='/'>যোগাযোগ</Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Buttons */}
          </div>
          <div className='md:flex space-x-2 hidden'>
            <Button variant='outline'>লগ ইন</Button>
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-gray-700 focus:outline-none'>
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-white shadow-md'>
          <NavigationMenu>
            <NavigationMenuList className='flex flex-col p-4 space-y-2'>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href='/' onClick={() => setIsOpen(false)}>
                    হোম
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href='/about' onClick={() => setIsOpen(false)}>
                    প্রজেক্ট
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href='/services' onClick={() => setIsOpen(false)}>
                    আমাদের সম্পর্কে
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href='/contact' onClick={() => setIsOpen(false)}>
                    যোগাযোগ
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <div className='flex flex-col space-y-2 mt-4'>
                <Button variant='outline'>লগ ইন</Button>
                <Button>Get Started</Button>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </header>
  );
};

export default Navbar;
