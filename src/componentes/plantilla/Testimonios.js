import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { AxiosPublico } from "../axios/Axios";
import { ListarTestimonio, GuardarTestimonio } from "../../configuraciones/ApiUrls";

const Testimonios = () => {
  const [testimonios, setTestimonios] = useState([]);
  const [nuevoTestimonio, setNuevoTestimonio] = useState({
    primerNombre: "",
    segundoNombre: "",
    primerApellido: "",
    segundoApellido: "",
    correo: "",
    nombre_empresa: "",
    contenido: "",
    calificacion: 0,
    fecha: new Date().toISOString().slice(0, 10),
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await AxiosPublico.get(ListarTestimonio);
        setTestimonios(data);
      } catch (err) {
        console.error("Error al obtener testimonios:", err);
      }
    })();
  }, []);

  const handleChange = (e) =>
    setNuevoTestimonio({ ...nuevoTestimonio, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ...tus validaciones...
    try {
      const payload = {
        cliente: {
          primerNombre: nuevoTestimonio.primerNombre,
          segundoNombre: nuevoTestimonio.segundoNombre,
          primerApellido: nuevoTestimonio.primerApellido,
          segundoApellido: nuevoTestimonio.segundoApellido,
          correo: nuevoTestimonio.correo,
        },
        testimonio: {
          nombre_empresa: nuevoTestimonio.nombre_empresa,
          contenido: nuevoTestimonio.contenido,
          calificacion: parseInt(nuevoTestimonio.calificacion),
          fecha: nuevoTestimonio.fecha,
        },
      };
      await AxiosPublico.post(GuardarTestimonio, payload);
      const { data } = await AxiosPublico.get(ListarTestimonio);
      setTestimonios(data);
      setNuevoTestimonio({
        primerNombre: "",
        segundoNombre: "",
        primerApellido: "",
        segundoApellido: "",
        correo: "",
        nombre_empresa: "",
        contenido: "",
        calificacion: 0,
        fecha: new Date().toISOString().slice(0, 10),
      });
    } catch (err) {
      console.error("Error al guardar testimonio:", err);
    }
  };

  return (
    <div className="container-fluid py-5" id="testimonial">
      <div className="container py-5">
        <div className="section-title position-relative text-center" style={{ marginBottom: 120 }}>
          <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: 3 }}>Testimonios</h6>
          <h1 className="display-4">Escucha a quienes ya confiaron</h1>
        </div>
        {/* Carrusel de testimonios */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              loop
              autoplay={{ delay: 5000 }}
              spaceBetween={30}
            >
              {testimonios.flatMap((cliente) =>
                cliente.testimonios.map((t, idx) => (
                  <SwiperSlide key={`${cliente.id}-${idx}`}>
                    <div className="text-center">
                      <i
                        className="fa fa-user-circle mb-3"
                        style={{ fontSize: "4rem", color: "#6c757d" }}
                      />
                      <p style={{ fontSize: "30px" }}>"{t.contenido}"</p>
                      <h4>
                        {cliente.nombreCompleto}
                      </h4>
                      <span className="text-muted" style={{ fontSize: "25px" }}>{t.nombre_empresa}</span>
                    </div>
                  </SwiperSlide>
                ))
              )}
            </Swiper>
          </div>
        </div>

        <hr className="my-5" />

        {/* Formulario de nuevo testimonio */}
        <div className="text-center mb-4">
          <h2>Agregar Nuevo Testimonio</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col-md-6 control-group mb-3">
              <input
                type="text"
                name="primerNombre"
                className="form-control bg-secondary border-0 py-4 px-3"
                placeholder="Primer Nombre"
                value={nuevoTestimonio.primerNombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 control-group mb-3">
              <input
                type="text"
                name="segundoNombre"
                className="form-control bg-secondary border-0 py-4 px-3"
                placeholder="Segundo Nombre"
                value={nuevoTestimonio.segundoNombre}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-6 control-group mb-3">
              <input
                type="text"
                name="primerApellido"
                className="form-control bg-secondary border-0 py-4 px-3"
                placeholder="Primer Apellido"
                value={nuevoTestimonio.primerApellido}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 control-group mb-3">
              <input
                type="text"
                name="segundoApellido"
                className="form-control bg-secondary border-0 py-4 px-3"
                placeholder="Segundo Apellido"
                value={nuevoTestimonio.segundoApellido}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-6 control-group mb-3">
              <input
                type="email"
                name="correo"
                className="form-control bg-secondary border-0 py-4 px-3"
                placeholder="Correo"
                value={nuevoTestimonio.correo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 control-group mb-3">
              <input
                type="text"
                name="nombre_empresa"
                className="form-control bg-secondary border-0 py-4 px-3"
                placeholder="Empresa"
                value={nuevoTestimonio.nombre_empresa}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="control-group mb-3">
            <textarea
              name="contenido"
              className="form-control bg-secondary border-0 py-2 px-3"
              rows="4"
              placeholder="Testimonio"
              value={nuevoTestimonio.contenido}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="col-md-6 control-group mb-3">
              <label className="form-label d-block mb-2">Calificación</label>
              <div className="d-flex align-items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <label
                    key={star}
                    style={{ cursor: "pointer", fontSize: "1.5rem", color: "#ffc107" }}
                    className="me-2"
                  >
                    <input
                      type="radio"
                      name="calificacion"
                      value={star}
                      checked={Number(nuevoTestimonio.calificacion) === star}
                      onChange={handleChange}
                      style={{ display: "none" }}
                    />
                    <i
                      className={
                        Number(nuevoTestimonio.calificacion) >= star
                          ? "fas fa-star"
                          : "far fa-star"
                      }
                    />
                  </label>
                ))}
              </div>
            </div>
            <div className="col-md-6 control-group mb-3">
              <input
                type="date"
                name="fecha"
                className="form-control bg-secondary border-0 py-4 px-3"
                value={nuevoTestimonio.fecha}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary font-weight-bold py-3 px-5">
              Guardar Testimonio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Testimonios;
