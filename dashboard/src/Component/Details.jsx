import React from 'react'
import { tableData } from '../Data/TableData'
function Details() {
  return (
    <div className='h-40 w-full '>
        <h1>Details</h1>
    {/* Table */}
    <div className='flex'>
        <table className='border-4 border-red-400'>
            <thead>
                <tr>
                    <th>page Title</th>
                    <th>Status</th>
                    <th>Users</th>
                    <th>Event Count</th>
                    <th>Views per User</th>
                    <th>Average Time</th>
                    <th>Daily Conversions</th>
                </tr>
            </thead>
            <tbody>
    {
        
        tableData.map((item) => {
            return(
                <div key={item.id}>
                    <tr className='flex  items-center'>
                    <td>{item.Title}</td>       
                    <td>{item.Status}</td>      
                    <td>{item.Users}</td>       
                    <td>{item.Count}</td>       
                    <td>{item.Users}</td>       
                    <td>{item.Time}</td>        
                    </tr>
                </div>
            )
        })
    }
    </tbody>
        </table>
    <div>
    {/* Products Tree */}
        <div className='border-4 border-blue-400'>
            <h1>Product tree</h1>

        </div>
    {/*User by countries */}
        <div>

        </div>
    </div>
    </div>
    </div>
  )
}

export default Details
