import { Link } from "react-router-dom"

export default function ContactScreen(){
    return(
        <div className="container container-body">
            <div className="row">
                <h3>Sobre esse Projeto</h3>
                <p> 
                    Olá! Se você está lendo esta mensagem, é porque está visitando nosso site. Gostaríamos de apresentar nosso projeto, que é uma réplica de um site. Nós nos esforçamos para criar uma experiência de usuário agradável e intuitiva, e esperamos que você goste do que vê. Nosso projeto é uma homenagem ao site original, e nossa equipe trabalhou duro para replicar sua funcionalidade e design. Estamos sempre buscando melhorar e adicionar novos recursos, então fique à vontade para nos enviar feedback e sugestões. Agradecemos por visitar nosso site e esperamos que você aproveite sua experiência aqui. Se você tiver alguma dúvida ou precisar de ajuda, não hesite em entrar em contato conosco. Obrigado!
                </p>
                <p>Site utilizado como referência: <Link to="https://lojaprati.com.br/">Lojas Prati</Link></p>
            </div>

            <img
                src="//picsum.photos/1920/420"
                class="d-block w-100"
                alt="..."
            />
        </div>
    )
}