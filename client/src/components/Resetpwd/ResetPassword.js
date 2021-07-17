import Axios from 'axios'

import React, { useState } from "react";
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"
import '../../index.css'

export default function ResetPassword() {
    const [newpwd, setnewpwd] = useState({ email: "", pwd: "", pwdc: "" });
    const SubmitFunc = (e) => {
        e.preventDefault()
        console.log('HHHHH',newpwd)
         Axios.post('http://localhost:3006/newpsswrd', {
             newpsswrd: newpwd.pwd,
             mail: newpwd.email
         })
    }
    return (
        <div className="login-container">
            <div className="sign-contain">
                <div className="contai">
                    <div className="title Reset">
                        <h2> Récupérer le mot de passe</h2>
                    </div>

                    <form onSubmit={SubmitFunc} className="signup-form" noValidate>
                        <div className="cont email-container">
                            <div className=" contain">
                                <FontAwesomeIcon icon={faEnvelope} className="icn" />
                                <input
                                    type="email"
                                    name="email"
                                    value={newpwd.email}
                                    onChange={(e) => setnewpwd(
                                        {
                                            ...newpwd,
                                            email: e.target.value
                                        })}
                                    placeholder="Email"
                                    className="email"
                                    autocomplete="off" required />


                            </div>

                        </div>
                        <div className="cont password-container">
                            <div className="contain">
                                <FontAwesomeIcon icon={faLock} className="icn" />
                                <input
                                    type="password"
                                    name="password"
                                    value={newpwd.pwd}
                                    onChange={(e) => setnewpwd(
                                        {
                                            ...newpwd,    
                                            pwd: e.target.value
                                        })}
                                    placeholder="Nouveau mot de passe"
                                    className="password" required />


                            </div>

                        </div>
                        <div className="cont password-container">
                            <div className="contain">
                                <FontAwesomeIcon icon={faLock} className="icn" />
                                <input
                                    type="password"
                                    name="password"
                                    value={newpwd.pwdc}
                                    onChange={(e) => setnewpwd(
                                        {
                                            ...newpwd,    
                                            pwdc: e.target.value
                                        })}
                                    placeholder="Confirmer le nouveau mot de passe "
                                    className="password" required />


                            </div>

                        </div>

                        <div className="btn-login" >
                            <button type="submit" className="btn-sign"  onClick={SubmitFunc} > 
                            <Link to="../login" className="lien">Se connecter</Link>
                             </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}