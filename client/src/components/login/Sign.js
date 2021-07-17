import Card from './Card.js'
import Header from "../landing/Header.js"
import React, { useState } from "react";
import FormSuccess from './Formsuccess.js'
import "../../index.css"
import Acc from '../account/marche/Acc.js';
import Acc2 from '../account/comptable/Acc.js'
import Profil from '../account/Profil.js'
import { Redirect } from 'react-router';
const Sign = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
    //setIsSubmitted ndirouha ki nkoun sur(genre f backend)
  }
  
    return (
      <>
      <div>
        {!isSubmitted ? (
          <Card submitForm={submitForm} />
        ) : (
         <Profil />
        )}
      </div>
    </>
    )
}

export default Sign

