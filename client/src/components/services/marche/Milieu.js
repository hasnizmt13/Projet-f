import '../commun/Style_sheet.css'
import React, { useState, useEffect, useRef } from "react";
import Dossier from "../commun/Dossier.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios'
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
const Milieu = ({ userInfo }) => {
    var debutDate
    const [x, setx] = useState(false);
    const [Num, setNum] = useState([])
    function addChild() {
        Axios.post('http://localhost:3006/doss', {})
        var showdate = new Date();
        fetch("/infor/").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined) {
                setNumDoss(jsonRes.infor.numDoss)
                setNum(jsonRes.infor.marcheDoss)

            }
        })

    }

    function addChild2() {
        Axios.post('http://localhost:3006/doss2', {})
        var showdate = new Date();
        fetch("/infor/").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined) {
                setNumDoss(jsonRes.infor.numDoss)
                setNum(jsonRes.infor.marcheDoss)

            }
        })

    }
    const [numDoss, setNumDoss] = useState(0)
    useEffect(() => {
        //addChild2();
        fetch("/infor/").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined) {
                setNumDoss(jsonRes.infor.numDoss)
                setNum(jsonRes.infor.marcheDoss)
                console.log(jsonRes.infor.marcheDoss)
                if (Num !== []) {
                    setx(true)
                }
            }
        })
    })
    /**  TRi */
    const [trier, settrier] = useState(false);
    function triertab(y) {
        settrier(!trier);
        if (y == "datecréation") {
            const sorttest2 = Num.sort(
                (a, b) => a.datecreation.split('/').reverse().join().localeCompare(b.datecreation.split('/').reverse().join())
            );

        }
        if (y == "datelimite") {
            const sorttest2 = Num.sort(
                (a, b) => a.datelimite.split('/').reverse().join().localeCompare(b.datelimite.split('/').reverse().join())
            );

        }
        if (y == "num") {
            const sorttest2 = Num.sort((a, b) => (a.num < b.num ? -1 : Number(a.num > b.num)));

        }

        if (y == "avancement") {
            const sorttest2 = Num.sort((a, b) => (a.avancement < b.avancement ? -1 : Number(a.avancement > b.avancement)));

        }
    }

    /*************** */
    let menutri = useClickOutside(() => {
        settrier(false);
    }
    )

    return (
        <div className="partie-milieu">

            <h3> Bienvenue dans votre espace de travail dans le service marché!</h3>
            <p>Ajoutez des nouveaux dossiers et commencez à travailler en remplissant les formulaires .</p>
            <div className="content-marche">
                <div className="btn-contain">
                    <div className="nouveau">
                        <button className="new" onClick={addChild}>
                            <p>Nouveau +</p>
                        </button>
                    </div>

                </div>

                <div className="titre-nouveau">
                    <p className="titresec">Vos dossiers en cours:</p>
                    <div className="tri">
                        <p>Trier</p>
                        <span className="icon" onClick={() => settrier(trier => !trier)}>
                            <FontAwesomeIcon icon={faCaretDown} className="icon" />
                        </span>
                    </div>
                </div>
                <div ref={menutri}>
                    {trier && (<div className="tri-menu">
                        <ul className="list-tri">
                            <li className="item-tri" onClick={() => triertab("datecréation")}>
                                Dernière modification
                            </li >
                            <li className="item-tri" onClick={() => triertab("datelimite")}>
                                par date limite
                            </li>
                            <li className="item-tri" onClick={() => triertab("num")}>
                                par Numéro de dossier
                            </li>
                            <li className="item-tri" onClick={() => triertab("avancement")}>
                                par le taux d'avancement
                            </li>
                        </ul>
                    </div>)}
                </div>
                <div className="titles">
                    <p>Numéro de dossier</p>
                    <p>Dernière modification</p>
                    <p>Date limite</p>
                    <p>Avancement</p>
                    <p className="final">Formulaire</p>
                </div>

                {
                    Num.map((n) => {
                        return <Dossier key={n} numDoss={n} done="1" datelim="02/06/2020" service={userInfo.service} role={userInfo.role} />
                    })
                }
                {!x && (<div>
                    <h5>vous n'avez aucun dossier en cours</h5>
                </div>)}

            </div>


        </div>


    );

};
export default Milieu;