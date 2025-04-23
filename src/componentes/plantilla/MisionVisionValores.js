import React from "react";

const MisionVisionValores = () => {
    return (
        <div className="container-fluid py-5" id="about">
            <div className="container py-5">
                <div className="section-title position-relative text-center">
                    <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: 3 }}>¿Quiénes somos?</h6>
                    <h1 className="display-4">Misión, Visión y Valores</h1>
                </div>

                <div className="row">
                    {/* Misión */}
                    <div className="col-md-6 border-right border-primary mb-4 mb-md-0">
                        <div className="text-center text-md-right mr-md-3">
                            <h3 className="mb-4">Misión</h3>
                            <p className="text-justify">
                                Diseñar, desarrollar, implementar y monitorear soluciones tecnológicas personalizadas que transformen los procesos empresariales de nuestros clientes. Nos enfocamos en crear interfaces intuitivas e innovadoras, garantizando resultados de excelencia y contribuyendo al éxito de cada organización que confía en nosotros.
                            </p>
                        </div>
                    </div>

                    {/* Visión */}
                    <div className="col-md-6">
                        <div className="text-center text-md-left ml-md-3">
                            <h3 className="mb-4">Visión</h3>
                            <p className="text-justify">
                                Seremos una empresa líder y reconocida por nuestra capacidad de adaptarnos al ritmo vertiginoso de la tecnología y la evolución social. Ampliaremos nuestro alcance ofreciendo servicios diversificados, como desarrollo de software, diseño gráfico, consultorías, servicios secretariales, mantenimiento y venta de equipo tecnológico, además de papelería en general. Nuestro compromiso es ofrecer soluciones de calidad, flexibles y adaptadas a las demandas cambiantes del mercado y las necesidades únicas de nuestros clientes.
                            </p>
                        </div>
                    </div>

                    {/* Valores */}
                    <div className="col-md-12 mt-5">
                        <div className="text-center">
                            <h3 className="mb-4">Valores</h3>
                            <ul className="list-unstyled d-flex flex-column align-items-start align-items-md-center">
                                <li><i className="fa fa-check text-success mr-2"></i> Calidad: Nos esforzamos por superar las expectativas en cada proyecto.</li>
                                <li><i className="fa fa-check text-success mr-2"></i> Pasión: Cada miembro del equipo trabaja con entusiasmo y dedicación en lo que le apasiona.</li>
                                <li><i className="fa fa-check text-success mr-2"></i> Trabajo en equipo: Fomentamos la colaboración para alcanzar los mejores resultados.</li>
                                <li><i className="fa fa-check text-success mr-2"></i> Orientación al cliente: Ponemos las necesidades de nuestros clientes en el centro de nuestras decisiones.</li>
                                <li><i className="fa fa-check text-success mr-2"></i> Resolución de problemas: Afrontamos cada desafío con creatividad y determinación.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Botón */}
                    <div className="col-md-12 text-center pt-4">
                        <a className="btn btn-primary font-weight-bold py-3 px-5 mt-4" href="#contact">Contáctanos</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MisionVisionValores;
