'use client';
import CategoryForm from '@/components/categoryPage/CategoryForm';
import { Button } from '@/components/shared/Button';
import MainHeader from '@/components/shared/MainHeader';
import { useRouter } from 'next/navigation';

export default function BrandsPage() {
  const router = useRouter();
  const handleBack = () => {
    router.back(); // 이전 페이지로 이동
  };

  return (
    <>
      <MainHeader title='Category Add'>
        <Button
          type='button'
          variant='secondary'
          size='small'
          fullWidth={false}
          onClick={handleBack}
        >
          Back
        </Button>
      </MainHeader>
      <CategoryForm />
    </>
  );
}
