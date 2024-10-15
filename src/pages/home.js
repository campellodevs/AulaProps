import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa'
import UltimosLancamentos from './componentes/UltimosLancamentos'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

 const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
    overflow-x: hidden;
`
const Home = () => {
  return (
    <AppContainer>
     <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}
 export default Home
