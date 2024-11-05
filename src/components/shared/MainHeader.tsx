import React, { ReactNode } from 'react';
import { ToggleSidebarButton } from './ToggleSidebarButton';

interface MainHeaderProps {
  title: string;
  children?: ReactNode; // 버튼이나 다른 컴포넌트를 받을 수 있도록 설정
}

const MainHeader: React.FC<MainHeaderProps> = ({ title, children }) => {
  return (
    <div className='flex items-center gap-2 p-5 place-content-between'>
      <div className='text-2xl text-primary-800 font-bold flex items-center gap-2'>
        <ToggleSidebarButton />
        <h2>{title}</h2>
      </div>
      {children && children}
    </div>
  );
};

export default MainHeader;
