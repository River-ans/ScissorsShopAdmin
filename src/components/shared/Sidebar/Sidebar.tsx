'use client';
import React from 'react';
import SquaresLogo from '@/assets/squares.svg';
import TagLogo from '@/assets/tag.svg';
import CategoryLogo from '@/assets/category.svg';
import { useSidebarStore } from '@/stores/useSidebarStore';
import SidebarItem from './SidebarItem';
import { ToggleSidebarButton } from '../ToggleSidebarButton';

const Sidebar = () => {
  const { isOpen } = useSidebarStore();

  return (
    <div
      className={`h-full text-primary-100 flex flex-col overflow-hidden transition-all duration-500 ${
        isOpen ? 'w-[24rem] opacity-100 ' : 'w-0 opacity-0 '
      }`}
    >
      <nav className='min-w-56 overflow-hidden'>
        <div className='pt-7 px-7 flex gap-1 items-center'>
          <ToggleSidebarButton />
          <h1 className='text-2xl font-bold'>SCIZZ</h1>
        </div>

        <ul className='flex flex-col gap-2 font-bold m-5 text-sm '>
          <SidebarItem
            href='/'
            icon={<SquaresLogo width={20} height={20} />}
            label='Overview'
          />
          <div className='text-primary-400'>Product Management</div>
          <SidebarItem
            href='/category'
            icon={<CategoryLogo width={20} height={20} />}
            label='Category'
          />
          <SidebarItem
            href='/brands'
            icon={<TagLogo width={20} height={20} />}
            label='Brands'
          />
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
