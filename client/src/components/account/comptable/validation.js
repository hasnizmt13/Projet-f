export default function validateInfo(values) {
    let errors = {};
    
    if (!values.respo) {
        errors.respo = 'Nom du responsable est obligatoire';
    } 
    if (!values.decis) {
      errors.decis = 'La décision est obligatoire';
    } 
    if (!values.datePay) {
        errors.datePay = 'Date de payment est obligatoire';
    }
    if (!values.dateComplement) {
      errors.dateComplement = 'Date de complement du dossier est obligatoire';
    }
    
    return errors;
  }