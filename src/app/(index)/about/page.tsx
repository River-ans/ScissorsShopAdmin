import { ToggleSidebarButton } from '@/components/shared/ToggleSidebarButton';

export default function AboutPage() {
  return (
    <>
      <div className='text-2xl text-primary-800 font-bold flex items-center gap-2 md:place-content-start p-5'>
        <ToggleSidebarButton />
        About
      </div>
    </>
  );
}
