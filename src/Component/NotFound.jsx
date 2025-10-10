import React from 'react';
import notFound from '../assets/notFound.png'
import { useNavigate } from 'react-router';




const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={notFound} alt="" />
      <button onClick={()=>navigate(-1)}className='btn btn-primary'>Go Back</button>
    </div>
  );
};

export default NotFound;