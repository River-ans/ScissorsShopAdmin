'use client';
import { useState, forwardRef } from 'react';

type InputProps = {
  id?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  color?: string;
  radius?: 'rounded-none' | 'rounded-lg' | 'rounded-full';
};

export const RefInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      type = 'text',
      variant = 'primary',
      size = 'medium',
      disabled = false,
      fullWidth = false,
      placeholder = '',
      color,
      radius = 'rounded-lg',
    },
    ref // ref가 여기서 전달됩니다.
  ) => {
    const baseStyle = `input ${variant} ${size} ${radius} ${
      fullWidth ? 'w-full' : 'w-fit'
    }`;
    const customStyle = color ? { backgroundColor: color } : {};

    const [scrollPosition, setScrollPosition] = useState<number>(0);

    const handleFocus = () => {
      // 현재 스크롤 위치를 저장
      setScrollPosition(window.scrollY);
    };

    const handleBlur = () => {
      // 원래 스크롤 위치로 스무스하게 복원
      window.scrollTo({
        top: scrollPosition, // 복원할 스크롤 위치
        behavior: 'smooth', // 스무스한 스크롤 동작
      });
    };

    return (
      <input
        id={id}
        type={type}
        className={baseStyle}
        style={customStyle}
        placeholder={placeholder}
        ref={ref} // ref를 전달받음
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );
  }
);

// forwardRef를 사용한 컴포넌트의 displayName 설정
RefInput.displayName = 'RefInput';
