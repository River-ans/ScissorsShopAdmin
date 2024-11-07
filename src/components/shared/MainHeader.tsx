'use client';
import React, { ReactNode } from 'react';
import { ToggleSidebarButton } from './ToggleSidebarButton';
import { useSidebarStore } from '@/stores/useSidebarStore';

interface MainHeaderProps {
  title: string;
  children?: ReactNode; // 버튼이나 다른 컴포넌트를 받을 수 있도록 설정
}

const MainHeader: React.FC<MainHeaderProps> = ({ title, children }) => {
  const { isOpen } = useSidebarStore();

  return (
    <div className='flex items-center gap-2 p-5 place-content-between'>
      <div className='text-2xl text-primary-800 font-bold flex items-center gap-2'>
        <div
          className={`flex items-center transition-transform duration-300 transform ${
            isOpen
              ? 'opacity-0 -translate-x-10 pointer-events-none'
              : 'opacity-100 -translate-x-0'
          }`}
        >
          <ToggleSidebarButton />
        </div>
        <h2
          className={`transition-transform duration-300 transform ${
            isOpen ? '-translate-x-10' : '-translate-x-0'
          }`}
        >
          {title}
        </h2>
      </div>
      {children && children}
    </div>
  );
};

export default MainHeader;
