import './Style_sheet.css'
import Not from "../../Notification/Notification.js"
const Show = ({ num }) => {
    return (
        <div className="notification-list">
            <div class="section">
                <div className="profConttxt">
                    <Not num={num} />
                </div>
            </div>
        </div>
    );

};
export default Show;