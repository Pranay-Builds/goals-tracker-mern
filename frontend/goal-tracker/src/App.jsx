import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App