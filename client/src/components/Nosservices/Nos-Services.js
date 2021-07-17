import TPage from "../Aide/TPage"
import Footer from "../services/commun/Footer"
import Header from "../landing/Header"
const Services = () => {
    return (

        <div className="marche" >
            <Header />
            <div className="noyeau-marche non-connecte">
                <div className="empty">

                </div>
                <TPage />
            </div>
            <Footer />
        </div>
    )
}
export default Services;