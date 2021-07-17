import Help from './Help.js'
import Header from "../services/commun/Header"
import Droite from "../services/commun/Droite"
import Footer from "../services/commun/Footer"
import { useState, useEffect } from 'react'
const Ad = () => {
    const [userInfo, setUserInfo] = useState({id: '', nom: '', prenom: '',email: '',psswrd: '',service: '',role: '',CT: ''})
    const [userIn, setUserIn] = useState({id: '', nom: '', prenom: '',email: '',psswrd: '',service: '',role: '',CT: ''})
    useEffect(() => {
        fetch("/users/").then( res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined){
                setUserInfo({...userInfo,
                    id: jsonRes.information.id,
                    nom : jsonRes.information.nom,
                    prenom : jsonRes.information.prenom,
                    email : jsonRes.information.email,
                    psswrd : jsonRes.information.psswrd,
                    service : jsonRes.information.service,
                    role : jsonRes.information.role,
                    CT : jsonRes.information.CT
                }) 
            }
                 
            
        })
        
        
    })
    /*const userInfo = {
        nom: 'Khedir Meriem',
        email: 'email@gmail.com',
        service: 'Marché',
        role: "editeur",
    };*/
    const [num, setNum] = useState([])
    const serviceinfo = '/' + userInfo.service;
    return (
        <div className="marche" >
            <Header userInfo={userInfo} serviceinfo={serviceinfo} num={num} />
            <div className="noyeau-marche">

                <Droite serviceinfo={serviceinfo} Userinfo={userInfo} />
                <Help />
            </div>
            <Footer />
        </div>
    )
}
export default Ad