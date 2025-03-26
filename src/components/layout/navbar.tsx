"use client";

import { IconFavorite } from "@/assets/icons/svg/icon-favorite";
import { IconFavoriteFill } from "@/assets/icons/svg/icon-favorite-fill";
import { IconPokedex } from "@/assets/icons/svg/icon-pokedex";
import { IconPokedexFill } from "@/assets/icons/svg/icon-pokedex-fill";
import { IconProfile } from "@/assets/icons/svg/icon-profile";
import { IconProfileFill } from "@/assets/icons/svg/icon-profile-fill";
import { IconRegion } from "@/assets/icons/svg/icon-region";
import { IconRegionFill } from "@/assets/icons/svg/icon-region-fill";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export function NavBar({ className }: { className?: string }) {
  type MenuListProps = {
    name: string;
    icon: React.ReactNode;
    iconFill: React.ReactNode;
    href: string;
  };

  const MenuList: MenuListProps[] = [
    {
      name: "Pokedex",
      icon: <IconPokedex />,
      iconFill: <IconPokedexFill />,
      href: "/pokedex",
    },
    {
      name: "Regiões",
      icon: <IconRegion />,
      iconFill: <IconRegionFill />,
      href: "/regions",
    },
    {
      name: "Favoritos",
      icon: <IconFavorite />,
      iconFill: <IconFavoriteFill />,
      href: "/favorites",
    },
    {
      name: "Conta",
      icon: <IconProfile />,
      iconFill: <IconProfileFill />,
      href: "/profile",
    },
  ];

  const [activeMenu, setActiveMenu] = useState<string>(MenuList[0].href);

  return (
    <nav
      className={cn(
        `grid grid-cols-${MenuList.length} grid-cols-4 px-8 bg-white w-dvw lg:max-w-[calc(100dvw-50%)] sm:max-w-[calc(100dvw-30%)] mx-auto gap-10 overflow-hidden`,
        className
      )}
    >
      {MenuList.map((menu, index) => (
        <Link
          key={index}
          href={menu.href}
          className="flex flex-col items-center justify-center h-[72px] hover:scale-110 transition-all"
          onClick={() => setActiveMenu(menu.href)}
        >
          {activeMenu === menu.href ? menu.icon : menu.iconFill}
          {activeMenu === menu.href && (
            <p className="text-primary font-medium text-xs">{menu.name}</p>
          )}
        </Link>
      ))}
    </nav>
  );
}
