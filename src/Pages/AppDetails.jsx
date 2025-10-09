import React from "react";
import { useParams } from "react-router";
import useApps from "../Hook/useApps";
import iconD from "../assets/fi_9131795.png";
import iconStar from "../assets/fi_1828884.png";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import { saveInstallApp } from "../Utilities/LocalStorage";



const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();

  if (loading) return <h1>Loading</h1>;

  const app = apps.find((a) => String(a.id) === id);
  const data = app.ratings;

 



  return (
    <div>
      {/* app info */}
      <div className="my-10 py-5 shadow-sm grid grid-cols-6 gap-6">
        <div className="p-5 shadow-sm col-span-1">
          <img className="rounded-xl  mx-auto" src={app.image} alt="" />
        </div>
        <div className="col-span-5">
          <p>{app.title}</p>
          <p>
            Developed By{" "}
            <span className="font-bold text-purple-600">
              {app.companyName}{" "}
            </span>
          </p>
          <div className="border-t border-gray-300 my-6"></div>
          <div className="flex gap-20">
            <div className="text-center">
              <img className="w-10 mx-auto" src={iconD} alt="" />
              <p className="text-gray-400">Downloads</p>
              <h2 className="font-bold text-4xl">{app.downloads}</h2>
            </div>
            <div className="text-center">
              <img className="w-10 mx-auto" src={iconD} alt="" />
              <p className="text-gray-400">Downloads</p>
              <h2 className="font-bold text-4xl">{app.ratingAvg}</h2>
            </div>
            <div className="text-center">
              <img className="w-10 mx-auto" src={iconStar} alt="" />
              <p className="text-gray-400">Downloads</p>
              <h2 className="font-bold text-4xl">{app.reviews}</h2>
            </div>
          </div>
          <button onClick={() =>saveInstallApp(app)} className="btn my-6 bg-[#62cb80] text-white">
            Install Now ({app.size} MB)
          </button>
        </div>
      </div>

      {/* App graph */}
      <div>
        <h1 className="font-bold text-2xl my-6">Ratings</h1>
        <div className="bg-base-100 border rounded-xl p-4 h-80">
<ResponsiveContainer width="100%" height="80%">
  <BarChart layout="vertical" data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis type="number" />
    <YAxis dataKey="name" type="category" />
    <Tooltip />
    <Legend />
    <Bar dataKey="count" fill="orange" />
  </BarChart>
</ResponsiveContainer>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-2xl my-6">Description</h1>
        <p className="text-gray-400">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
