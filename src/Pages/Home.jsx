import React from "react";
import useApps from "../Hook/useApps";
import App from "../Component/App";
import play from "../assets/playstore.png";
import appStore from "../assets/appstore.png";
import modile from "../assets/hero.png";
import { Link, NavLink } from "react-router";
import LoadingSpinner from "../Component/LoadingSpinner";




const Home = () => {
  const { apps, loading } = useApps();
  const featuredApps = apps.slice(4, 12);
  return (
    <div className="space-y-10">
      <div className="text-center mt-20 space-y-10 ">
        <h1 className="text-4xl font-bold">
          We Build
          <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive 
          </span> Apps
        </h1>
        <p className="text-gray-500 max-w-[50%] mx-auto">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div>
          <Link
            to="https://play.google.com/store/games?device=windows"
            className="btn mr-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={play} alt="Google Play" />
            Google Play
          </Link>

          <a
            href="https://www.apple.com/app-store/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={appStore} alt="App Store" />
            App Store
          </a>
        </div>

        <div className="">
          <img
            className=" mx-auto"
            src={modile}
            alt=""
          />

          <div className=" bg-gradient-to-r from-[#262034] to-[#6111c8] py-15">
            <h1 className="text-xl font-semibold py-10 md:text-5xl md:font-bold text-white">
              Trusted by Millions, Built for You
            </h1>
            <div className="flex flex-col mx-4 justify-center gap-6 md:flex-row">
              <div className="bg-gradient-to-r from-[#9321e0] to-[#ea3ce4] px-16 py-8 space-y-5 rounded-2xl">
                <p className="text-sm text-gray-200">Total Downloads</p>
                <h2 className="text-4xl font-bold text-white">29.6M</h2>
                <p className="text-sm text-gray-200">
                  21% more than last month
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#e407c0] to-[#bd0fc3ad] px-16 py-8 space-y-5 rounded-2xl">
                <p className="text-sm text-gray-200">Total Reviews</p>
                <h2 className="text-4xl font-bold text-white">29.6M</h2>
                <p className="text-sm text-gray-200">
                  46% more than last month
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#7e51e7] to-[#bc0cf6ca] px-16 py-8 space-y-5 rounded-2xl">
                <p className="text-sm text-gray-200">Active Apps</p>
                <h2 className="text-4xl font-bold text-white">132+</h2>
                <p className="text-sm text-gray-200">31 more will Launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-15">
        <h1 className="text-4xl font-bold">Trending Apps</h1>
        <p className="text-gray-500 my-5">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        { loading? <LoadingSpinner></LoadingSpinner> : 
        featuredApps.map((app) => (
          <App key={app.id} app={app}></App>
        ))}
      </div>
      <div className="text-center my-6">
        <Link
          className="text-white btn rounded-sm bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
          to="/apps"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
