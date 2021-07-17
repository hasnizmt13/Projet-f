const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const bcrypt = require('bcryptjs')
const router = express.Router()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'projet_bdd'
})
var infousers = []
router.post('/userAdmin/', (req , res) => {
    //TAILLE
    db.query("SELECT COUNT(*) AS taille FROM user " , async (errr , resss) =>{
        if(errr){console.log(errr.message)}
        else{
        console.log("taille doss" ,resss[0].taille)
        taille = resss[0].taille
        }  
    })
    db.query('SELECT * FROM user', (err,result) => {
        if(err){console.log(err.message)}
        else{
                       
            for (let pas = 0; pas < taille ; pas++) { 
                infousers[pas] = [ result[pas].nom , result[pas].email , result[pas].type , result[pas].service , result[pas].prenom]
            }
            console.log(infousers)
           // infousers = result
        }
    })
})
var taille
function Affichuser(){ 
    //TAILLE
    db.query("SELECT COUNT(*) AS taille FROM user " , async (errr , resss) =>{
        if(errr){console.log(errr.message)}
        else{
        console.log("taille doss" ,resss[0].taille)
        taille = resss[0].taille
        }  
    })
    db.query('SELECT * FROM user', (err,result) => {
        if(err){console.log(err.message)}
        else{          
            for (let i = infousers.length; i > 0; i--) {
                infousers.pop();
              }
            for (let pas = 0; pas < taille ; pas++) { 
                infousers[pas] = [ result[pas].nom , result[pas].email , result[pas].type , result[pas].service , result[pas].prenom ]
            }
            console.log(infousers)
           // infousers = result
        }
    })
    return infousers
}
Affichuser()
module.exports = {router , infousers ,Affichuser}