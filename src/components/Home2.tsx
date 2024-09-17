import { DivHome2 } from "../styled/styledHome";

export default function Home2() {
    return (
        <DivHome2>
            <section className="box_home2">
                <header id="titulo2_home">O seguro feito para todos</header>

                <article id="corpo21_home">
                    <img
                        src="https://elittetaxi.com.br/wp-content/uploads/2024/02/Elitte-Taxi-blog-como-manter-a-calma-no-transito-img-2.jpg"
                        alt="motorista" className="img_motoristo" />
                    <p className="class_home">
                        Soluções que vieram para inovar a sua maneira de pensar. A “Auto
                        AID”, une a “IA” com a sua necessidade real. Não importa onde você
                        esteja ou o nível do problema ocorido, somos preparados para te dar o
                        suporte da maneira mais rápida e eficaz possível!
                    </p>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIDzgwIycU_SeJ4m-3m7XLEHxqXKE9fFRDYTucIu6VsVfZK5Ca"
                        alt="reunião" className="img_reuniao" />
                </article>
                <footer id="corpo22_home">
                    <p>
                        <strong>Desde um problema grave, com necessidade de guincho ou mecânico,
                            até um pequeno detalhe. Damos um diagnóstico já com orçamento e
                            prestadores de serviço de confiança.</strong>
                    </p>
                </footer>
            </section>
        </DivHome2>
    )
}