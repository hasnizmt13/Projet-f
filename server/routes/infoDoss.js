const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const bcrypt = require('bcryptjs')
const router2 = express.Router()
const nodemailer = require('nodemailer')
require('dotenv').config()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'projet_bdd'
})


var nmrDoss ={}
var resDoss = []
router2.post('/doss/' ,async (req , res) => {
    nmrDoss.numero = 1;
    db.query("INSERT INTO services SET `nmr_dossier_sm`=DEFAULT " , (err , ress) => {
        if(err) {console.log(err.message)}
        else {console.log('INSERTION EFFECTUE 1') 
            db.query(" SELECT nmr_dossier_sm FROM services WHERE nmr_dossier_sm = ( SELECT  MAX(`nmr_dossier_sm`) FROM services)" , (errrr,resss) =>{
            if(errrr){console.log(errrr.message)}
            else{
                 position = resss[0].nmr_dossier_sm
                 db.query("INSERT INTO doss_marche SET `nmr_dossier`=?",[position] , (errorr , rs) => {
                    if(errorr) {console.log(errorr.message)}
                    else {console.log('INSERTION EFFECTUE 2')}
                 })
                 var data = [20 , 10 , 5 , 5 , position]
                 db.query("UPDATE services SET duree1=? , duree2=? , duree3=? , duree4=? , create_time=DEFAULT WHERE nmr_dossier_sm =?", data , (err,results) => {
                     if(err){console.log(err.message)}
                 })
                //TAILLE
                db.query("SELECT COUNT(*) AS taille FROM doss_marche " , (errr , resss) =>{
                    if(errr){console.log(errr.message)}
                    else{
                    console.log("taille doss" ,resss[0].taille)
                    taille = resss[0].taille
                    }  
                })
                    // RECUPERATION
                db.query("SELECT nmr_dossier FROM doss_marche" , (error , results) =>{
                    if(error){console.log("ERR DOSS SELECT",error.message)}
                    else {  
                        console.log("taille 2 = " ,taille)
                        if (resDoss == []) {
                            for (let pas = 0; pas < taille ; pas++) { 
                            resDoss.push(results[pas].nmr_dossier)
                            }
                        }else{resDoss.push(results[taille-1].nmr_dossier)}
                        
                        //affichmarch()
                        console.log('resdos insert',resDoss);
                    }
                })
            }
            }) 
        }
      })
})
function affichmarch () {
    
    var tab = []
    // LA TAILLE 
    db.query("SELECT COUNT(*) AS taille FROM doss_marche " , async (errr , resss) =>{
        if(errr){console.log(errr.message)}
        else{
        console.log("taille doss" ,resss[0].taille)
        taille = resss[0].taille
        }  
    })
        // RECUPERATION
    db.query("SELECT nmr_dossier FROM doss_marche" , async (error , results) =>{
        if(error){console.log("ERR DOSS SELECT",error.message)}
        else {  
            console.log("taille 2 = " ,taille)
            for (let i = resDoss.length; i > 0; i--) {
                resDoss.pop();
              }
            for (let pas = 0; pas < taille ; pas++) { 
                resDoss.push(results[pas].nmr_dossier)
               //resDoss [pas] = results[pas].nmr_dossier
            }
            //resDoss = tab

            console.log('resdos fonction ',resDoss);
        }
    })
    return resDoss;
}

// var notif
var notif_cmnde = []
router2.post('/marche/', (req, res) => {
    
    const lmtt = req.body.lmdt
    const desci = req.body.desic
    const trr = req.body.tr
    const dt2 = req.body.date2
    const dt1 = req.body.date1
    const tp = req.body.type
    const objt = req.body.objet
    const fournisseur = req.body.frnssr
    const rsp = req.body.respo
    const nm = req.body.num
    const dsc = req.body.desc 
    const numeroDoss = req.body.nm
    const send = req.body.env

    console.log('voilaa :  ',req.body)
    const sqlinsert = "UPDATE services SET `date_de_lancement_sm`=? , `type_de_prestation`=? , objet=? , fournisseur=? , `responsable_de_dossier_sm`=? , `nmr_de_convention`=? , `observation_sm`=? , `duree_de_traitement_de_dossier_sm`=? , `decision_sm`=? , `date_de_transmission_au_scm`=? , `date_douverture_sm`=? where nmr_dossier_sm = "+ numeroDoss
    db.query(sqlinsert, [dt1, tp, objt, fournisseur, rsp, nm, dsc, lmtt, desci, trr, dt2], async (error, results) => {
        if (error) {
            console.log('la 2: '+error.message)
        } else {
            console.log('infos registered')
        }
    })
    
    if (send == true){
        const num = numeroDoss
        var taille = 0
        console.log(num)
        var date = new Date();
        //
        db.query('UPDATE services SET march_cmnde=? WHERE nmr_dossier_sm=?', [date , num] , async (eror,ress) => {
            if(eror) {console.log(eror.message)}
            else {console.log('INSERT')}
        })
        // INSERTION
        db.query('INSERT INTO notif_mar_cmnd SET nmr_dossier=?', [num] , async (err,ress) => {
            if(err) {console.log(err.message)}
            else {console.log('INSERT')}
        })
        // LA TAILLE 
        db.query("SELECT COUNT(*) AS taille FROM notif_mar_cmnd " , async (errr , resss) =>{
            if(errr){console.log(errr.message)}
            else{
                console.log("taille " ,resss[0].taille)
                taille = resss[0].taille
            }  
        })
        // RECUPERATION
        db.query("SELECT nmr_dossier FROM notif_mar_cmnd" , async (error , results) =>{
            if(error){console.log(error.message)}
            else {  
                console.log("taille 2 = " ,taille)
                if (notif_cmnde == []) {
                    for (let pas = 0; pas < taille ; pas++) { 
                    notif_cmnde.push(results[pas].nmr_dossier)
                    }
                }else{notif_cmnde.push(results[taille-1].nmr_dossier)}
                console.log("notif_cmnde : ",notif_cmnde)
            }
        })
        // SUPPRESSION DE LA NOTIF DU SERVICE PREC
        db.query("DELETE FROM doss_marche WHERE nmr_dossier=?",num , () => {
            affichmarch();
            console.log("llaa ca marchee")
        })
        }
})

function affichcmnde () {
   // notif_cmnde = []
        // LA TAILLE 
        db.query("SELECT COUNT(*) AS taille FROM notif_mar_cmnd " , async (errr , resss) =>{
            if(errr){console.log(errr.message)}
            else{
                console.log("taille " ,resss[0].taille)
                taille = resss[0].taille
            }  
        })
        // RECUPERATION
        db.query("SELECT nmr_dossier FROM notif_mar_cmnd" , async (error , results) =>{
        if(error){console.log("ERR SELECT",error.message)}
        else {  
            console.log("taille 2 = " ,taille)
            for (let i = notif_cmnde.length; i > 0; i--) {
                notif_cmnde.pop();
              }
            for (let pas = 0; pas < taille ; pas++) { 
                notif_cmnde.push(results[pas].nmr_dossier)
            }
            console.log('commande fonction ',notif_cmnde);
        }
        })
    return notif_cmnde;
}

var notif_budget = []
router2.post('/commande/', (req, res) => {
    
    const mdd = req.body.md
    const ttt = req.body.dttr
    const nmcr = req.body.nmb
    const desss = req.body.deciss
    const dtpr = req.body.dtper
    const dt = req.body.date
    const dt2 = req.body.date3
    const nmfape = req.body.nmfp
    const nmfade = req.body.nmfd
    const daco = req.body.dtc
    const nmco = req.body.nmc
    const nmbo = req.body.nmb
    const rsp = req.body.respo
    const mo = req.body.mon
    const ld = req.body.md
    const dsc = req.body.desc 
    const numeroDoss = req.body.nm
    var send = req.body.env

    const sqlinsert = "UPDATE services SET `date_de_reception_scm`=? , `date_facture_proforma_scm`=? , `nmr_facture_proforma_scm`=? , `nmr_facture_difinitive_scm`=? , `date_du_bon_commande`=? , `nmr_bon_commande`=? , `responsable_dossier_scm`=?, `montant_scm`=?, `observation_scm`=?, `nmr_dossier_scm`=?, `date_de_reception_de_la_prestation`=?, `decision_scm`=?, `nmr_de_bon_de_reception_scm`=?, `date_denvoi_au_sb`=?, `duree_de_traitement_dossier_scm`=? where nmr_dossier_sm = "+ numeroDoss
    db.query(sqlinsert, [dt, dt2, nmfape, nmfade, daco, nmco, rsp, mo, dsc, numeroDoss, dtpr, desss, nmbo, ttt, mdd], async (error, reslts) => {
        if (error) {
            console.log('la 2: '+error.message)
        } else {
            console.log('infos registered')
        }
    })
    
    if (send == true){
        const num = numeroDoss
        var taille = 0
        console.log(num)
        var date = new Date();
        //
        db.query('UPDATE services SET cmnde_budget=? WHERE nmr_dossier_sm=?', [date , num] , async (eror,ress) => {
            if(eror) {console.log(eror.message)}
            else {console.log('INSERT')}
        })
        // INSERTION
        db.query('INSERT INTO notif_cmnd_budg SET nmr_dossier=?', [num] , async (err,ress) => {
            if(err) {console.log(err.message)}
            else {console.log('INSERT')}
        })
        // LA TAILLE 
        db.query("SELECT COUNT(*) AS taille FROM notif_cmnd_budg " , async (errr , resss) =>{
            if(errr){console.log(errr.message)}
            else{
                console.log("taille " ,resss[0].taille)
                taille = resss[0].taille
            }  
        })
         // RECUPERATION
         db.query("SELECT nmr_dossier FROM notif_cmnd_budg" , async (error , results) =>{
            if(error){console.log(error.message)}
            else {  
                console.log("taille 2 = " ,taille)

                for (let i = notif_budget.length; i > 0; i--) {
                    notif_budget.pop();
                  }
                for (let pas = 0; pas < taille ; pas++) { 
                    notif_budget.push(results[pas].nmr_dossier)
                }
                // if (notif_budget == []) {
                //     for (let pas = 0; pas < taille ; pas++) { 
                //         notif_budget.push(results[pas].nmr_dossier)
                //     }
                // }else{notif_budget.push(results[taille-1].nmr_dossier)}
                console.log("notif_budget : ",notif_budget)
            }
        })
        // SUPPRESSION DE LA NOTIF DU SERVICE PREC
        db.query("DELETE FROM notif_mar_cmnd WHERE nmr_dossier=?",num , () => {
            affichcmnde();
        })
    }
})

function affichbudget () {
   // notif_budget = []
        // LA TAILLE 
        db.query("SELECT COUNT(*) AS taille FROM notif_cmnd_budg " , async (errr , resss) =>{
            if(errr){console.log(errr.message)}
            else{
                console.log("taille " ,resss[0].taille)
                taille = resss[0].taille
            }  
        })
        // RECUPERATION
        db.query("SELECT nmr_dossier FROM notif_cmnd_budg" , async (error , results) =>{
        if(error){console.log("ERR SELECT",error.message)}
        else {  
            console.log("taille 2 = " ,taille)
            for (let i = notif_budget.length; i > 0; i--) {
                notif_budget.pop();
              }
            for (let pas = 0; pas < taille ; pas++) { 
                notif_budget.push(results[pas].nmr_dossier)
            }
            console.log('budget fonction ',notif_budget);
        }
    })
    return notif_budget;
}
var notif_compt = []
router2.post('/budget/', (req, res) => {
    
    const dt2 = req.body.datetr
    const dt = req.body.date
    const rsp = req.body.respo
    const dtcf = req.body.datecf
    const dtvs = req.body.datevisa
    const dtmnd = req.body.datemend
    const mtf = req.body.motif
    const dsc = req.body.desc
    const ld = req.body.md 
    const numeroDoss = req.body.nm
    const send = req.body.env

    const sqlinsert = "UPDATE services SET `date_de_reception_sb`=? , `responsable_dossier_sb`=? , `date_dengagement_au_cf`=? , `date_de_Visa_ou_rejet_definitif_du_controleur_financier`=? , `date_de_mandatement`=? , `motif_de_rejet_eventuel_sb`=?, `observation_sb`=?, `date_de_transmission_au_ac`=?, `nmr_dossier_sb`=?, `duree_de_traitement_dossier_sb`=? where nmr_dossier_sm = "+ numeroDoss
    db.query(sqlinsert, [dt, rsp, dtcf, dtvs, dtmnd, mtf, dsc, dt2, numeroDoss, ld], async (error, results) => {
        if (error) {
            console.log('la 2: '+error.message)
        } else {
            console.log('infos registered')
        }
    })

    if (send == true){
        const num = numeroDoss
        var taille = 0
        console.log(num)
        var date = new Date();
        //
        db.query('UPDATE services SET budget_compt=? WHERE nmr_dossier_sm=?', [date , num] , async (eror,ress) => {
            if(eror) {console.log(eror.message)}
            else {console.log('INSERT')}
        })
        // INSERTION
        db.query('INSERT INTO notif_budg_cmpt SET nmr_dossier=?', [num] , async (err,ress) => {
            if(err) {console.log(err.message)}
            else {console.log('INSERT')}
        })
        // LA TAILLE 
        db.query("SELECT COUNT(*) AS taille FROM notif_budg_cmpt " , async (errr , resss) =>{
            if(errr){console.log(errr.message)}
            else{
                console.log("taille " ,resss[0].taille)
                taille = resss[0].taille
            }  
        })
         // RECUPERATION
         db.query("SELECT nmr_dossier FROM notif_budg_cmpt" , async (error , results) =>{
            if(error){console.log(error.message)}
            else {  
                console.log("taille 2 = " ,taille)
                if (notif_compt == []) {
                    for (let pas = 0; pas < taille ; pas++) { 
                        notif_compt.push(results[pas].nmr_dossier)
                    }
                }else{notif_compt.push(results[taille-1].nmr_dossier)}
                console.log("compt : ",notif_compt)
            }
        })
        // SUPPRESSION DE LA NOTIF DU SERVICE COURANT
        db.query("DELETE FROM notif_cmnd_budg WHERE nmr_dossier=?",num , () =>{
            affichbudget();
        })
    }
})

function affichcompt () {
    //notif_compt = []
        // LA TAILLE 
        db.query("SELECT COUNT(*) AS taille FROM notif_budg_cmpt " , async (errr , resss) =>{
            if(errr){console.log(errr.message)}
            else{
                console.log("taille " ,resss[0].taille)
                taille = resss[0].taille
            }  
        })
        // RECUPERATION
        db.query("SELECT nmr_dossier FROM notif_budg_cmpt" , async (error , results) =>{
        if(error){console.log("ERR SELECT",error.message)}
        else {  
            console.log("taille 2 = " ,taille)
            for (let i = notif_compt.length; i > 0; i--) {
                notif_compt.pop();
              }
            for (let pas = 0; pas < taille ; pas++) { 
                notif_compt.push(results[pas].nmr_dossier)
            }
            console.log('comptable fonction ',notif_compt);
        }
    })
    return notif_compt;
}

router2.post('/comptable/', (req, res) => {
    
    const cbn = req.body.cbn
    const dsscc = req.body.desiis
    const dt = req.body.date
    const rsp = req.body.respo
    const cmplt = req.body.completer
    const cmplmt = req.body.datecomplement
    const py = req.body.datepay
    const dsc = req.body.desc
    const ld = req.body.md 

    const numeroDoss = req.body.nm
    const send = req.body.env

    console.log(req.body)
    const sqlinsert = "UPDATE services SET `date_reception_ac`=? , `responsable_dossier_ac`=? , `pieces_a_completer`=? , `date_complement_dossier`=? , `date_de_paiment_ac`=? , `decision_acp_ou_rej_ac`=?, `nmr_dossier_ac`=?, `observation_ac`=?, `cbn`=?, `duree_de_traitement_ac`=? where nmr_dossier_sm = "+ numeroDoss
    db.query(sqlinsert, [dt, rsp, cmplt, cmplmt, py, dsscc, numeroDoss,dsc, cbn, ld], async (error, results) => {
        if (error) {
            console.log('la 2: '+error.message)
        } else {
            console.log('infos registered')
        }
    })

    if (send == true){
        const num = numeroDoss
        // SUPPRESSION DE LA NOTIF DU SERVICE COURANT
        db.query("DELETE FROM notif_budg_cmpt WHERE nmr_dossier=?",num , ()=>{
            affichcompt();
        })
    }
})


// NOUVEAU DOSSIER COMMANDE 
router2.post('/nouvcmnd',(req , res) => {
    var position = 0
    var taille2
    //INSERER DANS SERVICE MARCHE
    db.query("INSERT INTO services SET `nmr_dossier_sm`=DEFAULT " , (err , ress) => {
        if(err) {console.log(err.message)}
        else {console.log('INSERTION EFFECTUE')

    // RECUPERER POSITION 
    db.query(" SELECT nmr_dossier_sm FROM services WHERE nmr_dossier_sm = ( SELECT  MAX(`nmr_dossier_sm`) FROM services)" , async (errrr,resss) =>{
        if(errrr){console.log(errrr.message)}
        else{
             position = resss[0].nmr_dossier_sm
             //
             var date = new Date()
             var data = [20 , 10 , 5 , 5 , 'marche3' , date , position]
             db.query("UPDATE services SET duree1=? , duree2=? , duree3=? , duree4=? , type_de_prestation=? , march_cmnde=? , create_time=DEFAULT WHERE nmr_dossier_sm =?", data , (eror,results) => {
                 if(eror){console.log(eror.message)}
             })
             
             // AFFICHER DANS TABLE COMMANDE
             db.query("INSERT INTO notif_mar_cmnd SET `nmr_dossier`=?",[position], (errorr , rs) => {
                if(errorr) {console.log(errorr.message)}
                else{console.log('INSERTION COMMANDE')
                    // RECUPERER LA TAILLE DU COMMANDE 
                    db.query("SELECT COUNT(*) AS taille FROM notif_mar_cmnd " , async (errr , resss) =>{
                        if(errr){console.log(errr.message)}
                        else{
                            taille2 = resss[0].taille
                        }  
                    })
                // AFFICHER DANS L'APP
                    db.query("SELECT nmr_dossier FROM notif_mar_cmnd" , async (error , results) =>{
                        if(error){console.log(error.message)}
                        else {  
                            if (notif_cmnde == []) {
                                for (let pas = 0; pas < taille2 ; pas++) { 
                                notif_cmnde.push(results[pas].nmr_dossier)
                            }
                            }else{notif_cmnde.push(results[taille2-1].nmr_dossier)}
                                console.log("notif_cmnde : ",notif_cmnde)
                            }
                    }) 
                }
            })
            // INSERER DANS SERVICE COMMANDE
            db.query("UPDATE services SET `nmr_dossier_scm`=? WHERE nmr_dossier_sm =?" ,[position,position], (errrr , ressss) => {
            if(errrr) {console.log(errrr.message)}
            else {console.log('INSERTION SERVICE')}
            })
        }
    })     
 
    }
    })


})

/*router2.post('/archive/', (req, res) => {
    
    const numDs = req.body.nmds*/


/************************* */
router2.post('/cbn/', (req, res) => {
    
    const cbn = req.body.cbn
    const numeroDoss = req.body.numero
    const srv = req.body.srv

    const sqlinsert = "UPDATE services SET `cbn`=? where nmr_dossier_sm = "+ numeroDoss
    db.query(sqlinsert, [cbn], (error, results) => {
        if (error) {
            console.log('la 2: '+error.message)
        } else {
            console.log('cbn registered')
            /// axios de supp de notif
            if (srv == 'Mr'){
                db.query("DELETE FROM doss_marche WHERE nmr_dossier=?",numeroDoss, () => {
                    affichmarch();
                });
                
            }
            if (srv == 'Cm'){
                db.query("DELETE FROM notif_mar_cmnd WHERE nmr_dossier=?",numeroDoss, () => {
                    affichcmnde();
                })
            }
            if (srv == 'Bg'){
                db.query("DELETE FROM notif_cmnd_budg WHERE nmr_dossier=?",numeroDoss , () =>{
                    affichbudget();   
                })   
            }
            if (srv == 'Cp'){
                db.query("DELETE FROM notif_budg_cmpt WHERE nmr_dossier=?",numeroDoss ,() =>{
                    affichcompt();  
                })
            }
        }
    })
})

var notif_archv = []
function afficharchv () {
    const la = 1
    var c
    //notif_archv = []
        // LA TAILLE 
        db.query("SELECT COUNT(*) AS taille FROM services WHERE cbn = "+la , async (errr , resss) =>{
            if(errr){console.log(errr.message)}
            else{
                console.log("taille arr " ,resss[0].taille)
                taille = resss[0].taille
            }  
        })
        // RECUPERATION
        db.query("SELECT nmr_dossier_sm FROM services WHERE cbn = "+la , async (error , results) =>{
        if(error){console.log("ERR SELECT",error.message)}
        else {  
            console.log("taille 2 arr = " ,taille)
                for (let pas = 0; pas < taille ; pas++) {
                    c = 1
                    for (let pas2 = 0; pas2 < notif_archv.length ; pas2++) { 
                        if(results[pas].nmr_dossier_sm == notif_archv[pas2]) {c = 0}
                    } 
                    console.log(c)
                    if (c == 1){notif_archv.push(results[pas].nmr_dossier_sm)}
                }  
            console.log('archv fonction ',notif_archv);
        }
    })
    return notif_archv;
}

router2.post('/affch/', (req, res) => {
     notif_archv = afficharchv()
     
   // affichcmnde();
})

var infar = {}
router2.post('/archv/', async(req, res) => {

    const nm = req.body.nume

    infar.dateLanc = "",
    infar.dateOuv = "",
    infar.type = "",
    infar.objet = "",
    infar.four = "",
    infar.respo1 = "",
    infar.decis1 = "",
    infar.numConv = "",
    infar.obs1 = "",
    infar.dateTr1 = "",
    infar.duree = "",
    infar.dateRec1 = "",
    infar.respo2 = "",
    infar.decis2 = "",
    infar.obs2 = "",
    infar.numFac = "",
    infar.dateFac = "",
    infar.montant = "",
    infar.numBon = "",
    infar.dateRecPr = "",
    infar.numFacDef = "",
    infar.numBonRec = "",
    infar.dateTr2 = "",
    infar.duree2 = "",
    infar.dateRec2 = "",
    infar.respo3 = "",
    infar.obs3 = "",
    infar.dateCF = "",
    infar.motif = "",
    infar.dateVisa = "",
    infar.dateMend = "",
    infar.dateTr3 = "",
    infar.duree3 = "",
    infar.dateRec3 = "",
    infar.respo4 = "",
    infar.decis3 = "",
    infar.piece = "",
    infar.dateCompl = "",
    infar.datePay = "",
    infar.obs4 = "",
    infar.dateTr4 = "",
    infar.duree4 = "",

    //console.log("laaa ca marche !!")
    afficharchv ()
    db.query('SELECT * FROM services WHERE nmr_dossier_sm = ?', [nm], async (error, results) => {
        if (error) {
            console.log(error.message)
        } else{ console.log(results[0])}
        if ( (results.length == 0) ) {
            console.log('pas de dossiers termines !!')
        } else {
            /////////
            ////////

            infar.dateLanc = results[0].date_de_lancement_sm
            infar.dateOuv = results[0].date_douverture_sm,
            infar.type = results[0].type_de_prestation
            infar.objet = results[0].objet
            infar.four = results[0].fournisseur
            infar.respo1 = results[0].responsable_de_dossier_sm
            infar.decis1 = results[0].decision_sm
            infar.numConv = results[0].nmr_de_convention
            infar.obs1 = results[0].observation_sm
            infar.dateTr1 = results[0].date_de_transmission_au_scm
            infar.duree = results[0].duree1
            infar.dateRec1 = results[0].date_de_reception_scm
            infar.respo2 = results[0].responsable_dossier_scm
            infar.decis2 = results[0].decision_scm
            infar.obs2 = results[0].observation_scm
            infar.numFac = results[0].nmr_facture_proforma_scm
            infar.dateFac = results[0].date_facture_proforma_scm
            infar.montant = results[0].montant_scm
            infar.numBon = results[0].nmr_bon_commande
            infar.dateRecPr = results[0].date_de_reception_de_la_prestation
            infar.numFacDef = results[0].nmr_facture_difinitive_scm
            infar.numBonRec = results[0].nmr_de_bon_de_reception_scm
            infar.dateTr2 = results[0].date_denvoi_au_sb
            infar.duree2 = results[0].duree2
            infar.dateRec2 = results[0].date_de_reception_sb
            infar.respo3 = results[0]. responsable_dossier_sb
            infar.obs3 = results[0].observation_sb
            infar.dateCF = results[0].date_dengagement_au_cf
            infar.motif = results[0].motif_de_rejet_eventuel_sb
            infar.dateVisa = results[0].date_de_Visa_ou_rejet_definitif_du_controleur_financier 
            infar.dateMend = results[0].date_de_mandatement
            infar.dateTr3 = results[0].date_de_transmission_au_ac
            infar.duree3 = results[0].duree3
            infar.dateRec3 = results[0].date_reception_ac
            infar.respo4 = results[0].responsable_dossier_ac
            infar.decis3 = results[0].decision_acp_ou_rej_ac 
            infar.piece = results[0].pieces_a_completer
            infar.dateCompl = results[0].date_complement_dossier
            infar.datePay = results[0].date_de_paiment_ac
            infar.obs4 = results[0].observation_ac
            infar.dateTr4 = results[0].duree_de_traitement_ac
            infar.duree4 = results[0].duree4
            console.log(infar)
        }
    })
})
/***************************** */
var inf = {}
router2.post('/recup/', (req, res) => {
    const num = req.body.numero
    inf.type = ""
    inf.dateTr =""
    inf.decis1 = ""
    inf.num = ""
    inf.desc = ""
    inf.respo1 =""
    inf.four = ""
    inf.objt = ""
    //
    inf.decis2 = ""
    inf.dateFacPe =  ""
    inf.numFacPer =  ""
    inf.numFacDef = ""
    inf.respo2 =  ""
    inf.numCom =   ""
    inf.dateCom =""
    inf.montant =""
    inf.datePr = ""
    inf.numBonRec =""
    inf.dateTr2 = ""
    inf.desc2 = ""
    //
    inf.dateCF =  ""
    inf.dateVisa = ""
    inf.dateMend =""
    inf.respo3 =""
    inf.dateRec2 = ""
    inf.motif = ""
    inf.dateTr3 = ""
    inf.desc3 = ""
    //
    inf.completer = ""
    inf.dateComplement = ""
    inf.datePay =""
    inf.decis4 =""
    inf.respo4 = ""
    inf.desc4 = ""
    db.query('SELECT * FROM services WHERE nmr_dossier_sm = ?', [num], async (error, results) => {
        if (error) {
            console.log(error.message)
        } else{ 
            /////////
            inf.type = results[0].type_de_prestation
            inf.dateTr = results[0].date_de_transmission_au_scm
            inf.decis1 =  results[0].decision_sm
            inf.num = results[0].nmr_de_convention
            inf.desc = results[0].observation_sm,
            inf.respo1 = results[0].responsable_de_dossier_sm
            inf.four = results[0].fournisseur
            inf.objt = results[0].objet
            inf.duree1 = results[0].duree1
            ////////
            inf.decis2 = results[0].decision_scm
            inf.dateFacPe = results[0].date_facture_proforma_scm
            inf.numFacPer = results[0].nmr_facture_proforma_scm
            inf.numFacDef = results[0].nmr_facture_difinitive_scm
            inf.respo2 = results[0].responsable_dossier_scm
            inf.numCom =  results[0].nmr_bon_commande
            inf.dateCom = results[0].date_de_reception_scm
            inf.montant = results[0].montant_scm
            inf.datePr = results[0].date_de_reception_de_la_prestation
            inf.numBonRec = results[0].nmr_de_bon_de_reception_scm
            inf.dateTr2 = results[0].date_denvoi_au_sb
            inf.desc2 = results[0].observation_scm
            inf.duree2 = results[0].duree2
            ////////
            inf.dateCF =  results[0].date_dengagement_au_cf
            inf.dateVisa = results[0].date_de_Visa_ou_rejet_definitif_du_controleur_financier 
            inf.dateMend = results[0].date_de_mandatement
            inf.respo3 = results[0]. responsable_dossier_sb
            inf.dateRec2 =  results[0].date_de_reception_sb
            inf.motif = results[0].motif_de_rejet_eventuel_sb
            inf.dateTr3 = results[0].date_de_transmission_au_ac
            inf.desc3 = results[0].observation_sb
            inf.duree3 = results[0].duree3
            //////////
            inf.completer =  results[0].pieces_a_completer
            inf.dateComplement = results[0].date_complement_dossier
            inf.datePay = results[0].date_de_paiment_ac
            inf.decis4 = results[0].decision_acp_ou_rej_ac
            inf.respo4 = results[0].responsable_dossier_ac
            inf.desc4 = results[0].observation_ac
            inf.duree4 = results[0].duree4
            const DATE_FORMATER = require( 'dateformat' );
            inf.create = DATE_FORMATER( results[0].create_time, "yyyy-mm-dd" )
            /////////
            inf.date2=DATE_FORMATER( results[0].march_cmnde, "yyyy-mm-dd" )
            inf.date3=DATE_FORMATER( results[0].cmnde_budget, "yyyy-mm-dd" )
            inf.date4=DATE_FORMATER( results[0].budget_compt, "yyyy-mm-dd" )
            /////////
            console.log('RESULT ',inf)

        }
    })
})

/***************************** */

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Utilisation
//La variable contient un nombre aléatoire compris entre 1 et 10
var code = entierAleatoire(2000, 9999);
var object = {}
object.code = code
var reponses = {}
router2.post('/forgot/', (req, res) => {

    const adrss_email = req.body.mail
    reponses.valide = ''

    console.log('heooo',adrss_email,'//',code)

    db.query('SELECT * FROM user WHERE email = ?', [adrss_email], async (error, results) => {
        if (error) {
            console.log(error.message)
        }
        if (results.length == 0) {
            reponses.valide = 'inexistant !!'
            console.log('inexistant !!')
        } else {
            reponses.valide = 'entrer le code de confirmation'
            console.log('entrer le code de confirmation')
            //send//// ENVOYER ET VERIFIER
            const transport = nodemailer.createTransport({
                host : 'smtp.gmail.com',//process.env.MAIL_HOST,
                port : process.env.MAIL_PORT, 
                auth: {
                    pass : process.env.MAIL_PASS,
                    user : process.env.MAIL_USER
                }
            })
            var objet = "Code de confirmation "
            var message = {
                from : process.env.MAIL_FROM, 
                to : "hasnizoumata@gmail.com", 
                subject : objet,
               /* html : `<p>Salut,<br>voici votre code de confirmation : </p><h1> 
                <script type="text/javascript">
                   document.write(code)
                </script>
             </h1><br>Cordialement.`*/
                text: 'Salut, voici votre code de confirmation: '+code
            };
            //`+{code}+`
            await transport.sendMail(message, (err,res) => {
            if(err){console.log('hii: ',err.message)}
            else{console.log('BIEN CONNECTE')}
            })
        }
    })
})

router2.post('/code/', (req, res) => {

    const code_confirmation = req.body.cc
    reponses.ccval = ''

    console.log('heooo')

    if (code_confirmation == code){
        reponses.ccval = 'Entrer le nouveau mot de passe'
        console.log('Entrer le nouveau mot de passe')
    } else {
        reponses.ccval = 'Faux code de confirmation !!'
        console.log('Faux code de confirmation !!')
    }
})

router2.post('/newpsswrd/', async (req, res) => {

    reponses.trmn = ''
    const newpsswrd = req.body.newpsswrd
    const adrss_email = req.body.mail

    const hashednewpsswrd = await bcrypt.hash( newpsswrd, 8)
    console.log('mot de passe: ',hashednewpsswrd , adrss_email)   
    
    db.query("UPDATE user SET password=? WHERE email=?",[hashednewpsswrd,adrss_email] ,(err,ress) => {
        if(err){console.log(err.message)}
        else{                    console.log('new password registered')
            reponses.trmn = 'mot de passe mis à jour avec succés'
        }
    }) 
})

/*router2.post('http://localhost:3006/check', (req, res) => {*/

affichmarch();
notif_cmnde = affichcmnde();
notif_budget = affichbudget();
notif_compt = affichcompt();
notif_archv = afficharchv ()
module.exports ={router2 , nmrDoss , resDoss , notif_cmnde , notif_budget , notif_compt , notif_archv , infar , inf }