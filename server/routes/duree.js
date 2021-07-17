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


var duree = {}
router.post('/duree/', (req,res) =>{
    const num = req.body.num
    const duree1 = req.body.duree1
    const duree2 = req.body.duree2
    const duree3 = req.body.duree3
    const duree4 = req.body.duree4
    console.log(num)
    var data = [duree1 , duree2 , duree3 , duree4 , num]
    db.query("UPDATE services SET duree1=? , duree2=? , duree3=? , duree4=? WHERE nmr_dossier_sm =?", data , (err,results) => {
        if(err){console.log(err.message)}
    })
   /* db.query('select * from user',(error , ress)=>{
        const DATE_FORMATER = require( 'dateformat' );
        console.log(DATE_FORMATER( ress[0].create_time, "yyyy-mm-dd" ))

    })*/
})
module.exports = {router , duree }