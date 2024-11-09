'use client';
import React from 'react';
import { useSidebarStore } from '@/stores/useSidebarStore';

const Overlay: React.FC = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <div
      className={`absolute left-0 w-full h-full transition-all duration-500 md:bg-transparent z-50 md:pointer-events-none ${
        isOpen ? 'bg-primary-900/80 pointer-events-auto' : 'pointer-events-none'
      }`}
      onClick={isOpen ? toggleSidebar : undefined}
    />
  );
};

export default Overlay;
