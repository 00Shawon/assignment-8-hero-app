import React, { useState } from "react";
import App from "../Component/App";
import useApps from "../Hook/useApps";

import NotFound from "../Component/NotFound";
import LoadingSpinner from "../Component/LoadingSpinner";


const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;
    if(loading) return <LoadingSpinner></LoadingSpinner>
  if (searchedApps.length === 0) return <NotFound></NotFound>;

  return (
    <div>
      <div>
        <div className="my-6">
          <h1 className="text-2xl font-semibold text-center">
            Our All Applications
          </h1>
          <p className="text-center text-gray-500">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center my-6">
          <p className="font-bold">({searchedApps.length}) Apps Found</p>

          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              className="grow"
              placeholder="Search Apps"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap10">
          {loading ? (
            <span className="loading loading-bars loading-xl"></span>
          ) : (
            searchedApps.map((app) => <App key={app.id} app={app}></App>)
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
