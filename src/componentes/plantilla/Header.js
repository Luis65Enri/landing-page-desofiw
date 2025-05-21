
const Header = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-1 py-lg-0 px-lg-5">
                <a href="index.html" className="navbar-brand d-block d-lg-none">
                    <h1 className="display-4 text-white text-uppercase m-0">DESOFIW</h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                        <a href="#home" className="nav-item nav-link active">Inicio</a>
                        <a href="#historia" className="nav-item nav-link">Historia</a>
                        <a href="#about" className="nav-item nav-link">Mision y vision</a>
                        <a href="#service" className="nav-item nav-link">Servicios</a>
                    </div>
                    <a href="index.html" className="navbar-brand bg-primary px-4 mx-3 d-none d-lg-block">
                        <h1 className="display-4 text-white text-uppercase m-0">DESOFIW</h1>
                    </a>
                    <div className="navbar-nav mr-auto py-0">
                        <a href="#project" className="nav-item nav-link">Proyectos</a>
                        <a href="#testimonial" className="nav-item nav-link">Testimonios</a>
                        <a href="#contact" className="nav-item nav-link">Contacto</a>
                    </div>
                </div>
            </nav>

            {/* Carousel */}
            <div className="container-fluid p-0 mb-5 pb-5" id="home">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item position-relative active" style={{ height: '100vh', minHeight: '400px' }}>
                            <img className="position-absolute w-100 h-100" src="img/Inicio1.png" style={{ objectFit: 'cover' }} alt="slide 1" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: '900px' }}>
                                    <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: '3px' }}>Transformando el Futuro</h4>
                                    <h3 className="display-2 font-secondary text-white mb-4">Desarrollo de Soluciones Tecnológicas Innovadoras</h3>
                                    <p className="text-white mb-4">A través de nuestra plataforma, mejoramos la eficiencia empresarial con tecnologías a la vanguardia. Cada componente del sistema está diseñado para optimizar tus procesos.</p>
                                    <a className="btn btn-light font-weight-bold py-3 px-5 mt-2 btn-scroll" href="#contact">Contáctanos para una Demostración</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item position-relative" style={{ height: '100vh', minHeight: '400px' }}>
                            <img className="position-absolute w-100 h-100" src="img/Inicio2.png" style={{ objectFit: 'cover' }} alt="slide 2" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: '900px' }}>
                                    <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: '3px' }}>Eficiencia y Escalabilidad</h4>
                                    <h3 className="display-2 font-secondary text-white mb-4">Soluciones Flexibles para el Crecimiento de Tu Negocio</h3>
                                    <p className="text-white mb-4">Nuestro sistema está diseñado para escalar junto a ti. Desde pequeñas empresas hasta grandes corporaciones, nuestra solución se adapta a tus necesidades.</p>
                                    <a className="btn btn-light font-weight-bold py-3 px-5 mt-2 btn-scroll" href="#contact">Solicita Más Información</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev justify-content-start" href="#header-carousel" data-slide="prev">
                        <div className="btn btn-primary px-0" style={{ width: '68px', height: '68px' }}>
                            <span className="carousel-control-prev-icon mt-3"></span>
                        </div>
                    </a>
                    <a className="carousel-control-next justify-content-end" href="#header-carousel" data-slide="next">
                        <div className="btn btn-primary px-0" style={{ width: '68px', height: '68px' }}>
                            <span className="carousel-control-next-icon mt-3"></span>
                        </div>
                    </a>
                </div>
            </div>

            {/* Historial */}
            <div className="container-fluid py-5" id="historia">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <img
                                className="img-fluid mb-4 mb-lg-0"
                                src="img/ImagenCarlos.jpg"
                                alt="Reseña Histórica"
                                style={{
                                    borderRadius: '50%',
                                    border: '4px solid black',
                                    width: '250px',
                                    height: 'auto',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                        <div className="col-lg-7">
                            <h6
                                className="text-uppercase text-primary mb-3"
                                style={{ letterSpacing: '3px' }}
                            >
                                Reseña Histórica de Fundación
                            </h6>
                            <h1 className="display-4 mb-3">
                                <span className="text-primary">De la Visión a la Realidad</span> en
                                Desarrollo de Software
                            </h1>
                            {/* Solo un párrafo de introducción */}
                            <p>
                                La empresa de desarrollo de software fue concebida como una
                                respuesta visionaria a las necesidades emergentes de las empresas
                                en el ámbito de la automatización de procesos y la simplificación
                                de soluciones tecnológicas...
                            </p>
                            <button
                                className="btn btn-primary font-weight-bold py-3 px-5 mt-2"
                                type="button"
                                data-toggle="modal"
                                data-target="#aboutHistoryModal"
                            >
                                Leer Más
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div
                className="modal fade"
                id="aboutHistoryModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="aboutHistoryModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="aboutHistoryModalLabel">
                                Reseña Histórica de Fundación
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Cerrar"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>
                                La empresa de desarrollo de software fue concebida como una
                                respuesta visionaria a las necesidades emergentes de las empresas
                                en el ámbito de la automatización de procesos y la simplificación
                                de soluciones tecnológicas.
                            </p>
                            <p>
                                Su historia comienza en 2003, cuando el Ing. Carlos Antonio Flores
                                Flores inició sus estudios universitarios. Fue en este periodo
                                cuando identificó las carencias y los desafíos que enfrentaban las
                                organizaciones al intentar implementar herramientas tecnológicas
                                avanzadas. Con una visión clara y un profundo interés por la
                                tecnología, comenzó a explorar soluciones innovadoras que pudieran
                                transformar la manera en que las empresas enfrentaban estas
                                dificultades.
                            </p>
                            <p>
                                Impulsado por este panorama, en 2010 dio el primer paso hacia la
                                creación de soluciones innovadoras, iniciando actividades de
                                desarrollo de software con el propósito de transformar las
                                complejidades en soluciones prácticas y accesibles. Este periodo
                                marcó una etapa de aprendizaje y experimentación, consolidando una
                                visión que unía creatividad, eficiencia y funcionalidad.
                            </p>
                            <p>
                                Finalmente, en 2014 la empresa tomó forma oficial, estableciéndose
                                con el firme objetivo de transformar el mercado. Desde sus inicios,
                                la compañía se ha enfocado en cerrar la brecha entre las necesidades
                                empresariales y las herramientas tecnológicas, ofreciendo productos
                                y servicios que no solo resuelven problemas, sino que también
                                inspiran confianza y generan valor en sus clientes.
                            </p>
                            <p>
                                Hoy en día, esta organización sigue siendo un fiel reflejo de la
                                pasión y el compromiso que inspiraron a su fundador, convirtiendo
                                una idea en una realidad impactante y marcando una diferencia
                                significativa en el ámbito tecnológico y empresarial.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;