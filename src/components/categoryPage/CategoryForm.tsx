'use client';
import { useState, useRef } from 'react';
import { Button } from '../shared/Button';
import { RefInput } from '../shared/RefInput';
import { Loader } from '../shared/Loader';

export default function CategoryForm() {
  const [error, setError] = useState(''); // 오류 메시지 상태
  const [loading, setLoading] = useState(false); // 로딩 상태
  const nameRef = useRef<HTMLInputElement>(null); // 카테고리 이름 필드 참조
  const pathRef = useRef<HTMLInputElement>(null); // Path Name 필드 참조

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // 오류 메시지 초기화

    const name = nameRef.current?.value; // 카테고리 이름 입력값
    const path = pathRef.current?.value; // Path Name 입력값

    if (!name || !path) {
      setError('카테고리 이름과 Path Name을 모두 입력해주세요.');
      setLoading(false);
      return;
    }

    // 저장 성공 시 시뮬레이션
    setTimeout(() => {
      setLoading(false);
      alert('카테고리가 저장되었습니다.');
      console.log(`Name: ${name}, Path: ${path}`);
    }, 1000);
  };

  return (
    <div className='content-center h-full min-w-max w-full z-0 relative'>
      <form
        className='w-full max-w-md flex flex-col gap-4 mx-auto p-6'
        onSubmit={handleSave}
      >
        <div className='mb-6'>
          <p className='text-primary-600'>카테고리 정보를 입력하세요</p>
        </div>

        {/* 오류 메시지 표시 */}
        {error && <p className='text-red-500'>{error}</p>}

        <label htmlFor='name' className='text-sm text-primary-600'>
          카테고리 이름
          <RefInput
            id='name'
            type='text'
            fullWidth={true}
            placeholder='카테고리 이름을 입력하세요'
            disabled={loading}
            ref={nameRef}
          />
        </label>

        <label htmlFor='path' className='text-sm text-primary-600'>
          Path Name
          <RefInput
            id='path'
            type='text'
            fullWidth={true}
            placeholder='path-name'
            disabled={loading}
            ref={pathRef}
          />
        </label>

        {/* 저장 버튼 */}
        <Button
          type='submit'
          variant='primary'
          size='medium'
          fullWidth={true}
          disabled={loading}
          className='mt-4'
        >
          {loading ? <Loader size={'medium'} /> : <span>저장</span>}
        </Button>
      </form>
    </div>
  );
}
