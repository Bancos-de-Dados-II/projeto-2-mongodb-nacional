import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

//rotas para paginação entre telas
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={""} />
        <Route path="/login" element={""} />
        <Route path="/cadastro" element={""} />
      </Routes>
    </Router>
  );
}