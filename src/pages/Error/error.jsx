
import "../../assets/styles/page.css"
import {Link} from "react-router-dom";
export default function NotFound() {
    return (
        <div className="error-format">
            <h2>404</h2>
            <p>La page que vous cherchez n&apos;existe pas ! (pas encore)</p>
            <Link to="/">Retour à l&apos;accueil</Link>
        </div>
    )
}