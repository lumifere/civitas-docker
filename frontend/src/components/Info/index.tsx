import './style.css';
import TelaHome from "../../assets/menus.png";
import TelaAnuncio from "../../assets/venda.png";
import TelaCompra from "../../assets/compra.png";

function Info() {
    return (
        <>
        <section className="corpo">
            <div className="corpo_campos">
                <div className="corpo_textos">
                    <h2>A plataforma ideal para adquirir <br/> e anunciar serviços e produtos.</h2><br/>
                    <h3>Escolha dentre as diversas categorias <br/> de acordo com a sua necessidade.</h3><br/>
                    <h3>Realize compras e vendas com grande<br/> facilidade na palma da sua mão.</h3>
                </div>
                <div>
                    <img src={TelaHome} alt="tela home"/>
                </div>
            </div>

            <div className="corpo_campos">
                <div>
                    <img src={TelaAnuncio} alt="tela anuncio"/>
                </div>
                <div className="corpo_textos">
                    <h2>Desapegue de produtos que você não <br/>usa mais e anuncie seus serviços.</h2><br/>
                    <h3>Receba o valor integral das vendas na hora<br/>que quiser!</h3><br/>
                </div>
            </div>

            <div className="corpo_campos">
                <div className="corpo_textos">
                    <h2>Adquira produtos e contrate serviços <br/> por preços que cabem no seu bolso.</h2><br/>
                    <h3>Avalie os vendedores de forma à contribuir<br/>com a comunidade.</h3><br/>
                </div>
                <div>
                    <img src={TelaCompra} alt="tela compra"/>
                </div>
            </div>
        </section>
        </>
    );
}

export default Info;