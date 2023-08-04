import {Link} from "react-router-dom";
import "../../assets/styles/home.css"

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer-links">
                    <p>© 2023 Alex Louchet. Tous droits réservés.</p>
                    <Link to="//https://www.linkedin.com/in/alex-louchet/">LinkedIn</Link>
                    <Link to="//https://github.com/Allo3">Github</Link>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
