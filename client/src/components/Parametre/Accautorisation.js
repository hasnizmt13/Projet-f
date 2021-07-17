import "./Deco.css"
import Retour from "../services/commun/Retour"
import Gauche from "../services/commun/Gauche"
const Accautorisation = ({ serviceinfo }) => {

    return (

        <div>


            <div class="Profil-container">
                <Gauche />
                <div class="ProPara">

                    <div class="TITRE">
                        <h1>Autorisations</h1>
                        <p>Autorisations des suppressions des compte</p>

                    </div>
                </div>

            </div>
            <Retour serviceinfo={serviceinfo} />
        </div>
    )
}

export default Accautorisation;