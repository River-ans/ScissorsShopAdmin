import Overlay from '@/components/shared/Overlay';
import Sidebar from '@/components/shared/Sidebar/Sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '홈페이지',
  description: 'Generated by create next app',
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className='h-dvh transition-all duration-500  w-full 
      font-[family-name:var(--font-geist-sans)] flex min-w-fit'
      >
        <Sidebar />
        <main className='min-w-80 flex flex-col relative text-primary-900 my-2 mx-2 bg-primary-100 w-full sm:rounded-lg rounded-t-3xl rounded-b-2xl '>
          <Overlay />
          {children}
        </main>
      </div>
    </>
  );
}
