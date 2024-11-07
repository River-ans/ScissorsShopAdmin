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
      <div
        className={`text-2xl text-primary-800 font-bold flex items-center gap-2 
          transition-transform duration-500 transform ${
            isOpen ? '-translate-x-10' : '-translate-x-0'
          }`}
      >
        <div
          className={`flex items-center transition-all duration-900 transform ${
            isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <ToggleSidebarButton />
        </div>
        <h2>{title}</h2>
      </div>
      {children && children}
    </div>
  );
};

export default MainHeader;
