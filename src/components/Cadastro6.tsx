import { DivCadastro6 } from "../styled/styledCadastro";

export default function Cadastro6() {
    return (
        <DivCadastro6>
            <section className="inline">
                <article id="title6_cadastro">Informações do Veículo</article>
            </section>
            <section className="box6">
                <article className="art61">
                    <div id="texto61_cadastro">Titular do Veículo:</div>
                    <div><input type="text" id="barras61_cadastro" /></div>
                </article>
                <article className="art62">
                    <div id="texto62_cadastro">CNH:</div>
                    <div><input type="text" id="barras62_cadastro" /></div>
                </article>
                <article className="art63">
                    <div id="texto63_cadastro">Placa do carro:</div>
                    <div><input type="text" id="barras63_cadastro" /></div>
                </article>
            </section>

        </DivCadastro6>
    )
}