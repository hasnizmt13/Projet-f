import { useState, useEffect } from 'react';

const useForm = () => {
  const [info, setInfo] = useState( () => {
    return {
    nom: '',
    prenom: '',
    adr: ''
  
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
              nom: jsonRes.parametreInfo.nom,
              prenom: jsonRes.parametreInfo.prenom,
              adr: jsonRes.parametreInfo.adr
            }) 
            setT(0)
            //console.log(info)
        }
             
        
    })
    
    
})
const [values, setValues] = useState({
  nom: '',
    prenom: '',
    adr: ''

});
  useEffect(() => {
    setValues({
      ...values,
      nom: info.nom,
      prenom: info.prenom,
      adr: info.adr
    })
    console.log(values)
    console.log(info)
},[t])
  
 // const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
  

    
   

  return { handleChange, handleSubmit, values };
};

export default useForm;