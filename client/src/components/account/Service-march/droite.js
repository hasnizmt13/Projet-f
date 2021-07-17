import './Style_sheet.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";
import Dossier from "./Dossier.js"
const Droite = () => {
    const [more, setmore] = useState(false);
    var x = "plus";
    if (more) {
        x = "moin"
    }
    else {
        x = "plus"
    }
    return (
        <div className="partie-contain">
            <div className="partie-droite">
                <div className="searchbar">
                    <input type="text" placeholder="Search.." className="txt"></input>
                    <button class="search"><FontAwesomeIcon icon={faSearch} className="icon" /></button>
                </div>
                <div className="dossiers-recents">
                    <h3> Dossiers Récents </h3>
                    <Dossier />
                    <Dossier />
                    {
                    more && (
                        <Dossier />
                    )}
                    <button className="more" onClick={() => setmore(curentmore => !curentmore)}>{x}</button>
                </div>
            </div>
        </div>

    );

};
export default Droite;