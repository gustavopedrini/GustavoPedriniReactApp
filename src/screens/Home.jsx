export default function HomeScreen() {
    return (
        <div className="container">
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

                <div className="col-12">
                    <a>Produtos em Alta</a>
                    <div className="row">
                        <div className="col-md-6">1</div>
                        <div className="col-md-6">2</div>
                    </div>
                </div>
            </div>
        </div>
    )
}