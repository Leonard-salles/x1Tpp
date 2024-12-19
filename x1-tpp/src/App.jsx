import { useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router";

import './App.css'

//pages
import Home from './pages/home/Home';
import Table from './pages/table/table';
import Pontuacao from './pages/pontuação/Pontuacao';

//components
import NavBar from './components/nav-bar/navBar';
import Footer from './components/footer/Footer';


function App() {

  return (
    <BrowserRouter>
      <div className='container_app'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/tabela-jogos" element={<Table />} />
        </Routes>
        <Routes>
          <Route path="/tabela" element={<Pontuacao />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
