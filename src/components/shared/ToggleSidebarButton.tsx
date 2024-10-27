'use client';
import TabLogo from '@/assets/tab.svg';
import { useSidebarStore } from '@/stores/useSidebarStore';

export const ToggleSidebarButton = () => {
  const { toggleSidebar } = useSidebarStore();

  return (
    <button
      className='sm:hover:bg-primary-600/10 p-1 rounded-lg transition-all	active:bg-primary-800/10'
      onClick={toggleSidebar}
    >
      <TabLogo width={24} height={24} />
    </button>
  );
};
