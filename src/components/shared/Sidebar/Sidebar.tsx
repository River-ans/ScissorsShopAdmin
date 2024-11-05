'use client';
import Link from 'next/link';
import React from 'react';
import SquaresLogo from '@/assets/squares.svg';
import TagLogo from '@/assets/tag.svg';
import BrandLogoSvg from '@/components/shared/BrandLogoSvg';
import { useSidebarStore } from '@/stores/useSidebarStore';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const { isOpen } = useSidebarStore();

  return (
    <div
      className={`h-full text-primary-100 flex flex-col overflow-hidden transition-all duration-500 ${
        isOpen ? 'w-[24rem] opacity-100 ' : 'w-0 opacity-0 '
      }`}
    >
      <nav className='min-w-56 overflow-hidden'>
        <Link
          href={'/'}
          className='p-7 flex place-content-between text-primary-300'
        >
          <BrandLogoSvg />
        </Link>
        <ul className='flex flex-col gap-2 font-bold p-4 text-sm '>
          <SidebarItem
            href='/'
            icon={<SquaresLogo width={20} height={20} />}
            label='Overview'
          />
          <div className='text-primary-400'>Product Management</div>
          <SidebarItem
            href='/brands'
            icon={<TagLogo width={20} height={20} />}
            label='brands'
          />
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
