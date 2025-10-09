export const getInstallApp = () => {
  try{  
    const data = localStorage.getItem('installAppList')
    return data? JSON.parse(data): [];
  } catch(err) {
    console.log(err);
    return[];
  }
}

export const saveInstallApp = (app) => {
  const installAppList = getInstallApp();
  try{  
   const isDuplicate = installAppList.some(a => a.id === app.id);
   if(isDuplicate) return alert('App is Already Installed')
    const upDatedInstalledAppList = [...installAppList, app];
  localStorage.setItem('installAppList',JSON.stringify(upDatedInstalledAppList))
  } catch(err) {
    console.log(err);
    return[];
  }
}

export const deleteFromInstalledAppList = (id) => {
  const installAppList = getInstallApp();
  try{  
     const upDatedInstalledAppList = installAppList.filter(a=> a.id !== id);
     localStorage.setItem('installAppList', JSON.stringify(upDatedInstalledAppList))
  } catch(err) {
    console.log(err);
    return[];
  }
}