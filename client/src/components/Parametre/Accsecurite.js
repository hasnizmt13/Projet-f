import "./Deco.css"
import { useState, useEffect } from 'react';
import Gauche from "../services/commun/Gauche"
import Retour from "../services/commun/Retour"
import Axios from 'axios'
const Accsecurite = ({ serviceinfo }) => {


    const [values, setValues] = useState({

        pass: '',
        pass1: '',
        pass2: ''
      });
    
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
 
  const handleSubmit = e => {
    e.preventDefault();
    

   // setErrors(validateInfo(values));
  };

    function sauv(){
        Axios.post('http://localhost:3006/mdpsse', {
        pass: values.pass,
        pass1: values.pass1,
        pass2: values.pass2
        })
    }

    return (

        <div>


            <div class="Profil-container">
                <Gauche serviceInfo={serviceinfo} />
                <div class="ProPara">

                    <div class="TITRE">
                        <h1>Sécurité</h1>
                        <p>Changer votre mot de passe, pour assurer la sécurité de votre compte</p>
                    </div>
                    <div class="UserName">
                        <h2>Ancien mot de passe</h2>
                        <p>Saisissez l'ancien mot de passe</p>
                        <input id="Pname" type="password" name="pass" value ={values.pass} onChange={handleChange}/><br />
                        <a href="../Reset">Mot de passe oublier?</a>
                    </div>
                    <div class="UserName">
                        <h2>Nouveau mot de passe</h2>
                        <p>Saisissez un nouveau mot de passe</p>
                        <input id="Name" type="password" name="pass1" value={values.pass1} onChange={handleChange}/><br />
                    </div>
                    <div class="UserName">
                        <h2>Confirmer</h2>
                        <p>Saisissez deuxième fois votre nouveau mot de passe</p>
                        <input id="AMail" type="password" name="pass2" value={values.pass2} onChange={handleChange}/><br />
                    </div>

                    <div class="SauvModif">
                        <button onClick = {sauv}>Sauvegarder</button>
                    </div>

                </div>


            </div>
            <Retour serviceinfo={serviceinfo} />
        </div>
    )
}

export default Accsecurite;