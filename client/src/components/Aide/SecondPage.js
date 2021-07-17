import "../services/commun//Style_sheet.css"

const SecondPage = () => {

    return (
        <div className="partie-milieu">
            <h2> Première utilisation </h2>
            <div class="Aide">
                <div className="paragraph">
                    <h4> C'est quoi SM ESI? </h4>
                    <p> SM ESI est un espace partagé entre les employés de l'ESI, plus précisemment les employés </p>
                    <p> de service financier.</p>
                    <p> Cet espace est dévisé en  quatre sous espace qu'on appele services, chaqu'un réalise un </p>
                    <p> travail précis à travars le remplissage </p>
                    <p> des formulaires liés à des dossiers qui passent par un ordre fixe dans tous les services.</p>
                </div>
                <div className="paragraph">
                    <h4> Comment se connecter? </h4>
                    <p> La première utilisation, nécessite une connextion via un mail et mot de passe donnée par</p>
                    <p> les organisateurs de l'application (vous puvez changer le mot de passe plutard).</p>
                    <p> L'utilisateur n'a qu'à aller dans la page d'acceuil, cliquer sur le boton de connextion, </p>
                    <p> ainsi il va remplir le formulaire de connextion.</p>

                </div>
                <div className="paragraph">
                    <h4> Comment se déconnecter?</h4>
                    <p> Si l'utilisateur ne travail pas sur une machine personnelle, il sera obligé de  </p>
                    <p> se déconnecter de son compte, pour cela il n'a qu'à aller à son profil, </p>
                    <p> cliquez sur le triangle dans l'entete de la page , ensuite choisir deconnecter.</p>
                    <p>comme indiqué sur l'image ci dessous :</p>
                </div>
            </div>
        </div>
    )
};
export default SecondPage;
