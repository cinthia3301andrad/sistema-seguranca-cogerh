
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard';
import { Ocorrencias } from './pages/Ocorrencias';
import { Relatorio } from './pages/Relatorio';

import { GlobalStyle } from "./styles/global";

function App() {

  const ocorrencias = [
      {
        infos: {
            local:  "Canal 2",
            data: new Date(),
            distancia: 10,
            altura: 172,
            perigo: 78
        },
        status: "ultra",
    }, 
    {
        infos: {
            local:  "Portão Principal",
            data: new Date(),
        },
        status: "pir",
    },
    {
        infos: {
            local: "Atrás da Casa",
            data: new Date(),
            distancia: 30,
            altura: 160,
            perigo: 83
        },
        status: "ultra",
    },
    {
        infos: {
            local:  "Portão Principal",
            data: new Date(),
        },
        status: "pir",
    },
    {
        infos: {
            local:  "Canal Principal",
            data: new Date(),
        },
        status: "pir",
    },
  ];
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard ocorrencias={ocorrencias}/>}/>
            <Route path="/dashboard"  element={<Dashboard ocorrencias={ocorrencias}/>}/>
       
            <Route path="/relatorio"  element={<Relatorio />}/>
            <Route path="/ocorrencias"  element={<Ocorrencias ocorrencias={ocorrencias}/>}/>
            <Route path="/login"  />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
