import "../services/commun/Style_sheet.css"
import {useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const Dossiers = () => {
    const [t, setT] = useState(1)
const [NumMARCH, setNumMARCH] = useState([])
const [NumCommande, setNumCommande] = useState([])
const [Numbudget, setNumbudget] = useState([])
const [Numcomptabilité, setNumcomptabilité] = useState([])
  

    useEffect(() => {
        fetch("/infor/").then( res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined){
                setNumMARCH(jsonRes.infor.marcheDoss)
                setNumCommande(jsonRes.infor.commandeDoss)
                setNumbudget(jsonRes.infor.budgetDoss)
                setNumcomptabilité(jsonRes.infor.comptableDoss)
                setT(0)
            }   
        })
    },[t])
    const state = {
        labels: ['Marché', 'commande', 'comptabilité',
            'budget'],
        datasets: [
            {
                label: '',
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4'
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350'
                ],
                data: [NumMARCH.length, NumCommande.length, Numcomptabilité.length, Numbudget.length],
                height: 150,
                width: 300,
            }
        ]
    }
    return (
        <div className="partie-milieu">
            <div>
                <h3> Nombre de dossiers dans chaque service :</h3>
            </div>
            <div className="page-stat">
                <Doughnut
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 14
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        </div>


    )
}

export default Dossiers;