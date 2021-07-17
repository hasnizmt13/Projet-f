import "./Deco.css"
import Retour from "../services/commun/Retour"
import { useState, useEffect } from 'react';
import Gauche from "../services/commun/Gauche"
import Axios from 'axios'
const AccDuree = ({ serviceinfo }) => {

    

    function sauv(){
         Axios.post('http://localhost:3006/duree', {
            num: values.num ,
            duree1: values.duree1,
            duree2: values.duree2,
            duree3: values.duree3,
            duree4: values.duree4
         })
    }
    const [values, setValues] = useState({

        num: '',
        duree1: '20',
        duree2: '5',
        duree3: '10',
        duree4: '5'
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
    return (

        <div>
            <div class="Profil-container">
                <Gauche serviceInfo={serviceinfo} />

                <form onSubmit={handleSubmit} class="ProPara" noValidate>

                    <div class="TITRE">
                        <h1>Gestion de la duree des dossiers</h1>
                        <p>Changer la duree pour un dossier quelconque</p>
                    </div>

                    <div class="UserName">
                        <h2>Numero dossier</h2>
                        <p>Saisissez le numero dossier</p>
                        <div className="notifinput">
                            <input id="Name" type="text"
                            name="num"
                            value={values.num}
                            onChange={handleChange} /><br />
                        </div>

                    </div>
                    <div class="UserName">
                        <h2>Duree dans le service marche</h2>
                        <p>Saisissez la duree du dossier</p>
                        <div className="notifinput">
                            <input className="duree" type="text"
                            name="duree1"
                            value={values.duree1}
                            onChange={handleChange} /><br />
                        </div>

                    </div>
                    <div class="UserName">
                        <h2>Duree dans le service commande</h2>
                        <p>Saisissez la duree du dossier</p>
                        <div className="notifinput">
                            <input className="duree" type="text"
                            name="duree2"
                            value={values.duree2}
                            onChange={handleChange} /><br />
                        </div>

                    </div>
                    <div class="UserName">
                        <h2>Duree dans le service budget</h2>
                        <p>Saisissez la duree du dossier</p>
                        <div className="notifinput">
                            <input className="duree" type="text"
                            name="duree3"
                            value={values.duree3}
                            onChange={handleChange} /><br />
                        </div>

                    </div>
                    <div class="UserName">
                        <h2>Duree dans le service comptable</h2>
                        <p>Saisissez la duree du dossier</p>
                        <div className="notifinput">
                            <input className="duree" type="text"
                            name="duree4"
                            value={values.duree4}
                            onChange={handleChange} /><br />
                        </div>

                    </div>

                    <div class="SauvModif">
                        <button onClick={sauv}>Sauvegarder</button>
                    </div>
                </form>

            </div>
            <Retour serviceinfo={serviceinfo} />
        </div>
    )
}

export default AccDuree;