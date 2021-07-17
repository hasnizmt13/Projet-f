const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const bcrypt = require('bcryptjs')
const router = express.Router()
const nodemailer = require('nodemailer')
require('dotenv').config()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'projet_bdd'
})
var erreur = {}
router.post('/signup/', (req, res) => {
    const nm = req.body.nom
    const prnm = req.body.prenom
    const adrss_email = req.body.e_mail 
    const mp = req.body.mdpss
    const mp2 = req.body.mdpss2
    const srv = req.body.srvc
    const type = req.body.tp 
    erreur.username = ''
    erreur.useprenom = ''
    erreur.email = ''
    erreur.role = ''
    erreur.type = ''
    erreur.password = ''
    erreur.password2 = ''
    //console.log(req.body)
    // VERIFIE LES CHAMPS 
    if (!nm){
        erreur.username = 'Nom est requit'
        console.log('un champs est vide ')
    }
    if(!prnm){
        erreur.userprenom = 'Prenom est requit'
        console.log('prenom est requit ')
    }
    if(!adrss_email){
        erreur.email = 'email est requit'
        console.log('email est vide ')
    }
    if(!srv){
        erreur.role = 'Role est requit'
        console.log('prenom est vide ')
    }
    if(!type){
        erreur.type = 'Type est requit'
        console.log('prenom est vide ')
    }
    if(!mp){
        erreur.password = 'Mot de passe est requit'
        console.log('prenom est vide ')
    }
    if(!mp2){
        erreur.password2 = 'Mot de passe de confirmation est requit'
        console.log('prenom est vide ')
    }
    // VERIFIE L'ADRESSE EMAIL
    if (!/\S+@\S+\.\S+/.test(adrss_email)){
        erreur.email = 'Email invalid'
        console.log('EMAIL INVALID')
    }
    // VERIFIER L'ADRESSE EMAIL ET LE MOT DE PASSE 
    else {
        db.query('SELECT email FROM user WHERE email = ?', [adrss_email], async (error, results) => {
            if (error) {console.log('la 1: '+error.message)}

            if (results.length > 0) {

                erreur.email = 'EXISTE DEJA ';
                console.log("existe deja")
                ////
                ////
            }      
            if (mp.length < 8){
                erreur.password = 'MOT DE PASS Au moins 8 CARATERER'
                 console.log('MOT DE PASS 8 CARATERER')
            }
            if (mp != mp2){
                erreur.password2 = 'MOT DE PASS Incorrect'
                console.log('MOT DE PASSE INCORRECT ')
            }
            if (mp != mp2 || results.length > 0 || mp.length <8){
                console.log('erreur de creation du compte')
            }
            else {
                const hashedpsswrd = await bcrypt.hash( mp, 8)
                const sqlinsert = "INSERT INTO user SET id_user = DEFAULT ,nom=? , prenom=? , email=? , password=? , service=? , type=? ,create_time=DEFAULT"
                db.query(sqlinsert, [nm, prnm, adrss_email, hashedpsswrd, srv, type], (error, results) => {
                    if (error) {
                        console.log('la 2: '+error.message)
                    } else {
                        console.log('user registered')
                        const all = require('./usersAdmin')
                        //const info = all.Affichuser
                        all.Affichuser();
                    }
                })
            }
        })
    }
})
var errors = {}
var info = {}
router.post('/login/', async (req, res) => {
    const adrss_email = req.body.e_mail 
    const mp = req.body.mdpss

    console.log(req.body)
    // VERIFIE LES CHAMPS 
    errors.email = ''
    errors.password = ''

    info.id = ''
    info.nom = ''
    info.prenom = ''
    info.email = ''
    info.psswrd = ''
    info.service = ''
    info.role = ''
    info.CT = ''

    if (!adrss_email ){
        errors.email = 'email est vide';
        return console.log(errors.email)
    }
    if (!mp){
        errors.password = "mot de passe vide";
        return console.log(errors.password)
        
    }
    db.query('SELECT * FROM user WHERE email = ?', [adrss_email], async (error, results) => {
        if (error) {
            console.log(error.message)
        }
        if ( (results.length == 0) || !(await bcrypt.compare(mp, results[0].password)) ) {
            errors.email = 'inexistant !!'
            console.log(errors.email)
        } else {
            /////////
            ////////
            info.id = results[0].id_user
            info.nom = results[0].nom
            info.prenom = results[0].prenom
            info.email = results[0].email
            info.psswrd = results[0].password
            info.service = results[0].service
            info.role = results[0].type
            info.CT = results[0].create_time
            
            console.log('WELCOME TO YOUR PROFILE')
        }
    })
})



module.exports = {router, errors, erreur, info}