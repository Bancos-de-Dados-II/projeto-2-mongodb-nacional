import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contato from "../pages/Contato"
import PaginaMapa from "../pages/Mapa";

//rotas para paginação entre telas
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/login" element={""} />
        <Route path="/cadastro" element={""} />
        <Route path="/servicos" element={<PaginaMapa />} />
      </Routes>
    </Router>
  );
}
