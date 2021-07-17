import Axios from 'axios'

import { useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import "../index.css"
import useForm from './useForm'
import validation from './validation'

import moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import Header from "../../services/commun/Header.js"
import Menu from "../../services/commun/Droite.js"
const Acc = (props) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        validation
    );

    const SubmitFunc3 = () => {
        var cbn = '1'
        const srvc = 'Cp'
        Axios.post('http://localhost:3006/cbn', {
            cbn: cbn,     
            numero: numDoss,
            srv: srvc
        })
    }
    const SubmitFunc1 = () => {
        Axios.post('http://localhost:3006/send')
        var envo = true
        var cbn = '1'
        Axios.post('http://localhost:3006/comptable', {

        cbn: cbn,
        desiis: values.decis,
        date: values.date,
        respo: values.respo,
        completer: values.completer,
        datecomplement: values.dateComplement,
        datepay: values.datePay,
        desc: values.desc,
        md: limiteDate,
        nm: numDoss,
        env: envo
       // })/*.then((respone) => {
       // console.log('infos envoyees')
        })
    }
    const SubmitFunc2 = () => {
        setP(true)
        var envo = false
        Axios.post('http://localhost:3006/comptable', {

        desiis: values.decis,
        date: values.date,
        respo: values.respo,
        completer: values.completer,
        datecomplement: values.dateComplement,
        datepay: values.datePay,
        desc: values.desc,
        md: limiteDate,
        nm: numDoss,
        env: envo
       // })/*.then((respone) => {
       // console.log('infos envoyees')
        })
    }

    var all = props.match.params.id;
    var numDoss = Math.floor(all / 10)
    var disable = true
    if (all % 10 == 1){
        disable = false
    }
    
    var date = new Date()
    
    var date2 = new Date(date.getTime() +((values.duree + 30)*24*60*60*1000))
    var limiteDate = date2.getFullYear()+'-'
    if (date2.getMonth()<10){
        limiteDate += '0'+date2.getMonth()+'-'
    }
    else {
        limiteDate += date2.getMonth()+'-';
    }
    if (date2.getDate() < 10){
        limiteDate += '0'+date2.getDate()
    }
    else{
        limiteDate += date2.getDate();
    }
    var current = new Date()
    var idDate = 'avance'
    if (current.getTime() > date2.getTime()){
        idDate = 'retard'
    }
    const [userInfo, setUserInfo] = useState({id: '', nom: '', prenom: '',email: '',psswrd: '',service: '',role: '',CT: ''})
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
  const [num, setNum] = useState([])
    useEffect(() => {
        fetch("/infor/").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined) {
                setNum(jsonRes.infor.comptableDoss)
            }
        })
    })
    const [el, setEl] = useState(1)
  function next(){
    if (el == 2){
        setEl(1)
    }
    else{
        setEl(el +1)
    }
}
function prev(){
    if (el == 1){
        setEl(2)
    }
    else{
        setEl(el -1)
    }
}
const [p, setP] = useState(false)
  const serviceinfo = "./"+userInfo.service;
  var date = (new Date().getFullYear()).toString().substring(2,5)
    return (
        <form onSubmit={handleSubmit} className="acc-container" noValidate>
            <Header userInfo={userInfo} serviceinfo={serviceinfo} num={num}/>
            <div className="mid">
                <Menu serviceinfo={serviceinfo}/>
                <div className="form-container">
                    <div className="top-form">
                        <h1>Service comptabilité dossier n°{date + '/'+numDoss}</h1>
                        <div className="btns">
                            <div className="btn">
                                <button className="btn-arreter" > <Link to="../comptable" className="lien" onClick={SubmitFunc3}>Arreter</Link> </button>
                            </div>
                            <div className="btn">
                                <button className="btn-send" type='submit' onClick={SubmitFunc1}>
                                <Link to='../comptable'>Terminer</Link>
                                </button>
                            </div>
                            <div className="btn">
                                <button className="btn-sauv" onClick={SubmitFunc2}>✓ Sauvegarder </button>
                            </div>
                        </div>
                    </div>
                    {p && <div className="text-sauv">
                        <span>Les données ont bien été sauvegarder</span>
                    </div>}
                    <div className="marche-form form">
                        {el == 1 && <div className="form">
                        <div className="cont">
                            <div className="text">
                                <label>Date de réception </label> 
                                <span>
                                    La date ou le dossier est arrivé dans le service comptabilité
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type= "date"
                                    disabled={disable}
                                    value={values.date} 
                                    name="date"
                                    className="date"/>
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Responsable</label>
                                <span>
                                    Le responsable doit etre unique
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                        type="text" 
                                        disabled={disable}
                                        name="respo"
                                        value={values.respo}
                                        onChange={handleChange}
                                        placeholder="Responsable du dossier *" 
                                        className="respo" 
                                        autocomplete="off" required/>
                                {errors.respo && <p className="err-txt">{errors.respo}</p>}
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Décision</label> 
                                <span>
                                    La décision est inchangeable
                                </span>
                            </div>
                            <div className=" content"> 
                                <select name="decis" defaultValue={''} value={values.decis} onChange={handleChange} disabled={disable}>
                                    <option value='' disabled className="none">Choisissez la décision *</option> 
                                    <option value="dec1"> Accepté </option>
                                    <option value="dec2"> Refusé </option>
                                </select>
                                {errors.decis && <p className="err-txt">{errors.decis}</p>}
                            </div>
                        </div>
                        
                        
                        <div className="cont">
                            <div className="text">
                                <label>Pieces a completer</label> 
                                <span>
                                    Les pieces manquantes
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type="text" 
                                    name="completer"
                                    disabled={disable}
                                    value={values.completer}
                                    onChange={handleChange}
                                    placeholder="Pieces a completer" 
                                    className="fournisseur" 
                                    autocomplete="off" required/>
                                
                            </div>
                        </div>
                        </div>}
                        {el == 2 && <div className="form">
                        <div className="cont">
                            <div className="text">
                                <label>Date de complément du dossier</label> 
                                <span>
                                    C'est la date pour le dossier soit completer 
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type= "date"
                                    disabled={disable}
                                    value={values.dateComplement}
                                    onChange={handleChange} 
                                    name="dateComplement"
                                    className="date"/>
                                {errors.dateComplement && <p className="err-txt">{errors.dateComplement}</p>}
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Date de payment</label> 
                                <span>
                                    C'est la date pour le payment 
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type= "date"
                                    disabled={disable}
                                    value={values.datePay} 
                                    onChange={handleChange}
                                    name="datePay"
                                    className="date"/>
                                {errors.datePay && <p className="err-txt">{errors.datePay}</p>}
                            </div>
                        </div>
                        
                        
                        <div className="cont">
                            <div className="text">
                                <label>Date limite</label>
                                <span>
                                    C'est la date limite du dossier la durée est imposé par l'administrateur
                                </span>
                            </div>
                            <div className="content"> 
                                <input 
                                    id={idDate}
                                    disabled={disable}
                                    type= "date"
                                    value={limiteDate} 
                                    name="limiteDate"
                                    className="date"/>
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Observation</label>
                                <span>
                                    Une remarque a ajouter ou autre
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type="text"
                                    disabled={disable}
                                    name="desc"
                                    value={values.desc}
                                    onChange={handleChange} 
                                    placeholder="Observation"
                                    autoComplete="off" 
                                    className="desc"/>
                            </div>
                        </div>
                        </div>}
                        <div className="navigate">
                            <span onClick={prev} class="previous round">&#8249;</span>
                            <h4 className="page-txt">
                                page {el}/2
                            </h4>
                            <span onClick={next} class="next round">&#8250;</span>
                        </div>
                        
                        
                        {/* <div className="cont file-container">
                            <div className="content">
                                <input 
                                    type="file"
                                    name="file"
                                    id="file"
                                    value={values.file}
                                    onChange={handleChange} 
                                    placeholder="" 
                                    className="file" autocomplete="off"/>
                                <label className="icn-cont" for="file">
                                    Telecharger vos fichiers
                                    <FontAwesomeIcon icon={faFileDownload} className="icn" />
                                </label>
                            </div>
                        </div> */}
                        
                    </div>
                </div>
            </div>
            
            
        </form>
    )
}

export default Acc
