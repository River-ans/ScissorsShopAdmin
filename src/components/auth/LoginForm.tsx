'use client';
import { useState, useRef } from 'react';
import { Button } from '../shared/Button';
import { RefInput } from '../shared/RefInput';
import BrandLogoSvg from '@/components/shared/BrandLogoSvg';
import { Loader } from '../shared/Loader';

export default function LoginForm() {
  const [error, setError] = useState(''); // 오류 메시지 상태
  const [loading, setLoading] = useState(false); // 로딩 상태
  const emailRef = useRef<HTMLInputElement>(null); // useRef로 email 필드 참조
  const passwordRef = useRef<HTMLInputElement>(null); // useRef로 password 필드 참조

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    //로그인 처리 로직
    const email = emailRef.current?.value; // email 입력값
    const password = passwordRef.current?.value; // password 입력값

    //로그인성공 시물레이션
    setTimeout(() => {
      setLoading(false);
      alert('로그인 성공');
      console.log(`${email}+${password}`);
    }, 1000);
    //로그인 처리 로직
  };

  return (
    <div className='content-center min-w-max w-full primary-blur-card relative'>
      <div className='absolute top-8 left-8 z-50'>
        <BrandLogoSvg />
      </div>
      <form
        className='w-full max-w-md flex flex-col gap-2 mx-auto'
        onSubmit={handleLogin}
      >
        <div className='mb-10'>
          <h1 className='font-bold text-3xl '>ADMIN LOGIN</h1>
          <p className='text-primary-600'> Sign in to your account</p>
        </div>
        {/* 오류 메시지 표시 */}
        {error && <p className='text-red-500'>{error}</p>}
        <label
          htmlFor='email'
          className='flex gap-1 items-center text-sm text-primary-600'
        >
          Email
        </label>
        <RefInput
          id='email'
          type='email'
          fullWidth={true}
          placeholder='you@example.com'
          disabled={loading}
          ref={emailRef} // ref를 통해 DOM에 접근
        />

        <label htmlFor='password' className='text-sm text-sm text-primary-600'>
          Password
        </label>
        <RefInput
          id='password'
          type='password'
          fullWidth={true}
          placeholder='************'
          disabled={loading}
          ref={passwordRef}
        />
        <Button
          type='submit'
          variant='primary'
          size='medium'
          fullWidth={true}
          disabled={loading}
          className='mt-4'
        >
          {loading ? <Loader size={'medium'} /> : <span>Login</span>}
        </Button>
      </form>
    </div>
  );
}
