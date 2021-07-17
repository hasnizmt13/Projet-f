import '../../services/commun/Style_sheet.css'
import React, { useState, useEffect, useRef } from "react";
import Utilisateur from "../Commun/Utilisateur"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Snackbar from '@material-ui/core/Snackbar';//this
import MuiAlert from '@material-ui/lab/Alert';//this
import { makeStyles } from '@material-ui/core/styles';//this
function Alert(props) {//from here 
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',

        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));
let useClickOutside = (handler1) => {
    let menutri = useRef();
    useEffect(() => {
        let handler = (event) => {
            if (!menutri.current.contains(event.target)) {
                handler1();
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return menutri;
}


const MilieuAdmin = () => {
    const classes = useStyles();//copy this too
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const [pa, setPa] = useState(1)
    const [tab, setTab] = useState([])
    const [incld, setincld] = React.useState("");
    useEffect(() => {
        fetch("/infoUser/").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined) {
                setTab(jsonRes.infoUser.user)
                setPa(2)
                console.log(tab)
            }


        })


    },[pa])

    const [trier, settrier] = useState(false);
    let menutri = useClickOutside(() => {
        settrier(false);
    }
    )
    function sortname(y) {
        settrier(!trier);
        if (y == "nom") {
            setTab(tab.sort(
                (a, b) => a[0].localeCompare(b[0])
            ));
        }
        if (y == "prénom") {
            setTab(tab.sort(
                (a, b) => a[4].localeCompare(b[1])
            ));
        }
        if (y == "service") {
            setTab(tab.sort(
                (a, b) => a[3].localeCompare(b[3])
            ));

        }

    }
    return (
        <div className="partie-milieu">
            <Snackbar className={classes.root} open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Le compte à été bien supprimé!
                </Alert>
            </Snackbar>
            <h3> Bienvenue dans votre espace de travail Administrateur !</h3>
            <p></p>
            <div className="content-marche">
                <div className="btn-contain">
                    <a href="/signup" className="nouveau">
                        <button className="new">
                            <p>Céer un Compte</p>
                        </button>
                    </a>
                    <div className="searchbar">
                        <form class="example" >
                            <input type="text" value={incld} placeholder="   Rechercher.." name="search2" onChange={(e) => setincld(e.target.value.toLowerCase())} />
                            <button type="submit" className="button"><FontAwesomeIcon icon={faSearch} className="icon" /></button>
                        </form>
                    </div>
                </div>

                <div className="titre-nouveau">
                    <p className="titresec">Vos dossiers en cours:</p>
                    <div className="tri">
                        <p>Trier</p>
                        <span className="icon" onClick={() => settrier(trier => !trier)}>
                            <FontAwesomeIcon icon={faCaretDown} className="icon" />
                        </span>
                    </div>
                </div>
                <div ref={menutri}>
                    {trier && (<div className="tri-menu">
                        <ul className="list-tri">
                            <li className="item-tri" onClick={() => sortname("nom")} >
                                par nom
                            </li>
                            <li className="item-tri" onClick={() => sortname("prénom")} >
                                par prénom
                            </li>
                            <li className="item-tri" onClick={() => sortname("service")} >
                                par service
                            </li>

                        </ul>

                    </div>)}
                </div>
                <div className="titles">
                    <p>Compte utilisateur</p>
                    <p>service</p>
                    <p className="final">Modifier</p>
                </div>

                {
                    tab.filter(n => (n[1].toLowerCase().includes(incld) || n[2].toLowerCase().includes(incld) || n[3].toLowerCase().includes(incld) || n[4].toLowerCase().includes(incld))).map((n) => {
                        return <Utilisateur userInfo={n} handleClick={handleClick} />

                    })

                }


            </div>


        </div>


    );

};
export default MilieuAdmin;