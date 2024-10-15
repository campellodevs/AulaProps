import Header from './components/Header'
import Pesquisa from './components/Pesquisa'
import UltimosLancamentos from './components/UltimosLancamentos'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Categorias from './pages/categorias'
import Favoritos from './pages/favoritos'
import MinhaEstante from './pages/minhaEstante'

const AppContainer = styled.div`
   width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
  overflow-x: hidden;
`



function App(){
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<Categorias />} />
              <Route path="/favoritos" element={<Favoritos />} />
              <Route path="/minhaestante" element={<MinhaEstante/>} />
          </Routes>
      </Router>
  )
}

export default App
