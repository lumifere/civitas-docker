import './style.css';
import Texto from '../../assets/logo_com_civitas.svg';

function Titulo() {
    return ( 
        <div className="inicial_titulo">
            <img src={Texto} alt="titulo" />
            <h2 className="inicial_texto">O marketplace de produtos e serviços <br/> criado pela comunidade e para a comunidade! <br/></h2>
        </div>
    );
}

export default Titulo;