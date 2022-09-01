import Btn from '../Btn';
import Logo from '../../assets/civitaslogo.svg';
import './style.css';

function Navbar() {
    return (
        <nav className="nav">
            <img src={Logo} alt="logo" /> 
            <form>
                <ul className="nav_bt">
                    <li className="nav_botoes">
                        <Btn value={'Login'} className={'login'} />
                    </li>
                    <li className="nav_botoes">
                        <Btn value={'Quero ser Civitas'} className={'civitas'} />
                    </li>
                </ul>
            </form>
        </nav>
    );
}

export default Navbar;