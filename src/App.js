import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignUp from './Pages/Auth/SignUp';
import ResetPassword from './Pages/Auth/ResetPassword';
import SignIn from './Pages/Auth/SignIn';
import Dashboard from './Pages/Dashboard.js';
import Assets from './Pages/Assets.js';
import Catalog from './Pages/Catalog.js';
import Employees from './Pages/Employees.js';
import HelpCenter from './Pages/HelpCenter.js';
import Integrations from './Pages/Integrations.js';
import Locations from './Pages/Locations.js';
import Orders from './Pages/Orders.js';
import Settings from './Pages/Settings.js';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/forgotpassword' element={<ResetPassword />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/assets' element={<Assets/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/employees' element={<Employees/>}/>
        <Route path='/helpcenter' element={<HelpCenter/>}/>
        <Route path='/integrations' element={<Integrations/>}/>
        <Route path='/locations' element={<Locations/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
    </Router>
    
  )
}
export default App