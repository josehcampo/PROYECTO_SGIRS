import Header from './componentes/Header';
import HomeScreen from './screens/HomeScreen';
import CrearUsuario from './screens/CrearUsuario';
import RegistrarPreguntas from './screens/RegistrarPreguntas';
import RegistroConsulta from './screens/RegistroConsulta';
import ComercialIndicadores from './screens/ComercialIndicadores';
import OrganicosIndicadores from './screens/OrganicosIndicadores';
import IEIndicadores from './screens/IEIndicadores';
import EntidadesPublicasIndicadores from './screens/EntidadesPublicasIndicadores';
import EventosMasivosIndicadores from './screens/EventosMasivosIndicadores';
import DMIndicadores from './screens/DMIndicadores';

import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/CrearUsuario" element={<CrearUsuario />} />
        <Route path="/HomeScreen" element={<HomeScreen />} />
        <Route path="/RegistrarPreguntas" element={<RegistrarPreguntas />} />
        <Route path="/RegistroConsulta" element={<RegistroConsulta />} />

        <Route
          path="/ComercialIndicadores"
          element={<ComercialIndicadores />}
        />
        <Route
          path="/OrganicosIndicadores"
          element={<OrganicosIndicadores />}
        />
        <Route path="/IEIndicadores" element={<IEIndicadores />} />
        <Route
          path="/EntidadesPublicasIndicadores"
          element={<EntidadesPublicasIndicadores />}
        />
        <Route
          path="/EventosMasivosIndicadores"
          element={<EventosMasivosIndicadores />}
        />
        <Route path="/DMIndicadores" element={<DMIndicadores />} />
      </Routes>
    </Router>
  );
}

export default App;
