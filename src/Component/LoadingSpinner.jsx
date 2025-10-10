import { Loader } from 'lucide-react';
import React from 'react';


const LoadingSpinner = () => {
  return (
    <div className='w-full grid grid-cols-4 justify-center my-[100px]  '>
      <Loader className='animate-spin size-20'></Loader>
    </div>
  );
};

export default LoadingSpinner;