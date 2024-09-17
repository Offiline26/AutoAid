import { DivCadastro5 } from "../styled/styledCadastro";

export default function Cadastro5() {
    return (
        <DivCadastro5>
            <section className="box5">
                <article className="art51">
                    <div id="texto51_cadastro">Bairro:</div>
                    <div><input type="text" id="barras51_cadastro" /></div>
                </article>
                <article className="art52">
                    <div id="texto52_cadastro">Cidade:</div>
                    <div><input type="text" id="barras52_cadastro" /></div>
                </article>
                <article className="art53">
                    <div id="texto53_cadastro">Estado:</div>
                    <div><input type="text" id="barras53_cadastro" /></div>
                </article>
            </section>
        </DivCadastro5>
    )
}