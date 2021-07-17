import Header from "./Header.js"
import '../../index.css'
import waveimg from "../../images/wave.svg"
import heroimg from "../../images/hero.svg"
import Footer from './Footer.js'
const Hero = () => {
    return (
        <div className="container">
            <Header />
            <img src={waveimg} width="100%" height="auto" className="wave" />
            <div className="monitoring-container">
                <h2 className="slogan">ESI Market Monitoring</h2>
                <p className="text">
                    La gestion des profiles en ligne, c’est une nouvelle
                    méthode de gestion qu’offre ESI Market monitoring pour
                    l’entreprise de l’ESI afin de gérer ses services
                    en toute sécurité et facilité .
                </p>
                <div className="btn-container">
                    <button>
                        <a href="/En-savoir-plusH">
                            En savoir plus
                        </a>
                    </button>
                </div>
            </div>
            <img src={heroimg} height="500" className="hero-img" />
            <div className="desc-container">
                <div className="cont">
                    <h3 className="title"> ESI market Monitoring</h3>
                    <p className="text">
                        Gérer vos marchés et finaliser votre travail en ligne!
                    </p>
                    <div>

                    </div>
                    <div className="btn-container">
                        <button>
                            <a href="/login">
                                Se connecter
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Hero
