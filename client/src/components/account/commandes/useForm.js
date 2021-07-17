import { useState, useEffect } from 'react';
import validateInfo from './validation.js'
import Moment from 'moment';
const useForm = (validate) => {
  const [info, setInfo] = useState( () => {
    return {
      decis: '',
    dateFacPe: '',
    numFacPer: '',
    numFacDef: '',
    respo: '',
    numCom: '',
    dateCom: '',
    montant: '',
    datePr: '',
    numBonRec: '',
    dateTr: '',
    desc: '',
    duree: '',
    date: ''
  
    }
  });
  const [t, setT] = useState(1)
  useEffect(() => {
    fetch("/infor/").then( res => {
        if (res.ok) {
            return res.json()
        }
    }).then(jsonRes => {
        if (jsonRes !== undefined){
            setInfo({...info,
              decis: jsonRes.commandeInfo.decis,
              dateFacPe: Moment(jsonRes.commandeInfo.dateFacPe).format("YYYYY-MM-DD"),
              numFacPer: jsonRes.commandeInfo.numFacPer,
              numFacDef: jsonRes.commandeInfo.numFacDef,
              respo: jsonRes.commandeInfo.respo,
              numCom: jsonRes.commandeInfo.numCom,
              dateCom: Moment(jsonRes.commandeInfo.dateCom).format("YYYYY-MM-DD"),
              montant: jsonRes.commandeInfo.montant,
              datePr: Moment(jsonRes.commandeInfo.datePr).format("YYYYY-MM-DD"),
              numBonRec: jsonRes.commandeInfo.numBonRec,
              dateTr: Moment(jsonRes.commandeInfo.dateTr).format('YYYY-MM-DD'),
              desc: jsonRes.commandeInfo.desc,
              duree: jsonRes.commandeInfo.duree2,
              date: jsonRes.commandeInfo.date2
            }) 
            setT(0)
            //console.log(info)
        }
             
        
    })
    
    
})
const [values, setValues] = useState({
  decis: '',
  dateFacPe: '',
  numFacPer: '',
  numFacDef: '',
  respo: '',
  numCom: '',
  dateCom: '',
  montant: '',
  datePr: '',
  numBonRec: '',
  dateTr: '',
  desc: '',
  file: '',
  duree: '',
  date: ''

});
  useEffect(() => {
    setValues({
      ...values,
      decis: info.decis,
    dateFacPe: info.dateFacPe,
    numFacPer: info.numFacPer,
    numFacDef: info.numFacDef,
    respo: info.respo,
    numCom: info.numCom,
    dateCom: info.dateCom,
    montant: info.montant,
    datePr: info.datePr,
    numBonRec: info.numBonRec,
    dateTr: info.dateTr,
    desc: info.desc,
    duree: info.duree,
    date: info.date
    })
    console.log(values)
    console.log(info)
},[t])
  
  const [errors, setErrors] = useState({});
  

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validateInfo(values));
    
  };

  /*useEffect(
    () => {
      if (Object.keys(errors).length === 0 && (page == 1)) {
        callback();
      }
    },
    [errors]
  );*/

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;