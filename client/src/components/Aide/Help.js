import { useState } from "react";
import "../services/commun//Style_sheet.css"
import EPage from "./Epage";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import FfPage from "./FfPage";
import FPage from "./FPage";
import TPage from "./TPage";
const Help = () => {
    const images = [
        <FirstPage />, <SecondPage />, <TPage />, <FPage />, <FfPage />, <EPage />
    ];
    const [page, setpage] = useState(0);
    let etatP = true;
    let etatS = true;
    if (page == 0) { etatP = false; }
    else { etatP = true }
    if (page == (images.length - 1)) { etatS = false }
    else { etatS = true }
    return (
        <div className="partie-milieu">
            <div class="Aide">


                {images[page]}
                <div className="bouton-pre-suiv">
                    <div className="switch">
                        {etatP && (<button onClick={() => { setpage(page => page - 1) }}>
                            <p>précédent</p>
                        </button>)}
                    </div>
                    <div className="switch">
                        {
                            etatS && (<button onClick={() => setpage(page => page + 1)}>
                                <p> suivant</p></button>)
                        }
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Help;