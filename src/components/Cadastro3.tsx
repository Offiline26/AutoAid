import { DivCadastro3 } from "../styled/styledCadastro";

export default function Cadastro3() {
    return (
        <DivCadastro3>
            <section className="box3">
                <article className="art31">
                    <div id="texto31_cadastro">Email:</div>
                    <div><input type="text" id="barras31_cadastro" /></div>
                </article>
                <article className="art32">
                    <div id="texto32_cadastro">Senha:</div>
                    <div><input type="text" id="barras32_cadastro" /></div>
                </article>
                <article className="art33">
                    <div id="texto33_cadastro">Confirmar Senha:</div>
                    <div><input type="text" id="barras33_cadastro" /></div>
                </article>
            </section>
        </DivCadastro3>
    )
}