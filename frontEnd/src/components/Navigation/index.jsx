import "./styles.css"
import { Link } from "react-router-dom";
import Contato from "../../pages/Contato";
import PaginaMapa from "../../pages/Mapa";


export default function Navigation() {
    return (
        <nav className="navigation-container">
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/"}>Sobre nós</Link>
                </li>
                <li>
                    <Link to={"/servicos"}>Serviços</Link>
                </li>
                <li>
                    <Link to="/Contato">Contato</Link>
                </li>
            </ul>
        </nav>
    );
}