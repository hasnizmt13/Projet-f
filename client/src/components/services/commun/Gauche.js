import "../../Parametre/Deco.css"
import { NavLink } from 'react-router-dom'
const Gauche = ({serviceInfo}) => {

    return (
        <div class="MenuPara">
            <header>Mes Paramètres</header>
            <NavLink to="../profil" className="menulink" activeClassName="Active"><span>Compte</span>  </NavLink>
            <NavLink to="../securite" className="menulink" activeClassName="Active"><span>Sécurité</span>  </NavLink>
            <NavLink to="../settings" className="menulink" activeClassName="Active"><span>Notifications</span>  </NavLink>
            { 
             serviceInfo == "ordonnateur" &&
                <NavLink to="../duree" className="menulink" activeClassName="Active"><span>Duree de dossier</span>  </NavLink>
            }
        </div>

    )
}

export default Gauche;