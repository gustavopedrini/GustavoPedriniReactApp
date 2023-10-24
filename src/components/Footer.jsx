import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <footer className="bg-light-subtle">
            <div class="linha"></div>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4>Gustavo Pedrini</h4>
                        <p>Todos os direitos reservados</p>
                    </div>

                    <div className="col-md-3">
                        <h4>Características</h4>
                        <ul className="list-group">
                            <li className="list-group-item"><Link to="/cursos">Cursos</Link></li>
                            <li className="list-group-item"><Link to="/sobre">Instituição</Link></li>
                        </ul>
                    </div>
                    
                    <div className="col-md-3">
                        <h4>Senac</h4>
                    </div>

                    <div className="col-md-3">
                        <h4>Senac</h4>
                    </div>
                </div>
            </div>
        </footer>
    )
}