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

router.post('/supp' , async (req,res) =>{
    const info = req.body.info
    const email = info[1]
    //console.log(email)

    db.query("DELETE FROM user WHERE email=?",email,(err,results) =>{
        if(err){console.log(err.message)}
        else{   
            db.query("SELECT * FROM user")
            const all = require('./usersAdmin')
            all.Affichuser();
    }
    })
})

module.exports = {router}