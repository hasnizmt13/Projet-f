import Contenuensavoir from './Contenuensavoir'
import Header from "../landing/Header"
import Footer from "../services/commun/Footer"
import logoimg from "../../images/lo.svg"
const SavoirplusH = () => {
    return (

        <div className="marche" >
            <div className="header-àpropos">
                <div className="logo-container">
                    <a href="/">
                        <img src={logoimg} height="40" className="lg" />
                    </a>
                </div>
                <ul className="navbar-propos">
                    <li className="nav-el aide">
                        <a href="/AideH" className="contact nav-btn">Aide</a>
                    </li>
                    <li className="nav-el log">
                        <button >
                            <a href="/login" className="login nav-btn">
                                Se connecter
                            </a>
                        </button>

                    </li></ul>
            </div>
            <div className="noyeau-marche non-connecte">
                <Contenuensavoir />
            </div>
            <Footer />
        </div>
    )
}
export default SavoirplusH;