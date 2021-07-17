export default function validateInfo(values) {
    let errors = {};
    if (!values.montant) {
      errors.montant = 'Montant est requit';
    }
    if (!values.datePr) {
      errors.datePr = "Date d'arrivé de la préstation est obligatoire";
    }
    if (!values.numBonRec) {
      errors.numBonRec = 'Numero du bon de réception est requit';
    }
    if (!values.dateCom) {
      errors.dateCom = 'Date de la commande est requit';
    } 
    if (!values.numCom) {
        errors.numCom = 'Numero du bon de commande est requit';
    } 
    if (!values.decis) {
      errors.decis = 'Décision est obligatoire';
    } 
    if (!values.dateFacPe) {
      errors.dateFacPe = 'Date de facture performa est requit';
    } 
    if (!values.numFacPer) {
        errors.numFacPer = 'Numero de la facture performa est requit';
    } 
    if (!values.numFacDef) {
        errors.numFacDef = 'Numéro de la facture définitive est requit';
    } 
    if (!values.respo) {
        errors.respo = 'Le nom du responsable est obligatoire';
    }
    
    return errors;
  }