import { useState, useEffect } from 'react'
import Header from "../services/commun/Header.js"
import Droite from "../services/commun/Droite.js"
import Milieu from "./Milieu.js"
import Footer from "../services/commun/Footer.js"
const Archive = () => {
    const [userInfo, setUserInfo] = useState({id: '', nom: '', prenom: '',email: '',psswrd: '',service: '',role: '',CT: ''})
    const [num, setNum] = useState([])
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
  useEffect(() => {
    fetch("/infor/").then(res => {
        if (res.ok) {
            return res.json()
        }
    }).then(jsonRes => {
        if (jsonRes !== undefined) {
            if (userInfo.service === "marche"){
                setNum(jsonRes.infor.marcheDoss)
            }
            if (userInfo.service === "commande"){
                setNum(jsonRes.infor.commandeDoss)
            }
            if (userInfo.service === "budget"){
                setNum(jsonRes.infor.budgetDoss)
            }
            if (userInfo.service === "comptable"){
                setNum(jsonRes.infor.comptableDoss)
            }
            
        }
    })
})
    
    const serviceinfo = './'+userInfo.service;
    return (
        <div className="marche">
            <Header userInfo={userInfo} serviceinfo={serviceinfo} num={num} />
            <div className="noyeau-marche">
                <Droite serviceinfo={serviceinfo} />
                <Milieu />
            </div>
            <Footer />
        </div>
    )
}

export default Archive
