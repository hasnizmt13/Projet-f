import SecondPage from "../Aide/SecondPage"
import Footer from "../services/commun/Footer"
import Header from "../landing/Header"
const Comment = () => {
    return (

        <div className="marche" >
            <Header />
            <div className="noyeau-marche non-connecte">
                <div className="empty">

                </div>
                <SecondPage />
            </div>
            <Footer />
        </div>
    )
}
export default Comment;