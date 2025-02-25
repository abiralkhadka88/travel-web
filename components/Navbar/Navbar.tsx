"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "NEPAL",
    subItems: [
      {
        title: "Popular Activities",
        items: [
          { title: "Trekking in Nepal", href: "#" },
          { title: "Tour in Nepal", href: "#" },
          { title: "Climbing and Expedition", href: "#" },
          { title: "One Day Activities", href: "#" },
        ],
      },
      {
        title: "Popular Regions",
        items: [
          { title: "Everest Region", href: "#" },
          { title: "Annapurna Region", href: "#" },
          { title: "Langtang Region", href: "#" },
          { title: "Kathmandu Valley", href: "#" },
        ],
      },
    ],
  },
  {
    title: "DESTINATIONS",
    subItems: [
      {
        title: "Countries",
        items: [
          { title: "Bhutan", href: "#" },
          { title: "Tibet", href: "#" },
          { title: "India", href: "#" },
          { title: "Maldives", href: "#" },
        ],
      },
      {
        title: "Multi Country Tours",
        items: [
          { title: "Nepal & Bhutan", href: "#" },
          { title: "Nepal & Tibet", href: "#" },
          { title: "Golden Triangle", href: "#" },
          { title: "South Asia Tour", href: "#" },
        ],
      },
    ],
  },
  {
    title: "LUXURY TRIPS",
    subItems: [
      {
        title: "Luxury Treks",
        items: [
          { title: "Everest Base Camp Trek", href: "#" },
          { title: "Annapurna Luxury Trek", href: "#" },
          { title: "Ghorepani Poon Hill Trek", href: "#" },
          { title: "Manaslu Circuit Trek", href: "#" },
        ],
      },
      {
        title: "Luxury Tours",
        items: [
          { title: "Nepal Cultural Tour", href: "#" },
          { title: "Helicopter Sightseeing", href: "#" },
          { title: "Wildlife Safari", href: "#" },
          { title: "Mountain Flights", href: "#" },
        ],
      },
    ],
  },
  {
    title: "EXPEDITIONS",
    subItems: [
      {
        title: "Popular Peaks",
        items: [
          { title: "Mount Everest", href: "#" },
          { title: "Ama Dablam", href: "#" },
          { title: "Island Peak", href: "#" },
          { title: "Mera Peak", href: "#" },
        ],
      },
      {
        title: "Climbing Courses",
        items: [
          { title: "Basic Climbing Course", href: "#" },
          { title: "Advanced Climbing", href: "#" },
          { title: "Ice Climbing", href: "#" },
          { title: "Rock Climbing", href: "#" },
        ],
      },
    ],
  },
  {
    title: "HELICOPTER TOURS",
    subItems: [
      {
        title: "Popular Tours",
        items: [
          { title: "Everest Base Camp Heli Tour", href: "#" },
          { title: "Annapurna Base Camp Heli Tour", href: "#" },
          { title: "Langtang Heli Tour", href: "#" },
          { title: "Gosaikunda Heli Tour", href: "#" },
        ],
      },
      {
        title: "Special Tours",
        items: [
          { title: "Mountain Sightseeing", href: "#" },
          { title: "Heli Skiing", href: "#" },
          { title: "Wedding Photography", href: "#" },
          { title: "Emergency Rescue", href: "#" },
        ],
      },
    ],
  },
  {
    title: "COMPANY",
    href: "#company",
  },
  {
    title: "CONTACT US",
    href: "#contact",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="font-serif text-2xl font-bold text-gray-900"
            >
              Pearls
            </Link>
          </div>

          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger className="group uppercase hover:text-primary  font-semibold transition-all ease-in-out duration-100">
                          {item.title}
                          {/* <ChevronDown className="ml-1 h-4 w-4 transition duration-300 group-data-[state=open]:rotate-180" /> */}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-2 bg-white rounded-lg">
                            {item.subItems.map((section) => (
                              <div key={section.title}>
                                <h3 className="font-medium leading-none mb-3 text-sm text-gray-500">
                                  {section.title}
                                </h3>
                                <div className="grid gap-2">
                                  {section.items.map((subItem) => (
                                    <a
                                      key={subItem.title}
                                      href={subItem.href}
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                      <div className="text-sm font-medium leading-none">
                                        {subItem.title}
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "hover:text-primary"
                        )}
                      >
                        {item.title}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex gap-2 items-center">
            <div className="bg-sky-500/90 flex rounded-full p-1 w-8 h-8 items-center justify-center text-white font-medium tracking-wider">
              GB
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Whatsapp, Viber</span>
              <span className="text-sm text-gray-700">+977-9851079682</span>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }  bg-white/90 backdrop-blur-md overflow-auto`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <div key={item.title} className="py-2">
              {item.subItems ? (
                <div className="space-y-2">
                  <div className="font-medium text-gray-900">{item.title}</div>
                  {item.subItems.map((section) => (
                    <div key={section.title} className="pl-4 space-y-2">
                      <div className="text-sm font-medium text-gray-500">
                        {section.title}
                      </div>
                      {section.items.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <a
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {item.title}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
