import './Style_sheet.css'
import React, { useState, useEffect } from "react";
import Acc from "../marche/Acc.js"
import Dossier from "./Dossier.js"
import Axios from 'axios'
const Milieu = () => {
    const [Num, setNum] = useState([])
    const [numDoss, setNumDoss] = useState(0)
    var debutDate
    function addChild(){
        Axios.post('http://localhost:3006/doss', {})
        setNum([...Num,numDoss])
        var showdate = new Date();
        fetch("/infor/").then( res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined){
                setNumDoss(jsonRes.infor.numDoss)
            }  
        }) 
    }
   /* useEffect(() => {
        fetch("/infor/").then( res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined){
                setNumDoss(jsonRes.infor.numDoss)
            }  
        }) 
    })*/
    return (
        <div className="partie-milieu">
            <h2> Bienvenue dans le service marche!</h2>
            <div className="content-marche">
                <div className="btn-contain">
                    <button className="new" onClick={addChild}>
                        <h4>Nouveau +</h4>
                    </button>
                </div>
                <div className="dossiers">
                    {
                        Num.map((n) => {
                            return <Dossier numDoss={n} />
                        })
                    }

                </div>
            </div>

        </div>

    );

};
export default Milieu;