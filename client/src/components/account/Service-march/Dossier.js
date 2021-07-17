import React from 'react'
import "./Style_sheet.css"
import Acc from "../../account/marche/Acc.js"
import { Link } from "react-router-dom"
const Dossier = ({numDoss}) => {
    var path = "/marche-form/"+ numDoss
    console.log(path)
    return (
        <div className="marche-dossier">
            <span className="num-dossier">
                <Link to={path}>Dossier n°{numDoss} </Link>
            </span>
            <span className="date-dossier">18/05/2021</span>
        </div>
    )
}

export default Dossier
