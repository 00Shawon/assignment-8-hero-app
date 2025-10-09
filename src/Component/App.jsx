import React from 'react';
import iconD from '../assets/fi_9131795.png'
import iconStar from '../assets/fi_1828884.png'

import { Link } from 'react-router';

const App = ({app}) => {
  return (
   
      <div className='p-5 rounded-xl shadow-sm bg-white'>
      <img className='rounded-xl mx-auto' src={app.image} alt="" />
        <p>{app.title}</p>
     <div className='flex justify-between items-center'>
      <div className='flex gap-2'>
         <img src={iconD} alt="" /> <p>{app.downloads} </p>
      </div>
    <div className='flex gap-2'>
       <img src={iconStar} alt="" /><p>{app.ratingAvg} </p>
    </div>
   
     </div> 
     <Link to={`/app/${app.id}`} className='btn btn-outline'>View Details</Link>
     
    </div>
  
    
  );
};

export default App;