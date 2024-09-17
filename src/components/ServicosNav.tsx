import { Link } from "react-router-dom";
import { DivAllNav } from "../styled/styledHome";

export default function ServicosNav() {
    return (
        <DivAllNav>
            <section className="cabecalho1">
                <header className="titulo1">
                    <h1>SERVIÇOS</h1>
                </header>
                <div className="container">
                    <div className="opcao"><Link to='/'>Home</Link></div>
                    <div className="opcao"><Link to='/servicos'><em>Serviços</em></Link></div>
                    <div className="opcao"><Link to='/suporte'>Suporte</Link></div>
                    <div className="opcao"><Link to='/chatbot'>ChatBot</Link></div>
                    <div className="opcao"><Link to='/login'>Login</Link></div>
                </div>
            </section>
        </DivAllNav>
    )
}