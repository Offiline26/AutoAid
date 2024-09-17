import { Link } from "react-router-dom";
import { DivAllNav } from "../styled/styledHome";

export default function SuporteNav() {
    return (
        <DivAllNav>
            <section className="cabecalho1">
                <header className="titulo1">
                    <h1>SUPORTE</h1>
                </header>
                <div className="container">
                    <div className="opcao"><Link to='/'>Home</Link></div>
                    <div className="opcao"><Link to='/servicos'>Serviços</Link></div>
                    <div className="opcao"><Link to='/suporte'><em>Suporte</em></Link></div>
                    <div className="opcao"><Link to='/chatbot'>ChatBot</Link></div>
                    <div className="opcao"><Link to='/login'>Login</Link></div>
                </div>
            </section>
        </DivAllNav>
    )
}