import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faCheckDouble, faClosedCaptioning } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import "../services/commun/Style_sheet.css"
const Not = ({ num }) => {
    var path = "/marche-form/" + num
    const x = new Date().toLocaleDateString();
    const y = new Date().getHours() - 1;
    const z = new Date().getMinutes();
    return (
        <div className="notification-container">
            <Link to={path} className="link-not">
                <div className="row">
                    <div className="notif-info">
                        <FontAwesomeIcon icon={faEdit} className="icon" />
                        <div className="txt">Numéro d'un nouveau dossier à traiter :{num}</div>
                    </div>
                    <div className="notif-info">
                        <div className="sub-txt">{x} {y}:{z} </div>
                    </div>
                </div>

            </Link>
        </div>


    )
}

export default Not;

