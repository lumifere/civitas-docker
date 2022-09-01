import Intro from "../Intro";
import Main from '../../assets/main.png';
import './style.css';

function Inicial() {
    return (
        <div className="inicial">
            <Intro/>
            <div className="inicial_img">   
                <img src={Main} alt="tela app home" />
            </div>
        </div>
    );
}

export default Inicial;