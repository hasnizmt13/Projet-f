import "../services/commun//Style_sheet.css"

const TPage = () => {

    return (
        <div className="partie-milieu">
            <h2>  Services </h2>
            <div class="Aide">
                <div className="paragraph">
                    <h4> C'est quoi service pour SM ESI? </h4>
                    <p> Pour l'application web SM ESI, un service est un espace partagé, ou tout les utilisateur ont </p>
                    <p> droits aux meme fonctionnalités.    </p>
                    <p> Il y a principalement quatre services, et l'utilisateur aprés sa connextion va etre rediriger </p>
                    <p> automatiquemnt vers l'un des service.</p>

                </div>
                <div className="paragraph">
                    <h4> Service marchés : </h4>
                    <p>Parmi les fonctionnalités qui sont propre à lui c'est la création d'un nouveau</p>
                    <p>dossier, ce qui peut ne pas etre effectuer sur les autres services.</p>
                </div>
                <div className="paragraph">
                    <h4> Service commandes : </h4>
                    <p>Pour commande c'est presque la meme chose que marchés, mais avec quelques défferences,</p>
                    <p> au niveau de formulaire qui est propre à chaque service.</p>
                </div>


                <div className="paragraph">
                    <h4> Service budget : </h4>
                    <p>Pour budget, on a un formulaire aussi personnalisé qui répond à l'enchainement</p>
                    <p>d'un dossier passant par les deux services précedents ou par commande seulement.</p>
                    <p>Dans ce service ,l'utilisateur n'a pas le droit de créer un nouveau dossier.</p>
                </div>
                <div className="paragraph">
                    <h4> Service agence comptable : </h4>
                    <p>l'utilisateur n'a pas le droit de créer un nouveau dossier!</p>
                    <p>Sinon pour les fonctionnalités communes(entre les quatre services),</p>
                    <p>on a l'annulation d'un dossier, et l'insertion des fichiers pdf ou autre à un dossier.</p>
                </div>
            </div>

        </div>
    )
};
export default TPage;