import {Link} from "react-router-dom";
import "../../assets/styles/home.css"
function Header() {
    return (
    <header>
        <nav className="navbar">
            <h1><a href="/">Portfolio</a></h1>
            <div className="links">
                <Link to="/#contact">Contact</Link>
            </div>
        </nav>
        <svg xmlns="http://www.w3.org/2000/svg" width="90%" height="4" opacity="0.5" viewBox="0 0 511 2" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M511 1.5H0V0.5H511V1.5Z" fill="#C778DD"/>
        </svg>
    </header>
    )
}

export default Header;