export default function validateInfo(values) {
    let errors = {};
    
    if (!values.dateCF) {
      errors.dateCF = "Date d'engagement au pres du CF requit";
    } 
    if (!values.dateMend) {
      errors.dateMend = "Date de mendatement est requit";
    } 
    if (!values.respo) {
        errors.respo = 'Nom du responsable est obligatoire';
    } 
    if (!values.dateVisa) {
        errors.dateVisa = 'Date de visa ou rejet est requise';
    }
    
    return errors;
  }