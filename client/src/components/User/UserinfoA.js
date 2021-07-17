import "../services/commun/Style_sheet.css"
const UserinfoA = ({ id }) => {

    return (
        <div className="partie-milieu">
            <div>
                <div class="ProPara">

                    <div class="TITRE1">
                        <h1>Informations personnelles</h1>
                    </div>

                    <div class="SousTitre">
                        <h2>Informations générales</h2>
                        <p>Certaines de ces informations peuvent être vues par les autres utilisateurs de SM Esi.<a href="/En-Savoir-Plus"> En savoir plus</a></p>
                    </div>

                    <div class="Info">
                        <table class="styled-table">
                            <tr>
                                <td class='TP'>NOM</td>
                                <td>{id[0]}</td>
                            </tr>
                            <tr>
                                <td class='TP'>PRENOM</td>
                                <td>{id[4]}</td>
                            </tr>
                            <tr>
                                <td class='TP'>service</td>
                                <td>{id[2]}</td>
                            </tr>
                            <tr>
                                <td class='TP'>ROLE</td>
                                <td>{id[3]}</td>
                            </tr>
                        </table>
                    </div>

                    <div class="SousTitre">
                        <h2>Coordonnées</h2>
                    </div>
                    <div class="Info">
                        <table class="styled-table">
                            <tr>
                                <td class='TP'>ADRESSE E-MAIL</td>
                                <td>{id[1]}</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="TextePara">
                    <p>Pour modifier vos informations ou vos coordonées, allez à Mes paramètres, ou bien cliquez sur ce botton.</p>
                    <div class="SauvModif ">
                        <a href="/profil"><button> Modifier </button></a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default UserinfoA;