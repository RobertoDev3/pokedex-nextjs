'use client';

import { useNavStore } from '@/stores/navbarStore';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IconFavorite } from '@/assets/icons/svg/icon-favorite';
import { IconFavoriteFill } from '@/assets/icons/svg/icon-favorite-fill';
import { IconPokedex } from '@/assets/icons/svg/icon-pokedex';
import { IconPokedexFill } from '@/assets/icons/svg/icon-pokedex-fill';
import { IconProfile } from '@/assets/icons/svg/icon-profile';
import { IconProfileFill } from '@/assets/icons/svg/icon-profile-fill';
import { IconRegion } from '@/assets/icons/svg/icon-region';
import { IconRegionFill } from '@/assets/icons/svg/icon-region-fill';

type MenuListProps = {
  name: string;
  icon: React.ReactNode;
  iconFill: React.ReactNode;
  href: string;
};

const MenuList: MenuListProps[] = [
  {
    name: 'Pokedex',
    icon: <IconPokedex />,
    iconFill: <IconPokedexFill />,
    href: '/pokedex',
  },
  {
    name: 'Regiões',
    icon: <IconRegion />,
    iconFill: <IconRegionFill />,
    href: '/regions',
  },
  {
    name: 'Favoritos',
    icon: <IconFavorite />,
    iconFill: <IconFavoriteFill />,
    href: '/favorites',
  },
  {
    name: 'Conta',
    icon: <IconProfile />,
    iconFill: <IconProfileFill />,
    href: '/profile',
  },
];

export function NavBar({ className }: { className?: string }) {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(pathname);
  const setIsNavBarLoading = useNavStore(state => state.setIsNavBarLoading);

  useEffect(() => {
    setActiveMenu(pathname);
    setIsNavBarLoading(false);
  }, [pathname, setIsNavBarLoading]);

  return (
    <nav
      className={cn(
        `grid grid-cols-${MenuList.length} mx-auto w-dvw grid-cols-4 gap-10 overflow-hidden bg-white px-8 sm:max-w-[calc(100dvw-30%)] lg:max-w-[calc(100dvw-50%)]`,
        className,
      )}
    >
      {MenuList.map((menu, index) => (
        <Link
          key={index}
          href={menu.href}
          onClick={() => {
            setIsNavBarLoading(true);
            setActiveMenu(menu.href);
          }}
          className={cn(
            'flex h-[72px] flex-col items-center justify-center transition-all hover:scale-110',
            activeMenu === menu.href && 'pointer-events-none',
          )}
        >
          {activeMenu === menu.href ? menu.icon : menu.iconFill}
          {activeMenu === menu.href && (
            <p className='text-primary text-xs font-medium'>{menu.name}</p>
          )}
        </Link>
      ))}
    </nav>
  );
}
