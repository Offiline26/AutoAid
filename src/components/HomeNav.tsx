import { Link } from "react-router-dom";
import { DivAllNav } from "../styled/styledHome";

export default function HomeNav() {
    return (
        <DivAllNav>
            <section className="cabecalho1">
                <header className="titulo1">
                    <h1>AUTO AID</h1>
                </header>
                <div className="container">
                    <div className="opcao"><Link to='/'><em>Home</em></Link></div>
                    <div className="opcao"><Link to='/servicos'>Serviços</Link></div>
                    <div className="opcao"><Link to='/suporte'>Suporte</Link></div>
                    <div className="opcao"><Link to='/chatbot'>ChatBot</Link></div>
                    <div className="opcao"><Link to='/login'>Login</Link></div>
                </div>
            </section>
        </DivAllNav>
    )
}