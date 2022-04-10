import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contato from "./components/pages/Contato";
import Sobre from "./components/pages/Sobre";
import NovoProjeto from "./components/pages/NovoProjeto";

import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
        <li>Sobre</li>
        <li>Novo Projeto</li>
      </ul>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/novo-projeto" element={<NovoProjeto />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
