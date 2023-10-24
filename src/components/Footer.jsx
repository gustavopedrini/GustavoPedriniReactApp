import "./Footer.css"
import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <footer className="bg-black-subtle">
            <div class="linha"></div>
            
            <div className="container container-footer">
                <div className="row">
                    <div className="col-md-3">
                        <h4>Gustavo Pedrini</h4>
                        <p>Todos os direitos reservados</p>
                    </div>

                    <div className="col-md-3">
                        <h4>Políticas</h4>
                        <ul className="list-group">
                            <li className="list-group-item"><Link to="/">Envios e Prazos de Entrega</Link></li>
                            <li className="list-group-item"><Link to="/">Troca, Devoluções ou Reembolsos</Link></li>
                            <li className="list-group-item"><Link to="/">Termos de Serviço</Link></li>
                        </ul>
    
                    </div>
                    
                    <div className="col-md-3">
                        <h4>Central de Atendimento</h4>
                        <ul className="list-group">
                            <li className="list-group-item"><Link to="/">Fale Conosco</Link></li>
                            <li className="list-group-item"><Link to="/">Rastreie seu Pedido</Link></li>
                            <li className="list-group-item"><Link to="/">Perguntas Frequentes</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h4>Newsletter</h4>
                        <p>Inscreva-se para receber descontos exclusivos direto no seu e-mail!</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}