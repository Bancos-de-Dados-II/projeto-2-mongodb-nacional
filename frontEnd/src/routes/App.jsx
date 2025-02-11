import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

//rotas para paginação entre telas
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={""} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Register/>} />
      </Routes>
    </Router>
  );
}