import React from 'react'
import "../../services/commun/Style_sheet.css"
import { Link } from "react-router-dom"
import { useRef, useEffect } from 'react'
import { faEllipsisV, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
let useClickOutside = (handler1) => {
    let menutri = useRef();
    useEffect(() => {
        let handler = (event) => {
            if (!menutri.current.contains(event.target)) {
                handler1();
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return menutri;
}
const DossierOrd = ({ Dossier }) => {
    const [style, setStyle] = React.useState({});
    const [showm, setshowm] = React.useState(false);
    const [sup, setsup] = React.useState(false);
    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${Dossier.avancement}%`
        }

        setStyle(newStyle);
    }, 200);

    var path = Dossier.path + Dossier.num + '1'
    let menurefdos = useClickOutside(() => {
        setshowm(false);
    }
    )
    return (
        <div className="marche-dossier">
            <span className="num-dossier date-dossier">
                <Link to={path}>Dossier n°{Dossier.num} </Link>
            </span>
            <span className="date-dossier">{Dossier.datelimite} </span>
            <span className="date-dossier">{Dossier.datecreation}</span>
            <span className="date-dossier">{Dossier.service}</span>

            <span className="date-dossier">
                <div className="progress">
                    <div className="progress-done " style={style}>
                        {Dossier.avancement}%
                    </div>
                </div>
            </span>
            <span className="date-dossier ">
                <a className="form" href={path}>modifier</a>
                <span className="iconmenu" onClick={() => setshowm(showm => !showm)} ><FontAwesomeIcon icon={faEllipsisV} className="icon" /></span>
            </span>

            <div ref={menurefdos}>
                {showm && (<div className="sup-menu">
                    <div className="menu">
                        <span className="elem" onClick={() => setsup(sup => !sup)} >supprimer</span>
                        <span className="elem">télécharger</span>
                    </div>
                </div>)}
            </div>
            {sup && (<div className="supprimer" >
                <div className="fermer" onClick={() => setsup(sup => !sup)}>
                    <FontAwesomeIcon icon={faTimes} className="icon" />
                </div>
                <div className="verif">
                    <div className="msg">
                        <p>Voulez vous vraiment supprimer ce compte </p>
                    </div>
                    <div className="annuler">
                        <p className="sup">Supprimer</p>
                        <p className="ann" onClick={() => setsup(sup => !sup)}>annuler</p>
                    </div>
                </div>

            </div>)}

        </div>

    )
}

export default DossierOrd
