import { Link } from "react-router-dom";
import { DivLogin } from "../styled/styledLogin";

export default function Login1() {
    return (
        <DivLogin>
            <section className="body">
                <Link to="/" className="login24">SAIR</Link>
                <section className="box1">
                    <header className="login11">
                        <h1>LOGIN</h1>
                    </header>
                </section>

                <section className="box2">
                    <section className="box21">
                        <div className="login3">CPF:</div>
                        <div><input type="text" name="" className="login12" /></div>
                    </section>

                    <section className="box22">
                        <div className="login4">Senha:<br /></div>
                        <div><input type="password" name="" className="login2" /></div>
                    </section>
                </section>

                <section className="box3">
                    <div className="login18"><Link to="/">Entrar</Link></div>
                </section>

                <section className="box4">
                    <div className="login19"><Link to="/cadastro">Ainda não está registrado?|cadastre-se</Link></div>
                </section>

            </section>
        </DivLogin>
    )
}