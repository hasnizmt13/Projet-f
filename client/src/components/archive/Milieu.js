import '../services/commun/Style_sheet.css'
import React, { useState, useEffect, useRef } from "react";
import Dossier from "./Dossier.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Trier from '../services/commun/Trier'
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

const Milieu = () => {
    const [x, setx] = useState(false);
    const [Num, setNum] = useState([])

    useEffect(() => {
        fetch("/infor/").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined) {
                setNum(jsonRes.infor.archiveDoss)
                if (Num !== []){
                    setx(true)
                }
            }
        })


    })
    const [trier, settrier] = useState(false);
    let menutri = useClickOutside(() => {
        settrier(false);
    }
    )
    return (
        <div className="partie-milieu">

            <div className="content-marche">
                <div className="btn-contain">
                    <div className="nouveau">
                        <h3> Bienvenue dans la consultation!</h3>
                        <p>Consulter tout les dossiers cloturés.</p>
                    </div>
                    <div className="searchbar">
                        <form class="example" >
                            <input type="text" placeholder="Rechercher.." name="search2" />
                            <button type="submit" className="button"><FontAwesomeIcon icon={faSearch} className="icon" /></button>
                        </form>
                    </div>
                </div>

                <div className="titre-nouveau">
                    <p className="titresec">Les dossiers finis:</p>
                    <div className="tri">
                        <p>Trier</p>
                        <span className="icon" onClick={() => settrier(trier => !trier)}>
                            <FontAwesomeIcon icon={faCaretDown} className="icon" />
                        </span>
                    </div>
                </div>
                <div ref={menutri}>
                    {trier && (<Trier />)}
                </div>
                <div className="titles">
                    <span>Numéro de dossier</span>
                    <span>Dernière modification</span>
                    <span>Date limite</span>
                    <span className="final">Formulaire</span>
                </div>

                {
                    Num.map((n) => {
                        return <Dossier key={n} numDoss={n} done="60" datelim="02/06/2020" />
                    })
                }
                {!x && (<div>
                    <h5>Y a pas de dossier a consulter</h5>
                </div>)}

            </div>


        </div>
    )
}

export default Milieu
