import "./Style_sheet.css"
const Trier = () => {
    return (
        <div className="tri-menu">
            <ul className="list-tri">
                <li className="item-tri">
                    par date de création
               </li >
                <li className="item-tri">
                    par date limite
               </li>
                <li className="item-tri">
                    par Numéro de dossier
               </li>
            </ul>
        </div>
    )
}
export default Trier;