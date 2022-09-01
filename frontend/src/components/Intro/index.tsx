import Form from "../Form";
import Titulo from "../Titulo";
import Apple from "../../assets/appstore.svg"
import Google from "../../assets/playstore.svg"
import "./style.css";

function Intro() {
    return (
        <div className="inicial_intro">
            <Titulo />
            <Form />
            <h3 className="inicial_download1">Baixe agora o aplicativo!</h3>
            <div className="inicial_download2">
                <a href="https://www.apple.com/br/app-store/"><img src={Apple} alt="appstore" /></a>
                <a href="https://play.google.com/store"><img src={Google} alt="playstore" /></a>
            </div>
        </div>
    );
}

export default Intro;