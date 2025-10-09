import React, { useState } from 'react';
import { getInstallApp } from '../Utilities/LocalStorage';
import InstalledApp from '../Component/InstalledApp';

const Installation = () => {
  const [installedAppList, setInstalledAppList] = useState(()=>getInstallApp());
  console.log(installedAppList)
  return (
    <div>
      <h1 className='text-3xl font-bold'>My Installation</h1>
     <div className='lg:min-w-[1200px] '>
       {
        
        installedAppList.map(installedApp => <InstalledApp setInstalledAppList={setInstalledAppList} key={installedApp.id} installedApp={installedApp}></InstalledApp>)
      }
     </div>
    </div>
  );
};

export default Installation;