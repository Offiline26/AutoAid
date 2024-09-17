import { Link } from "react-router-dom";
import { DivCadastro1 } from "../styled/styledCadastro";

export default function Cadastro1() {
    return (
        <DivCadastro1>
            <header id="title1_cadastro">
                <h1>Cadastro Auto Aid</h1>
            </header>

            <section className="outline">
                <article id="sair_cadastro"><Link to="/">Sair</Link></article>

                <article id="title2_cadastro">Informações Pessoais</article>
            </section>

            <section className="box1">
                <article className="art11">
                    <div id="texto11_cadastro">Nome Completo:</div>
                    <div><input type="text" id="barras11_cadastro" /></div>
                </article>
                <article className="art12">
                    <div id="texto12_cadastro">CPF:</div>
                    <div><input type="text" id="barras12_cadastro" /></div>
                </article>
                <article className="art13">
                    <div id="texto13_cadastro">RG:</div>
                    <div><input type="text" id="barras13_cadastro" /></div>
                </article>
            </section>
        </DivCadastro1>
    )
}