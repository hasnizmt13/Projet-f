import "./Deco.css"
import Retour from "../services/commun/Retour"
import useForm from './useForm1'
import Gauche from "../services/commun/Gauche"
import Axios from 'axios'
const AccCompte = ({ serviceinfo }) => {

    const { handleChange, handleSubmit, values } = useForm(
      );

    function sauv(){
        Axios.post('http://localhost:3006/infoprm', {
        nom : values.nom,
        prenom: values.prenom,
        email: values.adr
        })
    }
    return (

        <div>
            <div class="Profil-container">
                <Gauche serviceInfo={serviceinfo} />

                <form onSubmit={handleSubmit} class="ProPara" noValidate>

                    <div class="TITRE">
                        <h1>Compte</h1>
                        <p>Compte Personnel</p>
                    </div>

                    <div class="UserName">
                        <h2>Nom</h2>
                        <p>Saisissez un nouveau nom</p>
                        <div className="notifinput">
                            <input id="Name" type="text"
                            name="nom"
                            value={values.nom}
                            onChange={handleChange} /><br />
                        </div>

                    </div>
                    <div class="UserName">
                        <h2>Prénom</h2>
                        <p>Saisissez un nouveau prénom</p>
                        <div className="notifinput">
                            <input id="Pname" type="text"
                            name="prenom"
                            value={values.prenom}
                            onChange={handleChange} /><br />
                        </div>

                    </div>
                    <div class="UserName">
                        <h2>Adresse mail</h2>
                        <p>Saisissez une nouvelle adresse mail</p>
                        <div className="notifinput">
                            <input id="AMail" type="email"
                            name="adr"
                            value={values.adr}
                            onChange={handleChange} /><br />
                        </div>

                    </div>

                    <div class="SauvModif">
                        <button onClick={sauv}>Sauvegarder</button>
                    </div>
                    <div class="UserName">
                        <h2>Supprimer mon compte</h2>
                        <p>Pour effectuer cette action, il faut demmander d'abord l'autorisation de votre administrateur</p>
                    </div>
                    <div class="DemmanderAuto">
                        <button>Demmander l'autorisation</button>
                    </div>
                </form>

            </div>
            <Retour serviceinfo={serviceinfo} />
        </div>
    )
}

export default AccCompte;