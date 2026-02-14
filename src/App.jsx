import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AfricaPage from "./pages/AfricaPage";
import Rec from './pages/Rec';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rec' element={<Rec/>}/>
         <Route path="/africa" element={<AfricaPage />} />
    

      </Routes>
    </div>
  )
}

export default App













 