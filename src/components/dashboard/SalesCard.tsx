import React from 'react';

const SalesCard = () => {
  return (
    <div className='bg-white rounded-lg py-4 px-4 w-full shadow-sm w-fit  flex flex-col justify-between gap-1'>
      <SalesCardHeader />
      <div className='text-2xl font-bold'>$500</div>
      <div>+4.5%</div>
    </div>
  );
};

export default SalesCard;

const SalesCardHeader = () => {
  return (
    <div className='flex'>
      <div>$</div>
      <span>매출</span>
    </div>
  );
};
