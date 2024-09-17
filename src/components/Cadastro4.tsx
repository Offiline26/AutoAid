import { DivCadastro4 } from "../styled/styledCadastro";

export default function Cadastro4() {
    return (
        <DivCadastro4>
            <section className="box4">
                <article className="art41">
                    <div id="texto41_cadastro">CEP:</div>
                    <div><input type="text" id="barras41_cadastro" /></div>
                </article>
                <article className="art42">
                    <div id="texto42_cadastro">Rua:</div>
                    <div><input type="text" id="barras42_cadastro" /></div>
                </article>
                <article className="art43">
                    <div id="texto43_cadastro">Nº:</div>
                    <div><input type="text" id="barras43_cadastro" /></div>
                </article>
                <article className="art44">
                    <div id="texto44_cadastro">Compl:</div>
                    <div><input type="text" id="barras44_cadastro" /></div>
                </article>
            </section>
        </DivCadastro4 >
    )
}