import { DivSuporte1 } from "../styled/styledSuporte"

export default function Suporte1() {
    return (
        <DivSuporte1>
            <header className="title_suporte">
                <h2>Encontre respostas rápidas e suporte eficiente para todas as suas necessidades</h2>
            </header>
            <section className="box_suporte1">
                <article id="texto11_suporte">Se for sua primeira vez acessando nosso site, fique tranquilo, garantimos que seu
                    atendimento será feito de maneira rápida e prática
                </article>
                <article id="texto12_suporte">A Auto Aid utiliza de um ChatBot para te auxiliar em quais passos você deve tomar,
                    desde seu cadastro até a contatação de serviços
                </article>
            </section>



            <div id="corpo1_suporte"><img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSJw77K6brTmdjQgn_l_9RrQ8MmjceXGxubTY55xnw9IlKJuunQ"
                alt="" id="img1_suporte" />
            </div>
        </DivSuporte1>
    )
}