import { WiStars } from "react-icons/wi";
import { FaAngleRight } from "react-icons/fa6";
import { data1, data2, data3 } from "../Data/ChartsData";
import React from "react";
import { useContext } from "react"; 
import { DarkLightContext } from "../App";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function OverviewTop() {
  const {darkMode}=useContext(DarkLightContext);
  return (
    <div className="dark:bg-[#05070A] mt-16 ">
      <h1 className="text-xl font-semibold mx-6 mb-6 dark:text-white">Overview</h1>
      <div className="grid lg:grid-rows-1 lg:grid-cols-4 sm:grid-cols-2 sm:grid-rows-2 gap-4   px-6 ">
        <div className="  bg-white w-full p-4 rounded-md border-neutral-300  border dark:bg-[#05070A] dark:border-neutral-800">
            <h1 className="font-medium dark:text-white">Users</h1>
            <div className="flex justify-between items-center mt-3 dark:text-white">
              <p className="text-2xl font-semibold">14K</p>
              <p className="bg-green-50 h-5 text-green-800 border border-green-200 rounded-xl px-3 font-bold text-xs dark:bg-green-800/20 dark:text-green-400 dark:border-green-900">
                +25%
              </p>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-300">Last 30 days</p>
            
            {/* Graph */}
            <div className="pt-6">
              <ResponsiveContainer width="100%" height={50}>
                <AreaChart data={data1}>
                  <defs>
                    <linearGradient
                      id="gradientColor"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="10%"
                        style={{ stopColor: "#52bc52", stopOpacity: 1 }}
                      />
                    {
                          darkMode?<stop
                          offset="100%"
                          style={{ stopColor: "#FFFFFF", stopOpacity: 1 }}
                        />:<stop
                        offset="100%"
                        style={{ stopColor: "#000000", stopOpacity: 1 }}
                      />
                    }
                      <stop
                        offset="100%"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 1 }}
                      />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="none" hide={true} />
                  <YAxis hide={true} />
                  <Tooltip />
                  <Area
                    type=""
                    dataKey="uv"
                    stroke="#52BC52"
                    strokeWidth={2}
                    fill="url(#gradientColor)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
        </div>

        <div className=" bg-white w-full p-4 rounded-md border-neutral-300 border dark:text-white dark:bg-[#05070A]  dark:border-neutral-800">
          <h1 className="font-medium">Conversions</h1>
          <div className="flex justify-between items-center mt-3">
            <p className="text-2xl font-semibold">325</p>
            <p className="bg-red-50 h-5 text-red-800 border border-red-300 rounded-xl px-3 font-bold text-xs dark:bg-red-800/20 dark:text-red-400 dark:border-red-900">
              -25%
            </p>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-300">Last 30 days</p>
          {/*Graph */}
          <div className="pt-6">
            <ResponsiveContainer width="100%" height={50}>
              <AreaChart data={data2}>
                <defs>
                  <linearGradient
                    id="gradientColor2"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="10%"
                      style={{ stopColor: "#C20A0A", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#FFFFFF", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <XAxis dataKey="none" hide={true} />
                <YAxis hide={true} />
                <Tooltip />
                <Area
                  type=""
                  dataKey="uv"
                  stroke="#C20A0A"
                  strokeWidth={2}
                  fill="url(#gradientColor2)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="  bg-white w-full p-4 rounded-md border-neutral-300 border dark:text-white dark:bg-[#05070A]  dark:border-neutral-800">
          <h1 className="font-medium">Event count</h1>
          <div className="flex justify-between items-center mt-3">
            <p className="text-2xl font-semibold">200K</p>
            <p className="bg-gray-50 h-5 text-gray-800 border border-gray-300 rounded-xl px-3 font-bold text-xs dark:bg-gray-800/15 dark:text-gray-400 dark:border-gray-900">
              +5%
            </p>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-300">Last 30 days</p>
          {/* Graph */}
          <div className="pt-6">
            <ResponsiveContainer width="100%" height={50}>
              <AreaChart data={data3}>
                <defs>
                  <linearGradient
                    id="gradientColor3"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="10%"
                      style={{ stopColor: "#606065", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#FFFFFF", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <XAxis dataKey="none" hide={true} />
                <YAxis hide={true} />
                <Tooltip />
                <Area
                  type=""
                  dataKey="uv"
                  stroke="#606065"
                  strokeWidth={2}
                  fill="url(#gradientColor3)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#F5F6FA] w-full  p-4  rounded-md border-neutral-300 border dark:text-white dark:bg-[#0B0E14]  dark:border-neutral-800">
          <div>
            <WiStars size={30} />
          </div>
          <h1 className="font-semibold">Explore your data</h1>
          <p className="text-neutral-600 py-2 dark:text-neutral-300">
            Uncover performance and visitor insights with our data wizardry.
          </p>
          <div className="bg-black hover:bg-neutral-800 text-white flex justify-around  items-center w-32 rounded-md h-9 text-sm font-medium px-2 dark:text-black dark:bg-neutral-100">
            <button>Get insights </button>
            <FaAngleRight className="pt-1 size-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewTop;
