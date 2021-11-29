
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import { OcorrenciasContextProvider } from './context/ocorrenciasContext';
import { Dashboard } from './pages/Dashboard';
import { Ocorrencias } from './pages/Ocorrencias';
import { Relatorio } from './pages/Relatorio';

import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from "./styles/global";

function App() {

 
  return (
      <>
    <GlobalStyle />
    <OcorrenciasContextProvider>
     
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/dashboard"  element={<Dashboard/>}/>
       
            <Route path="/relatorio"  element={<Relatorio />}/>
            <Route path="/ocorrencias"  element={<Ocorrencias />}/>
            <Route path="/login"  />
          </Routes>
      </BrowserRouter>
    </OcorrenciasContextProvider>
    </>
  );
}

export default App;
