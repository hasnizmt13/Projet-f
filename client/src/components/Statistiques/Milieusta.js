import "../services/commun/Style_sheet.css"
import React from 'react';
import Dossiers from "./dossiers";
import Userstat from "./userstat";
import { useState } from "react";
const Milieusta = () => {
    const info = [
        <Dossiers />, <Userstat />
    ];
    const [tab, setTab] = useState([])
    // useEffect(() => {
    //     fetch("/infoUser/").then( res => {
    //         if (res.ok) {
    //             return res.json()
    //         }
    //     }).then(jsonRes => {
    //         if (jsonRes !== undefined){
    //             setTab(jsonRes.infoUser.user)
    //             console.log(tab)
    //         }
                 
            
    //     })
        
        
    // })
    const [elem, setelem] = useState(-1);
    return (
        <div className="partie-milieu">
            <div>
                <h3> Voir les statistiques des dossiers et utilisateurs:</h3>
            </div>

            <div className="bottons">
                <button onClick={() => { setelem(0) }}>
                    <p>Dossiers</p>
                </button>
                <button onClick={() => { setelem(1) }}>
                    <p>Utilisateurs</p>
                </button>
            </div>
            <div>
                {info[elem]}
            </div>

        </div>
    )
}

export default Milieusta;
/* const user1 = {
        nom: 'Khedir meriem',
        email: 'email@gmail.com',
        role: "editeur",
        service: 'Administrateur'
    };
    const user2 = {
        nom: 'Cylia messar',
        email: 'email@gmail.com',
        role: "editeur",
        service: 'marché'
    };
    const user3 = {
        nom: 'Soltani Meriem',
        email: 'email@gmail.com',
        role: "Consultateur",
        service: 'marché'
    };
    const user4 = {
        nom: 'Morad Larbi',
        email: 'email@gmail.com',
        role: "editeur",
        service: 'commande'
    };
    const user5 = {
        nom: 'Hassni Zoumata',
        email: 'email@gmail.com',
        role: "consultateur",
        service: 'comptable'
    };
    const user6 = {
        nom: 'Saad Dahmani',
        email: 'email@gmail.com',
        role: "editeur",
        service: 'marché'
    };
    const user7 = {
        nom: 'Koudil Mouloud',
        email: 'email@gmail.com',
        role: "editeur",
        service: 'Ordonnateur'
    };
    const user8 = {
        nom: 'Si tayeb fatima',
        email: 'email@gmail.com',
        role: "editeur",
        service: 'Ordonnateur'
    };
    let tab = [user1, user2, user3, user4, user5, user6, user7, user8];
    const dossier1 = {
        num: '1',
        service: 'marché',
        datecreation: '15/06/2021',
        datelimite: '30/06/2021',
        avancement: '25',
    };

    const dossier2 = {
        num: '2',
        service: 'Commande',
        datecreation: '15/06/2021',
        datelimite: '30/06/2021',
        avancement: '30',
        path: "/commande-form/"
    };
    const dossier3 = {
        num: '3',
        service: 'Comptabilité',
        datecreation: '15/06/2021',
        datelimite: '30/06/2021',
        avancement: '30',
        path: "/commande-form/"
    };
    const dossier4 = {
        num: '4',
        service: 'Commande',
        datecreation: '15/06/2021',
        datelimite: '30/06/2021',
        avancement: '45',
        path: "/commande-form/"
    };
    const dossier5 = {
        num: '5',
        service: 'budget',
        datecreation: '15/06/2021',
        datelimite: '30/06/2021',
        avancement: '64',
        path: "/commande-form/"
    };
    const dossier6 = {
        num: '6',
        service: 'comptabilité',
        datecreation: '15/06/2021',
        datelimite: '30/06/2021',
        avancement: '30',
        path: "/commande-form/"
    };
    const Num = [dossier1, dossier2, dossier3, dossier4, dossier5, dossier6]*/