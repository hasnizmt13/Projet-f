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

router.post('/mdpsse' , async (req,res) =>{
    const pass = req.body.pass
    const pass1 = req.body.pass1
    const pass2 = req.body.pass2
    
    console.log('body',req.body)
    var test

    const all = require('./users')
    const info = all.info
    const email = info.email
    console.log('email',email)

    db.query("SELECT password FROM user WHERE email=?",[email] , async (err,ress) => {
        if(err){console.log(err.message)}
        else{
                test = ress[0].password
                if(  (await bcrypt.compare(pass, ress[0].password)) )
                {
                    if(pass1 == pass2)
                    {
                        const hashedpsswrd3 = await bcrypt.hash(pass1, 8)
                        console.log(hashedpsswrd3)
                        db.query("UPDATE user SET `password`=? WHERE email=?",[hashedpsswrd3,email] ,(errr,resss) =>{
                            if(errr){console.log(errr.message)}
                            else{console.log('mdpd')}
                        }) 
                    }
                    else{console.log('mot de passe non egaux')}
                }                
                else{console.log('Mot de passe de bdd non egaux')}
        }
    })

})

router.post('/infoprm', (req,res) => {
    const nom = req.body.nom
    const prenom = req.body.prenom
    const adr = req.body.adr

    const all = require('./users')
    const info = all.info
    const email = info.email
    console.log(req.body)
    console.log('email',email)

    if (nom !== '')
    {
        db.query("UPDATE user SET nom=? WHERE email=?",[nom,email] ,(err,ress) => {
            if(err){console.log(err.message)}
            else{console.log('c bon 1')}
        })  
    }
    if (prenom !== '')
    {
        db.query("UPDATE user SET prenom=? WHERE email=?",[prenom,email] ,(errr,resss) => {
            if(errr){console.log(errr.message)}
            else{console.log('c bon 2')}
        })  
    }
    // if (adr !== '')
    // {
    //     db.query("UPDATE user SET email=? WHERE email=?",[adr,email] ,(errrr,ressss) => {
    //         if(errrr){console.log(errrr.message)}
    //         else{console.log('c bon 3')}
    //     })  
    // }
})
module.exports = {router}