import "./styles.css"
import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export default function ButtonBack({content, href}) {
    return (
        <Link to={href} className="link-button-back">
            <button className={`button-container-back`}>
                <p>{content}</p>
                <img src="/img/arrow-back.png" alt="ir" />
            </button>
        </Link>
    );
}