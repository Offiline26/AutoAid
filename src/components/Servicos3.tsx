import { Link } from "react-router-dom"
import { DivServicos3 } from "../styled/styledServicos"

export default function Servicos3() {
    return (
        <DivServicos3>
            <header id="texto3_servico">A Auto Aid está sempre disponíveis para qualquer situação!</header>
            <section id="corpo31_servico">
                <section className="box_servico31">
                    <article className="artigo31">
                        <div id="corpo32_servico">
                            <p className="pneu">PNEU</p>
                        </div>
                        <div id="texto31_servico">
                            Pneu furou? <br /><br /> Precisa de estepe? <br /><br />Alguém para trocar o pneu?<br />
                        </div>
                    </article>
                    <article className="artigo32">
                        <div id="corpo33_servico">
                            <p className="eletrica">ELETRICA</p>
                        </div>
                        <div id="texto32_servico">
                            A bateria arriou? <br /><br /> Algué para trocar a bateria? <br /><br /> Precia de uma bateria nova?
                        </div>
                    </article>
                    <article className="artigo33">
                        <div id="corpo34_servico">
                            <p className="motor">MOTOR</p>
                        </div>
                        <div id="texto33_servico">
                            Motor está fazendo barulhos estranhos? <br /><br /> O motor parece não funcionar bem?
                        </div>
                    </article>
                    <article className="artigo34">
                        <div id="corpo35_servico">
                            <p className="crescer">AMORTECEDOR</p>
                        </div>
                        <div id="texto34_servico">
                            Está sentindo instabilidade <br /><br /> Precisa fazer alinhamento? <br /><br /> Travamento nos
                            amortecedores?
                        </div>
                    </article>
                </section>
                <section className="box_servico32">
                    <article className="artigo35">
                        <div id="texto4_servico">
                            ESTÁ COM ALGUM DESSES PROBLEMAS OU NÃO TEM CERTEZA DO QUE É?
                        </div>
                        <div id="corpo4_servico">
                            <Link to='/chatbot'>
                                <p className="bot">FALE COM NOSSO BOT</p>
                            </Link>
                        </div>
                    </article>
                </section>
            </section>
        </DivServicos3>
    )
}