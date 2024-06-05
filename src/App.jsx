import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageInd from './page/HomePage'
import React from 'react'
import HomePage from './page/HomePage'
import Proyectos from './components/Proyects/Proyectos'
import SobreMi from './components/SobreMi/SobreMi'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/proyects" element={<Proyectos></Proyectos>} />
        <Route path="/sobreMi" element={<SobreMi></SobreMi>} />
        <Route path="/contactame" element={<Contact></Contact>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App