import { useState, useEffect } from 'react';
import validateInfo from './validation';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    userprenom: '',
    role: '',
    type: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
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

    setIsSubmitting(true);
    console.log(values);
  };

  // useEffect(
  //   () => {
  //     if (Object.keys(errors).length === 0 && isSubmitting) {
  //       callback();
  //     }
  //   },
  //   [errors]
  // );

  return { handleChange, handleSubmit, values };
};

export default useForm;