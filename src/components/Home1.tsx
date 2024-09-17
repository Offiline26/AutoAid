import { DivHome1 } from "../styled/styledHome";

export default function Home1() {
    return (
        <DivHome1>
            <section className="box_home1">
                <header className="titulo1_home">
                    <h2>Auto Aid preparada para quaquer situação!</h2>
                </header>
                <div id="corpo11_home">
                    <img src="https://img.freepik.com/fotos-premium/homem-negro-bonito-olhando-para-o-celular-preocupado-tiro-medio-fundo-azul_154439-1190.jpg" className="imgjoia" />
                    <article id="corpo12_home">
                        <p className="id_home">1 Seu carro deu problema? Você está no lugar certo!</p>
                        <p className="id_home">2 Serviço online 24h. Não vamos te deixar na mão!</p>
                        <p className="id_home">3 Tem Duvidas? Converse agora com o nosso Bot!</p>
                    </article>
                </div>
            </section>
        </DivHome1>
    )
}