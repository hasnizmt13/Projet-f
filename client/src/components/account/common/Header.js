import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify as fa } from '@fortawesome/free-solid-svg-icons'
import logoimg from "../../../images/lo.svg"
const Header = () => {
    return (
        <header className="header">
            <nav className="nav-container">
                <div className="logo-container">
                    <a href="/">
                        <img src={logoimg} height="40" className="lg"/>
                    </a>
                </div>
                <ul className="navbar">
                    
                    <li className="nav-el">
                        <a href="../marche" className="hero nav-btn">Accueil</a>
                    </li>
                    <li className="nav-el">
                        <a href="#" className="about nav-btn">Archives</a>
                    </li>
                    <li className="nav-el">
                        <a href="#" className="contact nav-btn">Parametres</a>
                    </li>
                    <li className="nav-el log">
                        <a href="" className="login nav-btn">Se connecter</a>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
}
export default Header;
