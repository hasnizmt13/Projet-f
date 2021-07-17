import { useState , useEffect} from 'react'
import Axios from 'axios'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../index.css'
import wavetop from "../../images/wavetop.svg"
import wavebot from "../../images/wavebot.svg"
import useForm from './useForm'
import { useHistory } from "react-router-dom";
import usePassword from './usePassword'
import validation from './validation'
import { faSignInAlt, faUser, faEnvelope, faLock, faUserTag, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
library.add(fab)
const Card = ( {submitForm} ) => {

      const [PassInputType, ToggleIcon] = usePassword();
      const history = useHistory();
        const viewProfile = function() {
            history.push("/signup");
        };
    // const [errors, setErrors] = useState({email: '', password: ''})
    const [err, setErr] = useState({email: '', password: ''})

    useEffect(() => {
        fetch("/users/").then( res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes.err){
                setErr({...err, email: jsonRes.err.email, password: jsonRes.err.pass})  
                //console.log(err)
            }
            
        })
    })
    var errors = {}
    const SubmitFunc = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3006/login', {
        e_mail: values.email,
        mdpss: values.password
        
        // })/*.then((respone) => {
        // console.log('infos envoyees')
        })

        errors = err
        
        if (errors.email == "" && errors.password == ""){
            console.log(err)
            console.log(errors)
            submitForm()
            
        }
        
    }
    const { handleChange, handleSubmit, values } = useForm(
        submitForm,
        errors
      );   
   
    

    return (
        <div className="login-container">
                <div className="sign-contain">
                    <div className="contai">
                        <div className="title">
                            <h1> Se connecter</h1>
                        </div>
                        
                        <form className="signup-form" noValidate>
                            <div className="cont email-container">
                                <div className=" contain">
                                    <FontAwesomeIcon icon={faEnvelope} className="icn" />
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        placeholder="Email" 
                                        className="email" 
                                        autocomplete="off" required/>
                                    
                                </div>
                                {errors.email !== '' && <p className="err-txt">{err.email}</p>}
                            </div>
                            <div className="cont password-container">
                                <div className="contain">
                                    <FontAwesomeIcon icon={faLock} className="icn" />                            
                                    <input 
                                        type= {PassInputType}
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        placeholder="Password" 
                                        className="password" required/>
                                    {ToggleIcon}
                                    
                                </div>
                                {errors.password !== '' && <p className="err-txt">{err.password}</p>}
                            </div>
                            <div className="check-container">
                                <div className="check">
                                    <input type="checkbox" value="lsRememberMe" id="rememberMe"/> <label for="rememberMe">Se souvenir de moi</label>
                                </div>
                                <div className="remember">
                                    <a href="../Reset">
                                        Mot de passe oublié ?
                                    </a>
                                </div>
                            </div>
                            
                            
                            <div className="btn-login" onClick={SubmitFunc}>
                                <button type="submit" className="btn-sign" /* onClick={SubmitFunc}*/> Se connecter <FontAwesomeIcon icon={faSignInAlt} /> </button>
                            </div>
                        </form>
                    </div>
                </div>

            
        </div>
        
    )
}

export default Card