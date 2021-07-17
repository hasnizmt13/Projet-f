import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import '../../index.css'
import Header from '../landing/Header.js'
import Marche from './marche/Acc.js'
import Commandes from './commandes/Acc.js'
import Acc3 from './budget/Acc.js'
import Acc4 from './comptable/Acc.js'
const Profil = () => {
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
    
    var d = '/' +userInfo.service
    return (
        <div className="profil-container">
            {
                userInfo.service !== '' && <Redirect to={'/'+userInfo.service}/>
            }
            
        </div>
    )
}

export default Profil
