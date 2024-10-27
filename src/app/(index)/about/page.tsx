'use client';
import TabLogo from '@/assets/tab.svg';
import { useSidebarStore } from '@/stores/useSidebarStore';

export default function AboutPage() {
  const { isOpen, toggleSidebar } = useSidebarStore();
  return (
    <main className='min-w-80	relative text-primary-900 my-2 mx-2 bg-primary-100 w-full sm:rounded-lg rounded-t-3xl rounded-b-2xl overflow-hidden'>
      <div
        className={`absolute left-0 w-full h-full  transition-all duration-500 md:bg-transparent md:pointer-events-none 
          ${
            isOpen
              ? 'bg-primary-900/80 pointer-events-auto'
              : 'pointer-events-none '
          }`}
        onClick={isOpen ? toggleSidebar : undefined}
      />
      <div className='text-2xl text-primary-800 font-bold flex items-center gap-2 md:place-content-start p-5'>
        <button
          className='sm:hover:bg-primary-600/10 p-1 rounded-lg transition-all	active:bg-primary-800/10'
          onClick={toggleSidebar}
        >
          <TabLogo width={24} height={24} />
        </button>
        about{' '}
      </div>
    </main>
  );
}
