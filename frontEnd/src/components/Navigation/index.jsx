import "./styles.css"
import { Link } from "react-router-dom";
import Contato from "../../pages/Contato";


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
                    <Link to={"/"}>Serviços</Link>
                </li>
                <li>
                    <Link to="/Contato">Contato</Link>
                </li>
            </ul>
        </nav>
    );
}