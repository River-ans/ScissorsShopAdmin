'use client';
import { Button } from '@/components/shared/Button';
import MainHeader from '@/components/shared/MainHeader';
import { useRouter } from 'next/navigation';

export default function BrandsPage() {
  const router = useRouter();

  const handleAddClick = () => {
    router.push('/category/add'); // 원하는 경로로 이동 (예: /category/add)
  };

  return (
    <>
      <MainHeader title='Category'>
        <Button size='small' onClick={handleAddClick}>
          add
        </Button>
      </MainHeader>
    </>
  );
}
