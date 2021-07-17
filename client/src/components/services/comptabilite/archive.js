import Header from "../commun/Header"
import Droite from "../commun/Droite"
import Footer from "../commun/Footer"
import Milieuarc from "../commun/Milieuarc"
import { useState, useEffect } from 'react'
const Archivecp = () => {
    /*const [userInfo, setUserInfo] = useState({id: '', nom: '', prenom: '',email: '',psswrd: '',service: '',role: '',CT: ''})
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
        
        
    })*/
    const userInfo = {
        nom: 'nom prenom (comptabilité)',
        email: 'email@gmail.com',
        role: 'comptabilité'
    };
    const serviceinfo = './Comptable';
    return (
        <div className="marche" >
            <Header userInfo={userInfo} serviceinfo={serviceinfo} />
            <div className="noyeau-marche">

                <Droite serviceinfo="./Archive" />
                < Milieuarc />
            </div>
            <Footer />
        </div>
    )
}
export default Archivecp;