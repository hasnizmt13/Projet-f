import "../services/commun//Style_sheet.css"

const EPage = () => {

    return (
        <div className="partie-milieu">
            <h2> Formulaires  </h2>
            <div class="Aide">
                <div className="paragraph">
                    <h3> Formulaire de connexion</h3>
                    <p>c'est un formulaire ou l'utilisateur introduit son email et mot de passe pour se connecter à son service </p>

                </div>
                <div className="paragraph">
                    <h3> Formulaire des dossiers</h3>
                    <p>A travers le formulaire l'utilisateur introduit le contenu d'un nouveau dossier qu'il crée  dans son service .</p>
                    <h4> Formulaire service marchés : </h4>

                    <p>le formulaire sera créé dans le service marché puis tramsmis vers le service commande pour compléter le traitement de dossier correspondant .</p>
                    <p>Comme il peut etre annulé ou sauvegardé dans ce service sans le transmettre au autres services. </p>
                </div>
                <div className="paragraph">
                    <h4> Formulaire service commandes : </h4>
                    <p>le formulaire sera créé dans le service commande ou tramsmis de service marché vers le service commande.
                    </p> <p> l'utilisateur va remplire ce formulaire puis le transmettre  vers

                        le service budget pour compléter le traitement de dossier correspondant. </p>
                    <p>Comme il peut etre annulé ou sauvegardé dans ce service sans le transmettre au autres services. </p>
                </div>
                <div className="paragraph">
                    <h4> Formulaire service budget : </h4>
                    <p>le formulaire dans le service budget sera remplis pour compléter le traitement
                        des dossiers déjà traités dans les 2 services marché et commande ou bien commande seulement.
                    </p> <p> l'utilisateur dans le service budget va remplire  ce formulaire puis le transmettre  vers

                        le service comptabilité pour compléter le traitement de dossier correspondant. </p>
                    <p>Comme il peut etre annulé ou sauvegardé dans ce service sans le transmettre au autres services. </p>

                </div>
                <div className="paragraph">

                    <h4> Formulaire service agence comptable : </h4>
                    <p>le formulaire dans le service comptabilité sera remplis pour compléter le traitement
                        des dossiers déjà traités dans les services marché , commande et budget.
                    </p> <p>l'utilisateur dans le service comptabilité va remplire  ce formulaire puis


                        le cloturer (traitement de dossier correspondant est complet 100%), sauvegarder (completer son traitement plustard)
                        ou l'annuler(ne pas pouvoir compléter le traitement plus tard et l'enregistrer tel qu'il est ). </p>
                </div>

            </div>

        </div>
    )
};
export default EPage;