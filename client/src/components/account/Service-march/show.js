import './Style_sheet.css'
import Prf from "./Prfimg.js"
const Show = () => {
    return (
        <div className="notification-list">
            <div class="section">
                <a href="" class="profContsec" >
                    <div class="profCont">
                        <Prf />
                    </div>
                    <div className="profConttxt">
                        <div class="txt">notification numero 1</div>
                        <div class="txt-sub">11/5 - 1:34 pm</div>
                    </div>
                </a>
            </div>
            <div class="section">
                <a href="" class="profContsec">
                    <div class="profCont">
                        <Prf />
                    </div>
                    <div class="profConttxt">
                        <div class="txt">notification numero 2</div>
                        <div class="txt-sub">11/5 - 12:06pm</div>
                    </div>
                </a>
            </div>
            <div class="section">
                <a href="" class="profContsec">
                    <div class="profCont">
                        <Prf />
                    </div>
                    <div class="profConttxt">
                        <div class="txt">notification numero 3</div>
                        <div class="txt-sub">11/5 -10:20 am</div>
                    </div>

                </a>
            </div>
            <div class="section">
                <a href="" class="profContsec">
                    <div class="profCont">
                        <Prf />
                    </div>
                    <div class="profConttxt">
                        <div class="txt">notification numero 4</div>
                        <div class="txt-sub">11/5 - 14:20 am</div>
                    </div>

                </a>
            </div>
            <div class="section">
                <a href="" class="profContsec">
                    <div class="profCont">
                        <Prf />
                    </div>
                    <div class="profConttxt">
                        <div class="txt">notification numero 5</div>
                        <div class="txt-sub">11/5 -20:20 am</div>
                    </div>

                </a>
            </div>

        </div>
    );

};
export default Show;