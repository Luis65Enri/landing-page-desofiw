import React from "react";

const Testimonios = () => {
    return (
       <div className="container-fluid py-5" id="testimonial">
  <div className="container py-5">
    <div className="section-title position-relative text-center" style={{marginBottom: 120}}>
      <h6 className="text-uppercase text-primary mb-3" style={{letterSpacing: 3}}>Testimonial</h6>
      <h1 className="display-4">Our Clients Say</h1>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="owl-carousel testimonial-carousel">
          <div className="text-center">
            <img className="img-fluid mx-auto mb-3" src="img/testimonial-1.jpg" style={{width: 100}} />
            <p style={{fontSize: 22}}>Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <h4>Client Name</h4>
            <span>Profession</span>
          </div>
          <div className="text-center">
            <img className="img-fluid mx-auto mb-3" src="img/testimonial-2.jpg" style={{width: 100}} />
            <p style={{fontSize: 22}}>Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <h4>Client Name</h4>
            <span>Profession</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
 }
export default Testimonios;