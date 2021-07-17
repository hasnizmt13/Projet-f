import "../services/commun/Style_sheet.css"
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
const dossier1 = {
    num: '1',
    service: 'marché',
    datecreation: '15/06/2021',
    datelimite: '30/06/2021',
    avancement: '25',
};

const dossier2 = {
    num: '2',
    service: 'Commande',
    datecreation: '15/06/2021',
    datelimite: '30/06/2021',
    avancement: '30',
    path: "/commande-form/"
};
const dossier3 = {
    num: '3',
    service: 'Comptabilité',
    datecreation: '15/06/2021',
    datelimite: '30/06/2021',
    avancement: '30',
    path: "/commande-form/"
};
const dossier4 = {
    num: '4',
    service: 'Commande',
    datecreation: '15/06/2021',
    datelimite: '30/06/2021',
    avancement: '45',
    path: "/commande-form/"
};
const dossier5 = {
    num: '5',
    service: 'budget',
    datecreation: '15/06/2021',
    datelimite: '30/06/2021',
    avancement: '64',
    path: "/commande-form/"
};
const dossier6 = {
    num: '6',
    service: 'comptabilité',
    datecreation: '15/06/2021',
    datelimite: '30/06/2021',
    avancement: '30',
    path: "/commande-form/"
};
const NumMARCH = [ dossier6, dossier1];
const NumCommande = [dossier1, dossier2, dossier3];
const Numbudget = [dossier1];
const Numcomptabilité = [ dossier6, dossier1];
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

const Dossiers = () => {

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