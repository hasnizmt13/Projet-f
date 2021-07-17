import Header from "../commun/Header"
import Droite from "../commun/Droite"
import Milieu from "./Milieu.js"
import Footer from "../commun/Footer"
import { useState, useEffect } from 'react'
const Marché = () => {
    const [userInfo, setUserInfo] = useState({ id: '', nom: '', prenom: '', email: '', psswrd: '', service: '', role: '', CT: '' })
    const [num, setNum] = useState([])
    useEffect(() => {
        fetch("/users/").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined) {
                setUserInfo({
                    ...userInfo,
                    id: jsonRes.information.id,
                    nom: jsonRes.information.nom,
                    prenom: jsonRes.information.prenom,
                    email: jsonRes.information.email,
                    psswrd: jsonRes.information.psswrd,
                    service: jsonRes.information.service,
                    role: jsonRes.information.role,
                    CT: jsonRes.information.CT
                })
            }


        })


    })
    useEffect(() => {
        fetch("/infor/").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined) {
                setNum(jsonRes.infor.marcheDoss)
            }
        })
    })

    const serviceinfo = './' + userInfo.service;
    return (
        <div className="marche" >
            <Header userInfo={userInfo} serviceinfo={serviceinfo} num={num} />
            <div className="noyeau-marche">
                <Droite serviceinfo={serviceinfo} userInfo={userInfo} />
                <Milieu userInfo={userInfo} />
            </div>
            <Footer />
        </div>
    )
}
export default Marché;