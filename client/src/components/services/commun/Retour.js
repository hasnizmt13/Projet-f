import "./Style_sheet.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
const Retour = ({ serviceinfo }) => {
    return (
        <div className="Buttom-retour">
            <button>
                <FontAwesomeIcon icon={faLongArrowAltLeft} className="icon" />
                <a href={'../' + serviceinfo}>Espace de travail</a>
            </button>
        </div>
    )
}
export default Retour;