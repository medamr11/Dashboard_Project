import React from 'react'
import {  BarChart, Bar,AreaChart, Area, XAxis, YAxis,  Tooltip,CartesianGrid, ResponsiveContainer } from 'recharts';
import { dataL,data } from '../Data/OverviewBData';

function OverviewBottom() {
  return (
    <div className='flex flex-col lg:flex-row w-full  gap-6 px-6 dark:bg-[#05070A] pt-6 '>
{/* Sessions */}
      <div className="border w-full border-neutral-300 rounded-lg bg-white p-4 dark:bg-[#05070A] dark:border-neutral-800">
          <h1 className='font-medium dark:text-white'>Sessions</h1>
          <div className='flex items-center gap-5 dark:text-white'>
          <p className='font-semibold text-3xl '>13,277</p>
          <p className='bg-green-50 h-5 text-green-800 border border-green-200 rounded-xl px-3 font-bold text-xs my-3'>+35%</p>
          </div>
          <h2 className=' text-neutral-600 mb-4 dark:text-neutral-300 text-sm'>Sessions per day for the last 30 days</h2>
          {/* chart Sessions */}
          <div className='h-80'>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
      <defs>
      <linearGradient id="gradientColor4" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="10%" style={{ stopColor: '#99CCFF', stopOpacity: 1 }} /> 
        <stop offset="90%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} /> 
      </linearGradient>
      <linearGradient id="gradientColor5" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="10%" style={{ stopColor: '#027AF2', stopOpacity: 1 }} /> 
        <stop offset="90%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} /> 
      </linearGradient>
      <linearGradient id="gradientColor6" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="10%" style={{ stopColor: '#0059B3', stopOpacity: 1 }} /> 
        <stop offset="90%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} /> 
      </linearGradient>
    </defs>
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip /><Area  dataKey="amt" stackId="1" stroke="#0059B3" strokeWidth={2} fill="url(#gradientColor6)" />
          <Area  dataKey="pv" stackId="1" stroke="#027AF2" strokeWidth={2} fill="url(#gradientColor5)" />
          <Area  dataKey="uv" stackId="1" stroke="#99CCFF" strokeWidth={2} fill="url(#gradientColor4)"  />
          
        </AreaChart>
      </ResponsiveContainer>
      </div>
      </div>

{/* Page views and download */}

      
      <div className="w-full border border-neutral-300 rounded-lg bg-white p-4 dark:bg-[#05070A] dark:border-neutral-800">
          <h1 className='font-medium dark:text-white '>Page views and download</h1>
          <div className='flex items-center gap-5 dark:text-white'>
          <p className='font-semibold text-3xl'>1.3M</p>
          <p className='bg-red-50 h-5 text-red-800 border border-red-300 rounded-xl px-3 font-bold text-xs'>+35%</p>
          </div>
          <h2 className=' text-neutral-600 mb-4 dark:text-neutral-300 text-sm'>Page views and download for the last 6 months</h2>
          {/* chart Sessions */}
          <div className='h-80 dark:bg-[#05070A]'>
          <ResponsiveContainer width="100%" height="100%" >
        <BarChart className='dark:bg-[#05070A] '
          width={500}
          height={300}
          data={dataL}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className='dark:text-white' />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" stackId="a" fill="#0059B3" />
          <Bar  dataKey="uv" stackId="a" fill="#027AF2" />
          <Bar  radius={[10, 10, 0, 0]} dataKey="amt" stackId="a" fill="#99CCFF" />
        </BarChart>
      </ResponsiveContainer>
          </div>
          </div>
     
    </div>
  )
}

export default OverviewBottom
