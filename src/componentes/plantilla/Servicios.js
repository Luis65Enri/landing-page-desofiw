import { useEffect, useState } from "react";
import { ImagenServicios, ListarServicios } from "../../configuraciones/ApiUrls";
import { AxiosPublico } from "../axios/Axios";

const Servicios = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await AxiosPublico.get(ListarServicios);
        setServicios(response.data);
      } catch (error) {
        console.error("Error al obtener los servicios:", error);
      }
    };
    fetchServicios();
  }, []);

  return (
    <>
      <div className="container-fluid py-5" id="service">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6
              className="text-uppercase text-primary mb-3"
              style={{ letterSpacing: 3 }}
            >
              Servicios
            </h6>
            <h1 className="font-secondary display-4">Lo que cubrimos</h1>
          </div>
          <div className="row">
            {servicios.length > 0 ? (
              servicios.map((serv) => (
                <div key={serv.id} className="col-lg-4 mb-3">
                  <div className="product-item mb-2" style={{ width: '250px' }}>
                    <div
                      className="product-img"
                      style={{
                        width: '250px',
                        height: '200px',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <img
                        className="img-fluid"
                        src={`${ImagenServicios}${serv.imagen}`}
                        alt={serv.nombre}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                      <a
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target={`#modalServicio${serv.id}`}
                        style={{
                          position: 'absolute',
                          bottom: '10px',
                          right: '10px',
                          zIndex: 2,
                        }}
                      >
                        <i className="fa fa-2x fa-plus text-white" />
                      </a>
                    </div>

                    <div
                      className="bg-secondary text-center p-4"
                      style={{
                        maxWidth: '250px',
                      }}
                    >
                      <h3
                        className="m-0"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                        title={serv.nombre}
                      >
                        {serv.nombre}
                      </h3>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p>Cargando servicios...</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modales dinámicos, uno por servicio */}
      {servicios.map((serv) => (
        <div
          key={`modal-${serv.id}`}
          className="modal fade"
          id={`modalServicio${serv.id}`}
          tabIndex="-1"
          role="dialog"
          aria-labelledby={`modalLabel${serv.id}`}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={`modalLabel${serv.id}`}>
                  {serv.nombre}
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
                <p>{serv.descripcion}</p>
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
      ))}
    </>
  );
};

export default Servicios;