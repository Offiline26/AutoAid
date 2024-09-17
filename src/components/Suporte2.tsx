import { Link } from "react-router-dom";
import { DivSuporte2 } from "../styled/styledSuporte";

export default function Suporte2() {
    return (
        <DivSuporte2>
            <section className="box_suporte2">
                <section className="box_suporte21">
                    <div id="texto21_suporte">Cadastre-se no Auto Aid agora para evitar perder tempo quando houver uma
                        necessidade! Sua segurança e conforto durante o atendimento com o Bot é a nossa prioridade.
                    </div>
                    <div id="corpo21_suporte">
                        <Link to='/cadastro' className="id_foto">
                            CADASTRAR
                        </Link>
                    </div>
                </section>
                <section className="box_suporte22">
                    <div id="texto22_suporte">Caso precise utilizar nosso serviço, a Porto disponibilizou um ChatBot com uma IA
                        funcional que te auxilia para a tomada da melhor decisão para cada situação que precisar.
                    </div>

                    <div id="corpo22_suporte">
                        <Link to='/chatbot' className="id_foto">
                            FALE CONOSCO
                        </Link>
                    </div>
                </section>
            </section>
        </DivSuporte2>
    )
}