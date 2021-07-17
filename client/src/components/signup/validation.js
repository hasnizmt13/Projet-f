export default function validateInfo(values) {
    let errors = {};
    let er = false;
    if (!values.username.trim()) {
      errors.username = 'Nom requit';
    }
    if (er){
      errors.email = 'Email existe deja';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
    if (!values.userprenom.trim()) {
        errors.userprenom = 'prenom requit';
      }
  
    if (!values.email) {
      errors.email = 'Email requit';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email invalid';
    }
    if (!values.password) {
      errors.password = 'Mot de passe requit';
    } else if (values.password.length < 8) {
      errors.password = 'Mot de passe doit contenir au moins 8 caracteres';
    }
  
    if (!values.password2) {
      errors.password2 = 'Mot de passe requit';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Mot de passe incorrect';
    }
    if (!values.role) {
      errors.role ='Role obligatoire'
    }
    if (!values.type) {
      errors.type ='Type obligatoire'
    }
    
    return errors;
  }