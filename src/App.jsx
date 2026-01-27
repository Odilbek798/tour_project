import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import AfricaPage from "./pages/AfricaPage";
import AsiaPage from "./pages/AsiaPage";
import EuropePage from "./pages/Europe";

function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path="/africa" element={<AfricaPage />} />
      <Route path="/asia" element={<AsiaPage />} />
      <Route path="/europe" element={<EuropePage />} />

      </Routes>
    </div>
  )
}

export default App











 