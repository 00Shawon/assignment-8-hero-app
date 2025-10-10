import React, { useState } from "react";
import { getInstallApp } from "../Utilities/LocalStorage";
import InstalledApp from "../Component/InstalledApp";

const Installation = () => {
  const [installedAppList, setInstalledAppList] = useState(() =>
    getInstallApp()
  );

const [sortOrder, setSortOrder] = useState("none");

  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...installedAppList].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-dsc") {
      return [...installedAppList].sort((a, b) => b.size - a.size);
    } else {
      return installedAppList;
    }
  })();

  console.log(installedAppList);
  return (
    <div>
      <h1 className="text-3xl font-bold py-5 text-center">Your Installed Apps</h1>
      <p className="text-gray-400 text-center">Explore All Trending Apps on the Market developed by us</p>
      <div className="flex justify-between items-center py-4">
        <h1 className="text-xl font-semibold text-gray-500">
            ({installedAppList.length}) apps found
        </h1>
       <label className="form-control max-w-xs w-full">
         <select className="select select-bordered"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option className="text-black" value="none">
            Sort by Size
          </option>
          <option className="text-black" value="size-asc">
            Low to High
          </option>
          <option className="text-black" value="size-dsc">
            High to Low
          </option>
        </select>
       </label>
      </div>

      <div className="lg:min-w-[1200px] flex flex-col gap-5 ">
        {sortedItem.map((installedApp) => (
          <InstalledApp
            setInstalledAppList={setInstalledAppList}
            key={installedApp.id}
            installedApp={installedApp}
          ></InstalledApp>
        ))}
      </div>
    </div>
  );
};

export default Installation;
