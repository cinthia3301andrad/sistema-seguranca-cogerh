
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard';
import { Relatorio } from './pages/Relatorio';

import { GlobalStyle } from "./styles/global";

function App() {


  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/dashboard"  element={<Dashboard />}/>
            <Route path="/ocorrencias"  element={<Dashboard />}/>
            <Route path="/relatorio"  element={<Relatorio />}/>

            <Route path="/login"  />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
