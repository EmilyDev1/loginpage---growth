import React from 'react'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'

const Catalog = () => {
  return (
    <div>
        
    <div className='flex h-screen overflow-hidden'>
      <Sidebar/>
      <div className='w-full'>
      <Header/>
      <div className='h-screen mb-1 m-1 bg-blue-900 bg-rounded items-center px-3 rounded-md '>
      <h1 className="text-xl text-white font-bold">Catalog</h1>
      </div>
      
     </div>
    </div>
    
    </div>
  )
}

export default Catalog
