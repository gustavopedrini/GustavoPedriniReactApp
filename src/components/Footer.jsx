import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <footer className="bg-black-subtle">
            <div class="linha"></div>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4>Gustavo Pedrini</h4>
                        <p>Todos os direitos reservados</p>
                    </div>

                    <div className="col-md-3">
                        <h4>Características</h4>
            
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