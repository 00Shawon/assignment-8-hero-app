import React from 'react';
import notFound from '../assets/notFound.png'
import { Link } from 'lucide-react';

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={notFound} alt="" />
      <a className='btn btn-primary' href="/apps">Go Back</a>
    </div>
  );
};

export default NotFound;