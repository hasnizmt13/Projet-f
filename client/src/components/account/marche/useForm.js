import { useState, useEffect } from 'react';
import validateInfo from './validation.js'
import Moment from 'moment'
const useForm = (validate) => {
  // const [formInfo, setFormInfo] = useState({respo: ''})
  //   useEffect(() => {
  //       fetch("/infor/").then( res => {
  //           if (res.ok) {
  //               return res.json()
  //           }
  //       }).then(jsonRes => {
  //           if (jsonRes !== undefined){
  //               setFormInfo({...formInfo,
  //                   respo: jsonRes.marcheInfo.respo
  //               }) 
  //           }
                 
            
  //       })  
  //   }, [])
  const [info, setInfo] = useState( () => {
    return {
      type: '',
      objet: '',
      fournisseur: '',
      dateTr: '',
      respo: '',
      decis: '',
      num: '',
      desc: '',
      duree1: '',
      dateCreate: ''
  
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
                respo: jsonRes.marcheInfo.respo,
                fournisseur : jsonRes.marcheInfo.fournisseur,
                type : jsonRes.marcheInfo.type,
                objet : jsonRes.marcheInfo.objet,
                desc : jsonRes.marcheInfo.desc,
                num : jsonRes.marcheInfo.num,
                decis : jsonRes.marcheInfo.decis,
                dateTr : Moment(jsonRes.marcheInfo.dateTr).format('YYYY-MM-DD'),
                duree1: jsonRes.marcheInfo.duree1,
                dateCreate: jsonRes.marcheInfo.dateCreate
            }) 
            setT(0)
            
        }
             
        
    })
    
    
})
  const [values, setValues] = useState( () => {
    return {
      type: '',
      objet: '',
      fournisseur: '',
      dateTr: '',
      respo: '',
      decis: '',
      num: '',
      desc: '',
      file: '',
      duree1: '',
      dateCreate: ''
  
    }
  });
  
  useEffect(() => {
    setValues({
      type: info.type,
      objet: info.objet,
      fournisseur: info.fournisseur,
      dateTr: info.dateTr,
      respo: info.respo,
      decis: info.decis,
      num: info.num,
      desc: info.desc,
      duree1: info.duree1,
      dateCreate : info.dateCreate
    })
    console.log(values)
    console.log(info)
},[t])
  // setTimeout(()=> {
    
  //   console.log(info)
  //   console.log(values)
  // },300)
  const [errors, setErrors] = useState({});
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    e.target.style.borderBottomColor = "blue"
  };
  
  
  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validateInfo(values));

  };

  /*useEffect(
    () => {
      if (Object.keys(errors).length === 0 ) {
        callback();
      }
    },
    [errors]
  );*/

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;