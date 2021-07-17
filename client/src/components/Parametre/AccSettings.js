import "./Deco.css"
import Retour from "../services/commun/Retour"
import Gauche from "../services/commun/Gauche"
const AccSettings = ({ serviceinfo }) => {

    return (
        <div>
            <div className="Profil-container">
                <Gauche serviceInfo={serviceinfo}/>
                <div class="ProPara">
                    <div class="TITRE">
                        <h1>Notifications</h1>
                        <p>Notifications par mail</p>
                    </div>
                    <div class="Gerer">
                        <div class="UserName">
                            <h2>Gerer les notifications</h2>
                            <p>Couchez sur les points à recevoir par mail</p>
                        </div>
                        <div className="notifinput">
                            <input type="checkbox" value="Recevoir notifications relative aux délais" /> <span>Notifications relative aux délais</span><br />
                            <input type="checkbox" value="Recevoir notifications relative aux accéptation" /> <span>Notifications relative aux accéptation</span><br />
                            <input type="checkbox" value="Recevoir notifications relative aux refus" /> <span>Notifications relative aux refus</span><br />
                            <input type="checkbox" value="Recevoir notifications relative aux transferts des dossiers" /> <span>Notifications relative aux transferts des dossiers</span><br />
                            <input type="checkbox" value="Recevoir notifications relative aux succés" /><span>Notifications relative aux succés</span><br />

                        </div>

                    </div>

                    <div class="SauvGerer">
                        <button>Sauvegarder</button>
                    </div>
                </div>

            </div>
            <Retour serviceinfo={serviceinfo} />
        </div>
    )
}

export default AccSettings
 /*

*/