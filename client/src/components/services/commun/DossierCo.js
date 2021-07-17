import React from 'react'
import "./Style_sheet.css"
import Axios from 'axios'

import { Link } from "react-router-dom"
const DossierCo = ({ numDoss, done, datelim, service, role }) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 200);

    var path = "/comptable-form/" + numDoss
    if (role == 'modifier'){
        path += 1 
    }
    else{
        path += 0
    }
    const curentdate = new Date().toLocaleDateString();

    function recuper(){
        Axios.post('http://localhost:3006/recup' ,{
            numero: numDoss,
        })
    }
    var date = (new Date().getFullYear()).toString().substring(2,5)
    return (
        <div className="marche-dossier">
            <span className="num-dossier date-dossier">
                <Link to={path} onClick={recuper}>Dossier n°{date +'/'+numDoss} </Link>
            </span>
            <span className="date-dossier">{curentdate}</span>
            <span className="date-dossier">{datelim}</span>
            <span className="date-dossier">
                <div className="progress">
                    <div className="progress-done " style={style}>
                        {done}%
			    </div>
                </div>
            </span>
            <span className="date-dossier btn-remplir">
                <a href={path} onClick={recuper}> Remplire le formulaire</a>
            </span>
        </div>
    )
}

export default DossierCo
