import React, { useEffect, useState } from "react";
import { AxiosPublico } from "../axios/Axios";
import { ListarProyecto, ImagenProyectos } from "../../configuraciones/ApiUrls";

const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const obtenerProyectos = async () => {
      try {
        const { data } = await AxiosPublico.get(ListarProyecto);
        setProyectos(data);
      } catch (error) {
        console.error("Error al obtener proyectos:", error);
      }
    };
    obtenerProyectos();
  }, []);

  return (
    <div className="container py-5" id="project">
      <div className="text-center mb-5">
        <h6 className="text-uppercase text-primary mb-2" style={{ letterSpacing: 3 }}>
          Proyectos
        </h6>
        <h1 className="display-4 font-weight-bold">Nuestros Proyectos</h1>
      </div>

      {proyectos.map((proyecto, index) => {
        const imagenProyecto = proyecto.proyectoImagens[0]?.imagen || "";
        const esPar = index % 2 === 0;

        return (
          <div
            key={proyecto.id}
            className="row align-items-center mb-5"
          >
            {esPar && (
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img
                  src={`${ImagenProyectos}${imagenProyecto}`}
                  alt={proyecto.nombre_sistema}
                  className="img-fluid rounded shadow"
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
            )}

            <div className="col-lg-6">
              <div className="bg-light p-4 rounded shadow-sm h-100">
                <h4 className="mb-3">{proyecto.nombre_sistema}</h4>
                <p className="text-muted mb-2">
                  <i className="fa fa-calendar mr-2"></i>
                  {new Date(proyecto.fechaInicio).toLocaleDateString()} - {new Date(proyecto.fechaFin).toLocaleDateString()}
                </p>
                <p>{proyecto.descripcion}</p>
                <button
                  className="btn btn-outline-primary mt-3"
                  data-toggle="modal"
                  data-target={`#modalProyecto${proyecto.id}`}
                >
                  Ver más
                </button>
              </div>
            </div>

            {!esPar && (
              <div className="col-lg-6 mt-4 mt-lg-0">
                <img
                  src={`${ImagenProyectos}${imagenProyecto}`}
                  alt={proyecto.nombre_sistema}
                  className="img-fluid rounded shadow"
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
            )}
          </div>
        );
      })}

      {/* Modales */}
      {proyectos.map((proyecto) => (
        <div
          key={`modal-${proyecto.id}`}
          className="modal fade"
          id={`modalProyecto${proyecto.id}`}
          tabIndex="-1"
          role="dialog"
          aria-labelledby={`modalLabel${proyecto.id}`}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-scrollable" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={`modalLabel${proyecto.id}`}>
                  {proyecto.nombre_sistema}
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Cerrar">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p><strong>Descripción:</strong> {proyecto.descripcion}</p>
                <p><strong>Modulos:</strong> {proyecto.modulos}</p>
                <p><strong>Fecha Inicio:</strong> {new Date(proyecto.fechaInicio).toLocaleDateString()}</p>
                <p><strong>Fecha Fin:</strong> {new Date(proyecto.fechaFin).toLocaleDateString()}</p>

                {proyecto.proyectoImagens.length > 0 && (
                  <div className="row mt-3">
                    {proyecto.proyectoImagens.map((img) => (
                      <div className="col-md-4 mb-3" key={img.id}>
                        <img
                          src={`${ImagenProyectos}${img.imagen}`}
                          alt={`Imagen ${img.id}`}
                          className="img-fluid rounded shadow-sm"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Proyectos;