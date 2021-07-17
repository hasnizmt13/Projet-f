import { NavLink } from 'react-router-dom'
import './Style_sheet.css'
const Navelem = ({ serviceinfo }) => {

    return (
        <nav className="resp">
            <ul className="resp-nav">
                <li className="elemresp" >
                    <NavLink exact to={serviceinfo} className="link" activeClassName="active">Mon service</NavLink>
                </li>
                <li className="elemresp"  >
                    <NavLink exact to='./archive' className="link" activeClassName="active" >Archive</NavLink>
                </li>
                <li className="elemresp">
                    <NavLink exact to='./statistiques' className="link" activeClassName="active">Statistiques</NavLink>
                </li>
                <li className="elemresp" >
                    <NavLink exact to='/Aide' className="link" activeClassName="active">Aide en ligne</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navelem;
/*
 const [appstate, setappstate] = useState(null);
    function toggleactive(index) {
        setappstate(table[index]);
    }
    function toggleactivestyle(index) {
        if (appstate === table[index]) {
            return ("elemresp active");
        } else {
            return ("elemresp");
        }

    }
<li key={index} className={toggleactivestyle(index)} onClick={() => { toggleactive(index); }}>
*/
/*
 function toggle() {
        var btns=document.getElementsByClassName("resp-nav").getElementsByClassName("elemresp");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }

    }*/
/* function table() {
    return (document.getElementsByClassName("resp-nav").getElementsByClassName("elemresp"))
}
function toggle() {
    for (var i = 0; i < table.length; i++) {
        table[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("elemresp active");
            current.className = current.className.replace("elemresp active", "elemresp");
            this.className += " active";
        });
    }

}*/