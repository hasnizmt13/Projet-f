import '../../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faExclamationCircle, faFileAlt, faFileImport, faUser, faUserCog } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
const Droite = ({ serviceinfo, Userinfo }) => {
    /*const [more, setmore] = useState(false);
    var x = "plus";
    if (more) {
        x = "moin"
    }
    else {
        x = "plus"
    }*/
    const y = JSON.stringify(Userinfo);
    return (
        <div className="partie-contain">
            <div className="partie-droite">
                <div className="compte">
                    <nav className="nav-bar1" >
                        <ul className="lien" >

                            <li className="elem">
                                <NavLink to={"/User/" + y} className="compte" activeClassName="actif">
                                    <FontAwesomeIcon icon={faUser} className="icon" />
                                    Mon compte
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="lien">

                            <li className="elem">
                                <NavLink to="/profil" className="compte" activeClassName="actif">
                                    <FontAwesomeIcon icon={faUserCog} className="icon" />
                                    Paramètre du compte
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                </div>
                <div>
                    <nav className="nav-bar1">
                        <ul className="lien"  >

                            <li className="elem">
                                <NavLink to={serviceinfo} className="compte" activeClassName="actif">
                                    <FontAwesomeIcon icon={faFileAlt} className="icon" />
                                    Espace de travail
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="lien"  >

                            <li className="elem">
                                <NavLink to='/marche' className="compte" activeClassName="actif">
                                    <FontAwesomeIcon icon={faFileAlt} className="icon" />
                                    Service Marché
                                </NavLink>
                            </li>
                        </ul>  <ul className="lien"  >

                            <li className="elem">
                                <NavLink to='/commande' className="compte" activeClassName="actif">
                                    <FontAwesomeIcon icon={faFileAlt} className="icon" />
                                    Service Commande
                                </NavLink>
                            </li>
                        </ul>  <ul className="lien"  >

                            <li className="elem">
                                <NavLink to='/budget' className="compte" activeClassName="actif">
                                    <FontAwesomeIcon icon={faFileAlt} className="icon" />
                                    Service Budget
                                </NavLink>
                            </li>
                        </ul>  <ul className="lien"  >

                            <li className="elem">
                                <NavLink to='/comptable' className="compte" activeClassName="actif">
                                    <FontAwesomeIcon icon={faFileAlt} className="icon" />
                                    Service Comptabilité
                                </NavLink>
                            </li>
                        </ul>

                    </nav>
                    <nav className="nav-bar2">
                        <ul className="lien">

                            <li className="elem">
                                <NavLink to="/En-savoir-plus" className="compte" activeClassName="actif">
                                    <FontAwesomeIcon icon={faExclamationCircle} className="icon" />
                                    A propos
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    );

};
export default Droite;