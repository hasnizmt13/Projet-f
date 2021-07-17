import './Style_sheet.css'
import logoimg from "../../../images/lo.svg"
import prfp from "../../../images/folder-images-main/imagefille.jpg"
import Notif from "./not-num.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import Pmenu from "./profile-menu"
import Show from "./show.js"
import React, { useState } from "react";
const Head = ({userInfo}) => {
    const [divcontainer, setdivcontainer] = useState(false);
    const [divcontaineravatar, setdivcontaineravatar] = useState(false);
    return (
        <header className="head-mon-serv">

            <nav className="nav-container-mon-serv">
                <div className="logo-container">
                    <a>
                        <img src={logoimg} height="40" className="lg" />
                    </a>
                </div>

                <ul className="navbar1 navbar">
                    <li className="nav-el">
                        <a href="#">Mon service</a>
                    </li>
                    <li className="nav-el">
                    <a href="#">Activité</a>
                    </li>
                    <li className="nav-el">
                        <a href="#">Statistiques</a>
                    </li>
                    <li className="nav-el">
                        <a href="#">Dossier en cours</a>
                    </li>
                </ul>
                <ul className="navbar2 navbar">
                    <li className="nav-el2 nav-el" >
                        <a className="element" onClick={() => setdivcontainer(curentdivcontainer => !curentdivcontainer)}>
                            <span className="bell" > <FontAwesomeIcon icon={faBell} className="icon" /></span>
                            <span className="number"><Notif /></span>
                        </a>

                    </li>
                    <li className="nav-el3 nav-el" >
                        <a className="elementP" onClick={() => setdivcontaineravatar(avatar => !avatar)}>
                            <img src={prfp} className="avatar" />
                        </a>
                    </li>
                </ul>
                
            </nav>
            {
                divcontainer && (<div className="not-tab">
                    <div className="fermer" onClick={() => setdivcontainer(curentdivcontainer => !curentdivcontainer)}>X</div>
                    <div> <Show /></div>
                </div>)
            }

            {
                divcontaineravatar && (<div><Pmenu userInfo={userInfo} /></div>)
            }
        </header>

    )
}
export default Head;