import "./styles.css"
import { Link } from "react-router-dom";

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
                    <Link to={"/"}>Contato</Link>
                </li>
            </ul>
        </nav>
    );
}