import "../services/commun//Style_sheet.css"

const FPage = () => {

    return (
        <div className="partie-milieu">

            <h2> Parametre et compte  </h2>
            <div class="Aide">
                <div className="paragraph">
                    <h4> Compte :</h4>
                    <p>Si un utilisateur veut changer son nom, prénom, adresse,il n'a que'aller dans paramètres chosir compte dans le menu pour modifiera ses informations personnelles.</p>
                    <p>  La demmande de la suppression d'un compte se fait aussi ici, mais ça necessite une Autorisation et ça sera l'administrateur qui va faire la suppression de son compte , un email lui sera envoyé après la suppression.</p>
                </div>
                <div className="paragraph">
                    <h4> Sécurité :</h4>
                    <p> C'est pour le changement d'un mot de passe. (ça nécessite la saisie de l'ancien mot de passe).</p>
                </div>
                <div className="paragraph">
                    <h4> Notifications :</h4>
                    <p>  On a déjà parler de ça dans notificatuons en haut, c'est que l'utilisateur va choisir les notifications. qu'il peut recevoir par mail.</p>
                </div>
                <div className="paragraph">

                    <h4> Autorisations :</h4>
                    <p> C'est un espace propre à l'administrateur, il peut dans cette espace consulter les demanades de suppression de compte, et les autoriser ou bien les refusrer.</p>
                </div>

                <div className="paragraph">
                    <h4> Administrateur : </h4>
                    <p> C'est lui qui créer les comptes des utilisateurs, et reçoie les demandes d'autorisation pour la suppression d'un compte.</p>
                </div>
                <div className="paragraph">

                    <h4> Consultateur :</h4>
                    <p> C'est un utilisateur qui peut consulter les dossiers dans son service mais ne peut pas remplire les formulaires .</p>
                </div>
            </div>

        </div>
    )
};
export default FPage;