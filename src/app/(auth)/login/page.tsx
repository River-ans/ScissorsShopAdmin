import LoginForm from '@/components/auth/LoginForm';
import MotivationalMessage from '@/components/auth/MotivationalMessage';

export default function LoginPage() {
  return (
    <div className='flex h-full font-[family-name:var(--font-geist-sans)]'>
      <LoginForm />
      <MotivationalMessage />
    </div>
  );
}
