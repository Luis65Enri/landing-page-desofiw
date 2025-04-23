import React from "react";

const Footer = () => {
    return (
        <>
            <div>
                <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" style={{ marginTop: 90 }}>
                    <div className="row pt-5">
                        <div className="col-12 mb-4 px-4">
                            <div className="row mb-5 p-4" style={{ background: 'rgba(256, 256, 256, .05)' }}>
                                <div className="col-md-4">
                                    <div className="text-md-center">
                                        <h5 className="text-primary text-uppercase mb-2" style={{ letterSpacing: 5 }}>Oficinas</h5>
                                        <p className="mb-4 m-md-0">Bo. El carmen, siguatepeque, Comayagua</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="text-md-center">
                                        <h5 className="text-primary text-uppercase mb-2" style={{ letterSpacing: 5 }}>Correo de contacto</h5>
                                        <p className="mb-4 m-md-0">desofiwfacturacion@gmail.com</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="text-md-center">
                                        <h5 className="text-primary text-uppercase mb-2" style={{ letterSpacing: 5 }}>Telefono</h5>
                                        <p className="m-0">+504 9996-9172</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-dark text-white text-center border-top py-4 px-sm-3 px-md-5" style={{ borderColor: 'rgba(256, 256, 256, .05) !important' }}>
                    <p className="m-0 text-white">© <a href="#">Nombre del Dominio</a>. Todos los derechos reservados. Diseñado por <a href="https://htmlcodex.com">su equipo</a></p>
                </div>
            </div>
        </>
    );
};
export default Footer;