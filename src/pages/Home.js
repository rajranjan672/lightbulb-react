import React from 'react'
import Landing from '../components/Landing'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Community from '../components/Community'
import Explore from '../components/Explore'
import Help from '../components/Help'
import Profile from '../components/Profile'
import NavBar from '../components/NavBar'
import Product from '../components/product'
import Upload from '../components/Upload'

const Home = () => {
  return (
<BrowserRouter>
    <div>

      <NavBar />
</div>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/community" element={<Community />} />
        <Route path="/product" element={<Product />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/help" element={<Help />} />
        <Route path="/upload" element={<Upload />} />


        
        
      </Routes>

    </BrowserRouter> 
  )
}

export default Home
