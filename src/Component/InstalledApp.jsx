import iconD from "../assets/fi_9131795.png";
import iconStar from "../assets/fi_1828884.png";
import { deleteFromInstalledAppList } from "../Utilities/LocalStorage";
import { toast, ToastContainer } from "react-toastify";


const InstalledApp = ({ installedApp, setInstalledAppList }) => {

  const handleUninstall = (id) => {
    deleteFromInstalledAppList(id);
    setInstalledAppList((prev) => prev.filter((p) => p.id !== id));
    toast("App uninstalled");
  };

  const { image, downloads, title, ratingAvg, size, id } = installedApp;

  return (
<div>
   <div className="flex items-center justify-between ">
      <div className="flex gap-6 p-5">
        <img className="h-20" src={image} alt="" />
        <div>
          <h1 className="mb-4 mt-2 font-bold text-xl">{title}</h1>
          <div className="flex gap-6 justify-between">
            <div className="flex gap-2">
              <img src={iconD} alt="" /> <p>{downloads} </p>
            </div>
            <div className="flex gap-2">
              <img src={iconStar} alt="" />
              <p>{ratingAvg} </p>
            </div>
            <p>{size} MB</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleUninstall(id)}
        className="bg-green-500 p-2 text-xl font-bold text-white rounded-sm"
      >
        UnInstall
      </button>
     
    </div>

    
</div>
   
  );
};

export default InstalledApp;
