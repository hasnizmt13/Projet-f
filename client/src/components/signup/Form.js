import Signup from './Signup';
import FormSuccess from './Formsuccess.js';
import { useState } from 'react'
import useForm from './useForm'
import validation from './validation'
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [values, setValues] = useState(null);
  const { handleChange, handleSubmit, vals, errors } = useForm(
    submitForm,
    validation
  );
  function submitForm() {
    console.log(values);
    setIsSubmitted(true);
  }
  return (
    <>
      <div>
        {!isSubmitted ? (
          <Signup submitForm={submitForm} />    
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;