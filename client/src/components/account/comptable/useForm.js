import { useState, useEffect } from 'react';
import validateInfo from './validation.js'
import Moment from "moment"
const useForm = (validate) => {
  const [info, setInfo] = useState( () => {
    return {
      completer: '',
    dateComplement: '',
    datePay: '',
    decis: '',
    respo: '',
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
              completer: jsonRes.comptableInfo.completer,
              dateComplement: Moment(jsonRes.comptableInfo.dateComplement).format('YYYY-MM-DD'),
              datePay: Moment(jsonRes.comptableInfo.datePay).format('YYYY-MM-DD'),
              decis: jsonRes.comptableInfo.decis,
              respo: jsonRes.comptableInfo.respo,
              desc: jsonRes.comptableInfo.desc,
              duree: jsonRes.comptableInfo.duree4,
              date: jsonRes.comptableInfo.date4
            }) 
            setT(0)
            //console.log(info)
        }
             
        
    })
    
    
})
const [values, setValues] = useState({
  completer: '',
    dateComplement: '',
    datePay: '',
    decis: '',
    respo: '',
    desc: '',
    file: '',
    duree: '',
    date: ''

});
  useEffect(() => {
    setValues({
      ...values,
      completer: info.completer,
      dateComplement: info.dateComplement,
      datePay: info.datePay,
      decis: info.decis,
      respo: info.respo,
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