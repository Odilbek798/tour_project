import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AfricaPage from "./pages/AfricaPage";
import AsiaPage from "./pages/AsiaPage";
import EuropePage from "./pages/Europe";
import Rec from './pages/Rec';
import Tickets from './pages/Tickets';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rec' element={<Rec/>}/>
        <Route path='/tickets' element={<Tickets/>}/>
         <Route path="/africa" element={<AfricaPage />} />
      <Route path="/asia" element={<AsiaPage />} />
      <Route path="/europe" element={<EuropePage />} />

      </Routes>
    </div>
  )
}

export default App;