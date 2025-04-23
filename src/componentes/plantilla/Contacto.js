import React, { useState } from "react";
import { AxiosPublico } from "../axios/Axios";
import { EnviarSolicitud } from "../../configuraciones/ApiUrls";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    nombreProyecto: "",
    descripcion: "",
  });

  const [mensaje, setMensaje] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje(null);
    setError(null);

    try {
      const { data } = await AxiosPublico.post(EnviarSolicitud, formData);
      setMensaje(data.message);
      setFormData({
        nombre: "",
        correo: "",
        telefono: "",
        nombreProyecto: "",
        descripcion: "",
      });
    } catch (err) {
      setError("Error al enviar el mensaje. Intenta nuevamente.");
    }
  };

  return (
    <div className="container-fluid py-5" id="contact">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: 3 }}>Contacto</h6>
          <h1 className="font-secondary display-4">Contáctanos</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="col-sm-6 control-group mb-3">
                    <input type="text" className="form-control bg-secondary border-0 py-4 px-3" name="nombre" placeholder="Tu Nombre" value={formData.nombre} onChange={handleChange} required />
                  </div>
                  <div className="col-sm-6 control-group mb-3">
                    <input type="email" className="form-control bg-secondary border-0 py-4 px-3" name="correo" placeholder="Tu Correo" value={formData.correo} onChange={handleChange} required />
                  </div>
                </div>
                <div className="control-group mb-3">
                  <input type="text" className="form-control bg-secondary border-0 py-4 px-3" name="telefono" placeholder="Tu Teléfono" value={formData.telefono} onChange={handleChange} required />
                </div>
                <div className="control-group mb-3">
                  <input type="text" className="form-control bg-secondary border-0 py-4 px-3" name="nombreProyecto" placeholder="Nombre del Proyecto" value={formData.nombreProyecto} onChange={handleChange} required />
                </div>
                <div className="control-group mb-4">
                  <textarea className="form-control bg-secondary border-0 py-2 px-3" rows={6} name="descripcion" placeholder="Describe tu proyecto..." value={formData.descripcion} onChange={handleChange} required />
                </div>
                <div className="text-center">
                  <button className="btn btn-primary font-weight-bold py-3 px-5" type="submit">Enviar Mensaje</button>
                </div>
              </form>
              {mensaje && <div className="alert alert-success mt-4">{mensaje}</div>}
              {error && <div className="alert alert-danger mt-4">{error}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;