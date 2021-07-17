import "../services/commun/Style_sheet.css"
import React from 'react';
import { Bar, PolarArea } from 'react-chartjs-2';
const user1 = {
    nom: 'Khedir meriem',
    email: 'email@gmail.com',
    role: "editeur",
    service: 'Administrateur'
};
const user2 = {
    nom: 'Cylia messar',
    email: 'email@gmail.com',
    role: "editeur",
    service: 'marché'
};
const user3 = {
    nom: 'Morad Larbi',
    email: 'email@gmail.com',
    role: "editeur",
    service: 'commande'
};
const user4 = {
    nom: 'Hasni Zoumata',
    email: 'email@gmail.com',
    role: "consultateur",
    service: 'comptabilité'
};
const user5 = {
    nom: 'Hasni Zoumata',
    email: 'email@gmail.com',
    role: "editeur",
    service: 'comptabilité'
};
const user6 = {
    nom: 'Saad Dahmani',
    email: 'email@gmail.com',
    role: "consultateur",
    service: 'marché'
};
const user7 = {
    nom: 'Koudil Mouloud',
    email: 'email@gmail.com',
    role: "editeur",
    service: 'Ordonnateur'
};
const user8 = {
    nom: 'Koudil Mouloud',
    email: 'email@gmail.com',
    role: "editeur",
    service: 'Budget'
};
let tab = [user1, user2, user3, user4, user5, user6, user7, user8];
function nombreserv(y) {
    let x = 0;
    tab.map((n) => {
        if (y == n.service) {
            x++;
        }
    })
    return x;

}
function nombrerole(y) {
    let x = 0;
    tab.map((n) => {
        if (y.toLocaleLowerCase() == n.role.toLocaleLowerCase()) {
            x++;
        }
    })
    return x;

}
const state = {
    labels: ['Marché', 'commande', 'budget', 'comptabilité',
        'Administrateur', 'Ordonnateur'],
    datasets: [
        {
            label: "Nombre d'utilisateur par service",
            backgroundColor: ['#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#A3CAE5',
                '#1F234E',
            ],
            data: [nombreserv('marché'), nombreserv('commande'), nombreserv('budget'), nombreserv('comptabilité'), nombreserv('Administrateur'), nombreserv('Ordonnateur')]

        }
    ]

}
const state2 = {
    labels: ['Consultateur', 'Editeur'],
    datasets: [
        {
            label: '',
            backgroundColor: [
                '#EE66D8',
                '#1F234E',
            ],
            borderColor: '#1F234E',
            borderWidth: 0.5,
            data: [nombrerole('consultateur'), nombrerole('editeur')]

        }
    ]

}

const Userstat = () => {

    return (
        <div className="partie-milieu">
            <div>
                <h3>Nombre d'utilisateurs par service :</h3>
            </div>
            <div >
                <div className="satat">
                    <PolarArea
                        data={state}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'top',
                                },
                                title: {
                                    display: false,

                                }
                            }
                        }}
                    />
                </div>
                <div>
                    <h3>Nombre d'utilisateurs par role :</h3>
                </div>
                <div className="satat">
                    <Bar
                        data={state2}
                        options={{
                            label: {
                                display: false,
                            },
                            title: {
                                display: true,
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


        </div>
    )
}

export default Userstat;