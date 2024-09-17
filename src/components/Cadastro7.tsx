import { DivCadastro7 } from "../styled/styledCadastro";
import { Link } from "react-router-dom";

export default function Cadastro7() {
    return (
        <DivCadastro7>
            <section className="box7">
                <article className="art71">
                    <div id="texto51_cadastro">Modelo do Veículo:</div>
                    <div><input type="text" id="barras71_cadastro" /></div>
                </article>
                <article className="art72">
                    <div id="texto52_cadastro">Ano do Veículo:</div>
                    <div><input type="text" id="barras72_cadastro" /></div>
                </article>
            </section>

            <section className="but">
                <Link to="/">
                    <h3>FINALIZAR CADASTRO</h3>
                </Link>
            </section>
        </DivCadastro7>
    )
}