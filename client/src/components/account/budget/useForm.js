import { useState, useEffect } from 'react';
import validateInfo from './validation.js'
import Moment from "moment"
const useForm = (validate) => {
  const [info, setInfo] = useState( () => {
    return {
      dateCF: '',
      dateVisa: '',
      dateMend: '',
      respo: '',
      date: '',
      motif: '',
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
              dateCF: Moment(jsonRes.budgetInfo.dateCF).format("YYYYY-MM-DD"),
              dateVisa: Moment(jsonRes.budgetInfo.dateVisa).format("YYYYY-MM-DD"),
              dateMend: Moment(jsonRes.budgetInfo.dateMend).format("YYYYY-MM-DD"),
              respo: jsonRes.budgetInfo.respo,
              date: Moment(jsonRes.budgetInfo.date).format("YYYYY-MM-DD"),
              motif: jsonRes.budgetInfo.motif,
              dateTr: Moment(jsonRes.budgetInfo.dateTr).format("YYYYY-MM-DD"),
              desc: jsonRes.budgetInfo.desc,
              duree: jsonRes.budgetInfo.duree3,
              date: jsonRes.budgetInfo.date3
            }) 
            setT(0)
            //console.log(info)
        }
             
        
    })
    
    
})
const [values, setValues] = useState({
  dateCF: '',
  dateVisa: '',
  dateMend: '',
  respo: '',
  date: '',
  motif: '',
  dateTr: '',
  desc: '',
  file: '',
  duree: '',
  date: ''

});
  useEffect(() => {
    setValues({
      ...values,
      dateCF: info.dateCF,
      dateVisa: info.dateVisa,
      dateMend: info.dateMend,
      respo: info.respo,
      date: info.date,
      motif: info.motif,
      dateTr: info.dateTr,
      desc: info.desc,
      duree : info.duree,
      date: info.date
    })
    console.log(values)
    console.log(info)
},[t])
  
  const [errors, setErrors] = useState(() => {
    return {}
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