import {Routes, Route} from 'react-router-dom'

import Header from "./components/Header";

import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import Pokemones from './pages/Pokemones'
import NotFound from './pages/NotFound'

export default function App() {
  return(
    <>
      <Header/>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Pokemones/>} path='/pokemones'/>
          <Route element={<Pokemon/>} path='/pokemones/:name'/>
          <Route element={<NotFound/>} path='*'/>
        </Routes>
    </>
  )
}