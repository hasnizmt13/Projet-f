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


// NOTIFICATION
router.post('/send', async(req,res) => {
    let numdoss = req.body.nm
    // OBJET DU MAIL
    const all = require('./users')
    const info = all.info
    //var email = info.email
    var email_tab = []
    var service = info.service
    var objet = "Service ".concat(service)
    //console.log(email)
    // CHERCHER LES EMAIL POUR LES ENVOYER MAILS 
    db.query('SELECT email FROM user WHERE service=?',[service] , (err , ress) => {
        if(err){console.log(err.message)}
        else{ress = email_tab}
    })
    console.log('Objet ',objet)
    console.log('Tab ',email_tab)

    const transport = nodemailer.createTransport({
        host : process.env.MAIL_HOST,
        port : process.env.MAIL_PORT, 
        auth: {
            pass : process.env.MAIL_PASS,
            user : process.env.MAIL_USER
        }
    })
    var message = {
        from : process.env.MAIL_FROM,
        to : "esi313131@gmail.com", 
        subject : objet,
        html : `<p>Salut, <br><br>Un dossier est pret pour étre traiter.</p>
        Merci de le consulter<br>.
        Cordialement.`
    };
    // ENVOYER ET VERIFIER
    await transport.sendMail(message, (err,res) => {
        if(err){console.log(err.message)}
        else{console.log('BUEN CONNECTE')}
    })
})

module.exports = {router}