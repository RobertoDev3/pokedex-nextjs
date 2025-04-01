'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useNavStore } from '@/stores/navbarStore';
import { cn } from '@/lib/utils';

import { IconFavorite } from '@/assets/icons/svg/icon-favorite';
import { IconFavoriteFill } from '@/assets/icons/svg/icon-favorite-fill';
import { IconPokedex } from '@/assets/icons/svg/icon-pokedex';
import { IconPokedexFill } from '@/assets/icons/svg/icon-pokedex-fill';
import { IconProfile } from '@/assets/icons/svg/icon-profile';
import { IconProfileFill } from '@/assets/icons/svg/icon-profile-fill';
import { IconRegion } from '@/assets/icons/svg/icon-region';
import { IconRegionFill } from '@/assets/icons/svg/icon-region-fill';
import { Tooltip } from '../ui/tooltip';

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
  const setIsNavBarLoading = useNavStore(state => state.setIsNavBarLoading);

  useEffect(() => {
    setIsNavBarLoading(false);
  }, [pathname, setIsNavBarLoading]);

  return (
    <nav
      className={cn(
        'mx-auto grid w-dvw gap-10 overflow-hidden bg-white px-8 sm:max-w-[calc(100dvw-30%)] lg:max-w-[calc(100dvw-50%)]',
        className,
      )}
      style={{
        gridTemplateColumns: `repeat(${MenuList.length}, minmax(0, 1fr))`,
      }}
    >
      {MenuList.map((menu, index) => {
        const isActive = pathname.startsWith(menu.href);
        return (
          <Tooltip.Provider key={index}>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <Link
                  href={menu.href}
                  onClick={() => setIsNavBarLoading(true)}
                  className={cn(
                    'flex h-[72px] flex-col items-center justify-center transition-all hover:scale-110',
                    isActive && 'pointer-events-none',
                  )}
                >
                  {isActive ? menu.icon : menu.iconFill}
                  {isActive && (
                    <p className='text-primary text-xs font-medium'>
                      {menu.name}
                    </p>
                  )}
                </Link>
              </Tooltip.Trigger>
              {!isActive && (
                <Tooltip.Content sideOffset={-25}>{menu.name}</Tooltip.Content>
              )}
            </Tooltip.Root>
          </Tooltip.Provider>
        );
      })}
    </nav>
  );
}
