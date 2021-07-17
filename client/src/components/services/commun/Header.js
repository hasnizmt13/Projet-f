import Axios from 'axios'

import './Style_sheet.css'
import logoimg from "../../../images/lo.svg"
import prfp from "../../../images/folder-images-main/imagefille.jpg"
import Notif from "../../Notification/Numnotif.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faCaretDown, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Pmenu from "./Pmenu"
import Show from "./Show"
import React, { useState, useEffect } from "react";
import { NavLink, Link } from 'react-router-dom'
import Navelem from './Navelem.js'
import { useRef } from 'react'
let useClickOutside = (handler1) => {
    let menuref = useRef();
    useEffect(() => {
        let handler = (event) => {
            if (!menuref.current.contains(event.target)) {
                handler1();
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return menuref;
}

const Header = ({ userInfo, serviceinfo, num }) => {
    const [divcontainer, setdivcontainer] = useState(false);
    const [divcontaineravatar, setdivcontaineravatar] = useState(false);
    const [responsive, setresponsive] = useState(false);
    const [y, sety] = useState(false);
    let menuref = useClickOutside(() => {
        setdivcontainer(false);
        setdivcontaineravatar(false);
    }
    )

    function SubmitFunc(){
        Axios.post('http://localhost:3006/affch',{})
    }
    /*const SubmitFunc2 = () => {
        Axios.post('http://localhost:3006/affch')
    }*/

    return (
        <header className="head-mon-serv">

            <nav className="nav-container-mon-serv">
                <div className="logo-container">
                    <a href="http://localhost:3000/">
                        <img src={logoimg} height="40" className="lg" />
                    </a>
                </div>

                <ul className="navbar1 navbar">
                    <li className="nav-el">
                        <NavLink exact to={"../"+userInfo.service} className="link" activeClassName="active" onClick={SubmitFunc}>Mon service</NavLink>
                    </li>
                    <li className="nav-el">
                        <Link exact to='../Archive' className="link" activeClassName="active" onClick={SubmitFunc}>Consultation</Link>
                    </li>
                    <li className="nav-el">
                        <NavLink exact to='../Statistiques' className="link" activeClassName="active">Statistiques</NavLink>
                    </li>
                    <li className="nav-el">
                        <NavLink exact to='../Aide' className="link" activeClassName="active">Aide en ligne</NavLink>
                    </li>
                </ul>
                <ul className="navbar2 navbar">
                    <li className="nav-el2 nav-el" >
                        <a className="element" onClick={() => setdivcontainer(curentdivcontainer => !curentdivcontainer)}>
                            <span className="bell" > <FontAwesomeIcon icon={faBell} className="icon" /></span>
                            <span className="number"><Notif num={num.length} /></span>
                        </a>

                    </li>
                    <li className="nav-el3 " >
                        <a className="elementP">
                            <img src={prfp} className="avatar" />
                            <p>{userInfo.nom}</p>
                        </a>
                        <div className="nom">

                            <span className="icon" onClick={() => setdivcontaineravatar(avatar => !avatar)}>
                                <FontAwesomeIcon icon={faCaretDown} className="icon" />
                            </span>
                        </div>
                    </li>

                </ul>
                <ul className="responsivemenu">
                    <li className="nav-el3 " >
                        <div className="Menu">

                            <span className="icon" onClick={() => setresponsive(responsive => !responsive)}>
                                {!responsive && (<FontAwesomeIcon icon={faBars} className="icon" />)}
                                {responsive && (<FontAwesomeIcon icon={faTimes} className="icon" />)}
                            </span>
                        </div>
                    </li>

                </ul>
            </nav>

            <div ref={menuref}>
                {
                    divcontainer && (
                        <div className="not-tab">
                            <div className="tete" >
                                <a href=" " className="notification">Notification</a>
                                <div className="fermer" onClick={() => setdivcontainer(curentdivcontainer => !curentdivcontainer)}>
                                    <FontAwesomeIcon icon={faTimes} className="icon" />
                                </div>
                            </div>
                            <div>
                                {
                                    num.map((n) => {
                                        return <Show num={n} />
                                    })
                                }
                                {(num == []) && (<div className="notification-list">
                                    <p className="section aucune">vous n'avez aucune nouvelle notification</p>
                                </div>)}
                            </div>
                        </div>)
                }
                {
                    divcontaineravatar && (<div><Pmenu userInfo={userInfo} /></div>)
                }
            </div>
            <div className="resp">
                {responsive && (<Navelem serviceinfo={serviceinfo} />)}
            </div>

        </header >

    )
}

export default Header
