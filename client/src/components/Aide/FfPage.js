import "../services/commun//Style_sheet.css"

const FfPage = () => {

    return (
        <div className="partie-milieu">
            <h2> Dossiers et notifications </h2>
            <div class="Aide">
                <div className="paragraph">
                    <h3> Dossiers</h3>
                    <p>Le dossier représente une succéssion de quatre formulaires.</p>
                    <p>Les utilisateurs peuvent consulter le formulaire aprés sa clouture dans consultation.</p>
                    <h4> Qui peut créer un nouveau dossier?</h4>
                    <p>Les utilisateurs des services marchés et commandes  peuvent créer un nouveau dossier.</p>
                    <p>L'ordonnateur , le gestionnaire des dossiers peut créer des dossiers dans tous les services . </p>
                    <h4> Qui peut annuler un dossier ?</h4>
                    <p> Un dossier peut etre annulé par son propriétaire ou par l'ordonnateur dans tout les services .</p>
                </div>
                <div className="paragraph">
                    <h3> Espace partagé entre tous les services </h3>
                    <p>c'est la page consulter et statistiques</p>
                    <h4> Consultation :</h4>
                    <p>Pour la consultation des dossiers clouturés et finit.</p>

                    <h4> Statistiques :</h4>
                    <p>  C'est un espace qui infomre l'utilisateur, sur tout le consultateur de nombre de dossier taraiter penadnt une période
                        donnée.</p>
                </div>
                <div className="paragraph">
                    <h3> Notifications </h3>
                    <h4> Reception des notifications : </h4>
                    <p>On a inseré un espace notifications pour chaque utilisateur, il suffit juste de cliquer sur l'icone des notifiications et les notifications les plus récentes vont etres afficher, et dès que l'utilisateur consulte la notification, elle va etre supprimer
                        de l'espace qui s'affiche sous l'icone des notifications.</p>
                    <h4> Notifications par mail : </h4>
                    <p>  Pour les notifications, l'utilisateur peut choisir dans les paramètres, le type de notifications qu'il veut recevoir par mail.</p>
                </div>
            </div>

        </div>
    )
};
export default FfPage;