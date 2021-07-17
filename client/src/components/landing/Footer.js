import logoimg from "../../images/lo.svg"
import '../../index.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <nav className="nav">
                    <div className="logo-container">
                        <a href="/">
                            <img src={logoimg} height="60" width="60" className="lg" />
                        </a>
                        <p>
                            Ecole Nationale Supérieure<br />
                            d’Informatique (ESI), Alger Oued Smar, 16309
                        </p>
                    </div>
                    <dl className="navigate">
                        <dt> Explorer </dt>
                        <dd>
                            <a href="">Comment ça marche </a>
                        </dd>
                        <dd>
                            <a href="">Aide en ligne </a>
                        </dd>
                        <dd>
                            <a href="">Accessibilité </a>
                        </dd>
                    </dl>
                    <dl className="contact">
                        <dt> Contactez nous </dt>
                        <dd>
                            contact@esi.dz
                        </dd>
                        <dd>
                            +213 (0) 23 93 91 32
                        </dd>
                    </dl>
                    <dl className="privacy">
                        <dt> Privacy </dt>
                        <dd>
                            <a href="">Politique de confidentialité </a>
                        </dd>
                        <dd>
                            <a href="">Légalité </a>
                        </dd>
                    </dl>
                </nav>
            </div>
            <div className="bot">
                <p>
                    Copyright © 2021
                </p>
            </div>
        </div>
    )
}

export default Footer
