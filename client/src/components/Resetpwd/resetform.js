import Axios from 'axios'

import React, { useState } from "react";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../index.css'

export default function Resetform() {
    const [values, setvalues] = useState({ email: "", code: "" });
    const [cd, setcd] = useState(false);
    const SubmitFunc = () => {
        //console.log(values)
        setcd(!cd)
        Axios.post('http://localhost:3006/forgot', {
            mail: values.email,
        })
    }
    const SubmitFunc2 = () => {
        Axios.post('http://localhost:3006/code', {
            cc: values.code,
        })
    }
    return (
        <div className="login-container">
            <div className="sign-contain">
                <div className="contai">
                    <div className="title Reset">
                        <h2> Récupérer le mot de passe</h2>
                    </div>

                    <form className="signup-form" noValidate>
                        <div className="cont email-container">
                            <div className=" contain">
                                <FontAwesomeIcon icon={faEnvelope} className="icn" />
                                <input
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={(e) => setvalues({
                                        ...values,
                                        email: e.target.value
                                    })}
                                    placeholder="Email"
                                    className="email"
                                    autocomplete="off" required />


                            </div>

                        </div>

                        {cd && (<div className="cont password-container">
                            <div className="contain">
                                <input
                                    type="text"
                                    name="code"
                                    value={values.code}
                                    onChange={(e) => setvalues({
                                        ...values,
                                        code: e.target.value
                                    })}
                                    placeholder="Code"
                                    className="password" required />


                            </div>
                        </div>)}
                        {cd ? (<div className="btn-login" >
                            <button type="submit" className="btn-sign" onClick={SubmitFunc2} >
                                <a href="/Resetpwd">changer le mot de passe</a>   </button>
                        </div>
                        ) : (<div>
                            <div className="btn-login" >
                                <button type="submit" className="btn-sign" onClick={SubmitFunc} > Envoyer le code  </button>
                            </div>
                        </div>)}



                    </form>
                </div>
            </div>
        </div>
    );
}