import Header from "../commun/Header"
import Droite from "../commun/Droite"
import Footer from "../commun/Footer"
import Milieuarc from "../commun/Milieuarc"
import { useState, useEffect } from 'react'
const Archivecm = () => {
    
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
export default Archivecm;