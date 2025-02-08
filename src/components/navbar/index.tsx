"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { customLoader } from "@/lib/customLoader";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navbarItems = [
  {
    title: "О нас",
    href: "#",
  },
  {
    title: "Участникам",
    href: "#",
  },
  {
    title: "Посетителям",
    href: "#home-page-text-cards-section",
  },
  {
    title: "Программа и спикеры",
    href: "#",
  },
];

function NavbarItem({ content, link }: { content: string | React.ReactNode; link: string }) {
  return (
    <NavigationMenuItem className="max-[910px]:hidden">
      <NavigationMenuLink href={link} className="font-bold text-[#eaeaea] hover:text-[#15bacc]">
        {content}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function NavbarIcon() {
  return (
    <NavigationMenuItem className="mt-6">
      <NavigationMenuLink>
        <Image src="/logo-1.png" alt="logo" width={180} height={45} loader={customLoader} />
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function LanguageSwitcher() {
  const activeLanguage: "EN" | "RU" | "UZ" = "RU"; // !! TODO: add logic for translations
  return (
    <NavigationMenuItem>
      <div className="flex flex-col items-center gap-0 mt-6">
        {
          //@ts-expect-error other languages will be added later
          <span className={cn(`text-[#eaeaea] font-bold cursor-pointer ${activeLanguage === "EN" ? "text-[#15bacc]" : ""}`)}>
            EN
          </span>
        }
        <span className={cn(`text-[#eaeaea] font-bold cursor-pointer ${activeLanguage === "RU" ? "text-[#15bacc]" : ""}`)}>
          RU
        </span>
        {
          //@ts-expect-error other languages will be added later
          <span className={cn(`text-[#eaeaea] font-bold cursor-pointer ${activeLanguage === "UZ" ? "text-[#15bacc]" : ""}`)}>
            UZ
          </span>
        }
      </div>
    </NavigationMenuItem>
  );
}

function Navbar() {
  return (
    <NavigationMenu className="w-screen flex justify-center h-[50px]">
      <NavigationMenuList className="w-screen flex justify-center items-center">
        <div className="w-[95vw] flex justify-between items-center overflow-hidden">
          <div className="flex justify-center items-center">
            <NavbarIcon />
          </div>
          {navbarItems.map((item) => (
            <NavbarItem content={item.title} key={item.title} link={item.href} />
          ))}
          <div className="flex justify-center items-center mr-4 gap-4">
            <LanguageSwitcher />
            <NavbarItem
              content={<Button className="bg-white text-black rounded-full px-4 py-2">Telegram</Button>}
              link="https://meet.google.com/fko-sgki-mqf"
            />
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button className="max-[910px]:flex hidden bg-transparent ml-4 hover:bg-gray-100">
                <MenuIcon color="#095d66" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-10">
                {navbarItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="font-bold text-[#095d66] hover:text-[#15bacc]"
                    onClick={(e) => {
                      if (item.href.startsWith('#')) {
                        e.preventDefault();
                        const element = document.querySelector(item.href);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.title}
                  </a>
                ))}
                <a
                  href="https://meet.google.com/fko-sgki-mqf"
                  className="font-bold text-[#095d66] hover:text-[#15bacc]"
                >
                  Telegram
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export { Navbar };
