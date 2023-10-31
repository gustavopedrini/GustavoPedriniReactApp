import { Link } from "react-router-dom"
import './Header.css'

export default function Header() {
    return (
        <header>
            <div class="bg-warning">
            <div class="icon-rastreio" id="nav-packard-glow-loc-icon">
                <svg data-name="Livello 1" fill="#000000" id="Livello_1" viewBox="0 0 24 24"><title></title><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
            </div>
            Frete Grátis para Todo o Brasil!
            </div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container">
                        <a href="/" className="navbar-brand">
                            <img src="https://lojaprati.com.br/cdn/shop/files/logo_700x300_3e175373-0a06-4efc-a037-f30865fabd45_195x@2x.png?v=1663352690" alt="logo" className="logo-loja"></img>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#menusite"
                            aria-controls="menusite"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="collapse navbar-collapse justify-content-end"
                            id="menusite"
                        >
                            <ul className="nav">
                                <li className="nav-item"><Link className="nav-link" to="/">Inicial</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/contato">Contato</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/sobre">Sobre</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            <div class="linha"></div>
        </header>
    )
}