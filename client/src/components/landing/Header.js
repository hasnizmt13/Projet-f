import '../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify as fa } from '@fortawesome/free-solid-svg-icons'
import logoimg from "../../images/lo.svg"
import { NavLink, Link } from 'react-router-dom'
const Header = () => {
    return (
        <header className="header">
            <nav className="nav-container">
                <div className="logo-container">
                    <a href="/">
                        <img src={logoimg} height="40" className="lg" />
                    </a>
                </div>
                <ul className="navbar">

                    <li className="nav-el">
                        <NavLink exact to="/Nos-services" className="hero nav-btn">Nos services</NavLink>
                    </li>
                    <li className="nav-el">
                        <NavLink exact to="/Comment-ça-marche" className="about nav-btn">Comment ça marche</NavLink>
                    </li>
                    <li className="nav-el">
                        <NavLink exact to="/AideH" className="contact nav-btn">Aide</NavLink>
                    </li>
                    <li className="nav-el log">
                        <button >
                            <NavLink exact to="/login" className="login nav-btn">
                                Se connecter
                            </NavLink>
                        </button>

                    </li>
                    <li className="check">
                        <FontAwesomeIcon icon={fa} className="fa" />
                    </li>
                </ul>
            </nav>
        </header>

    )
}
export default Header;