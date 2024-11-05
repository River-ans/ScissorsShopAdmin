import SalesCard from '@/components/dashboard/SalesCard';
import MainHeader from '@/components/shared/MainHeader';
import { ToggleSidebarButton } from '@/components/shared/ToggleSidebarButton';
export default function IndexPage() {
  return (
    <>
      <MainHeader title='Overview' />
      <div className='p-5 flex gap-4'>
        <SalesCard />
        <SalesCard />
      </div>
    </>
  );
}
