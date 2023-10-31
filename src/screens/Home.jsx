import './Home.css'

export default function HomeScreen() {
    return (
        <div className="container container-body">
            <div className="row">
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img
                                src="//picsum.photos/1920/415"
                                class="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div class="carousel-item">
                            <img
                                src="//picsum.photos/1920/416"
                                class="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div class="carousel-item">
                            <img
                                src="//picsum.photos/1920/417"
                                class="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev"
                    >
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="next"
                    >
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="col-10">
                    <h3>🔥 Produtos em Alta</h3>
                    <div className="row row-produtos">
                        <div className="col-md-2 produto">Ar-condicionado</div>
                        <div className="col-md-2 produto">Máquina de barbear</div>
                        <div className="col-md-2 produto">Geladeira eletrolux</div>
                        <div className="col-md-2 produto">Pulseira cibernética</div>
                        <div className="col-md-2 produto">Óculus Virtual Reality</div>
                    </div>
                </div>
            </div>
        </div>
    )
}