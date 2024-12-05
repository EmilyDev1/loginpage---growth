import {React, useState} from 'react'; 
import Sidebar from  "../Components/Sidebar.js";
import Header from "../Components/Header.js";




const Dashboard = () => {

  

  return (
    
    <div className='flex h-screen overflow-hidden'>
      <Sidebar/>
      <div className='w-full h-full'>
      <Header/>
      <div className='h-screen mb-1 m-1 bg-blue-900 bg-rounded items-center px-3 rounded-md'>
      <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl text-white font-bold">Dashboard</h1>
            <div className="flex items-center space-x-4">
              
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md">
                Add Asset
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6 text-blue-900">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-l font-bold mb-4">Total Assets</h3>
              <p className="text-xl font-bold">732</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-l font-bold mb-4">In Use</h3>
              <p className="text-xl font-bold">542</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-l font-bold mb-4">Available</h3>
              <p className="text-xl font-bold">190</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-l font-bold mb-4">Maintenance Due</h3>
              <p className="text-xl font-bold">28</p>
            </div>
          </div>

      </div>
      </div>
     
      
    </div>
    </div>
    
  )
}

export default Dashboard

