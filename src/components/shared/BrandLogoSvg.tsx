import Logo from '@/assets/scissors.svg';

export default function BrandLogoSvg() {
  return (
    <div className='flex items-center h-fit'>
      <Logo width={25} height={25} />
      <h1 className='text-2xl font-bold'>SCIZZ</h1>
    </div>
  );
}
