import "../services/commun/Style_sheet.css"
import logoimg from "../../images/lo.svg"
import mk from "../../images/mk.jpg"
import cm from "../../images/cm.jpg"
import ms from "../../images/ms.jpg"
import sd from "../../images/sdd.jpg"
import ml from "../../images/ml.jpg"
import hz from "../../images/hasni.jpg"

const Contenuensavoir = () => {

    return (
        <div className="about-container">
            <div className="contain">
                <div className="propos">
                    <h2>A propos</h2>
                    <div className="sectiontitle">
                        <img src={logoimg} alt="ESI Merket Monitoring" />
                        <span class="line" ></span>
                        <div className="sectionPar">

                            <h2 >Esi market monitoring ?</h2>

                            <p >
                                ESI market monitoring est une application web que nous avons créée en 2021 en tant qu'étudiants de l'Ecole Nationale d'Informatique d'Alger
                                afin d'apporter une nouvelle solution simple, facile, flexible et visuelle pour aider les services financiers de notre école à gérer leurs fichiers
                                et organiser leur travail efficacement et facilement.
                            </p>
                        </div>

                    </div>
                    <div className="section">
                        <div className="one-ligne-item">
                            <span class="small_line" ></span>
                            <h3 >Notre histoire</h3>
                        </div>
                        <div className="sectionPar">

                            <p >
                                Comme chaque année, au second semestre, notre école (ESI d’Alger) démarre les projets de la deuxième année du cycle préparatoire et tous les étudiants commencent à
                                former des équipes pour travailler ensemble, quant à notre équipe, nous venions de groupes différents et donc nous ne nous connaissions pas, malgré c'était un peu difficile
                                de communiquer au début, à la fin du projet, nous sommes devenus de bons camarades.
                                <br />
                                <br />
                                Notre sujet de projet était de développer une application web pour suivre les marchés de notre école et nous avons passé beaucoup de temps et travaillé très dur pour la
                                créer.
                                <br />
                                <br />
                                Le développement web était un nouveau concept pour nous et bien évidemment nous avons rencontré beaucoup d'obstacles en travaillant sur ce logiciel, surtout au
                                niveau technique, mais à la fin, c’etait vraiment une belle expérience , nous avons appris beaucoup de nouvelles choses et nous sommes si heureux.
                            </p>

                        </div>

                    </div>
                    <div className="section">
                        <div className="one-ligne-item">
                            <span class="small_line" ></span>

                            <h3 >Notre équipe</h3>

                        </div>
                        <div className="sectionPar">
                            <ul className="dev-list">
                                <li className="dev-name">
                                    <div>
                                        <img class="profile-img" src={mk} />
                                    </div>
                                    <div className="info">
                                        <h4 >Meriem khedir </h4>
                                        étudiante 2CPI G09
                                        <br />
                                        Role : Organisation et Frontend
                                    </div>


                                </li>
                                <li className="dev-name">
                                    <div>
                                        <img class="profile-img" src={ml} />
                                    </div>
                                    <div className="info">
                                        <h4 >Mourad Larbi Messaoudi</h4>

                                        Etudiant 2CPI G03
                                        <br />
                                        Role : Frontend ET Backend
                                    </div>




                                </li>

                            </ul>
                            <ul className="dev-list">
                                <li className="dev-name">
                                    <div>
                                        <img class="profile-img" src={ms} />
                                    </div>
                                    <div className="info">
                                        <h4 >Meriem Soltani</h4>

                                        Etudiante 2CPI G09
                                        <br />
                                        Role : Design et Frontend
                                    </div>




                                </li>
                                <li className="dev-name">
                                    <div>
                                        <img class="profile-img" src={sd} />
                                    </div>
                                    <div className="info">
                                        <h4 >Saad Dahamni</h4>

                                        Etudiant 2CPI G07
                                        <br />
                                        Role : Backend et BDD

                                    </div>




                                </li>
                            </ul>
                            <ul className="dev-list">
                                <li className="dev-name">
                                    <div>
                                        <img class="profile-img" src={cm} />
                                    </div>
                                    <div className="info">
                                        <h4 >Cylia Messar</h4>

                                        Etudiante 2CPI G09<br />
                                        Role : Design et Frontend
                                    </div>





                                </li>

                                <li className="dev-name">
                                    <div>
                                        <img class="profile-img" src={hz} />
                                    </div>
                                    <div className="info">
                                        <h4 >Hasni Zoumata</h4>

                                        Etudiant 2CPI G04 <br />
                                        Role :Backend et BDD

                                    </div>




                                </li>

                            </ul>

                        </div>

                    </div>
                    <div className="section">
                        <div className="one-ligne-item">
                            <span class="small_line" ></span>

                            <h3 >Nos services</h3>


                        </div>
                        <div className="sectionPar">
                            <ul className="final-list">

                                <li>Notre application fournit aux utilisateurs un espace de travail spécifique en fonction de leur service (marché/commandes/budget/compbtable).</li>

                                <li>Dans L'espace de travail chaque  utilisateur peut : creer des nouveaux dossiers (services : marché & commandes), les traiter et les transferer.</li>

                                <li>Le traitement des dossiers se faire à travers des formulaires qui minimisent la saisie (gestion automatique des dates)</li>

                                <li>Dans la page des statistiques, les utilisateurs peuvent trouver toutes les statistiques et les infromations liées aux déférentes opérations effectuées dans les quatre services. </li>

                                <li>La page d'archive permet de revenir aux dossiers en cas de besoin.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contenuensavoir;