
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
                      <a href="#home" className="nav-item nav-link active">Home</a>
                      <a href="#about" className="nav-item nav-link">About</a>
                      <a href="#service" className="nav-item nav-link">Service</a>
                      <a href="#project" className="nav-item nav-link">Project</a>
                  </div>
                  <a href="index.html" className="navbar-brand bg-primary px-4 mx-3 d-none d-lg-block">
                      <h1 className="display-4 text-white text-uppercase m-0">DESOFIW</h1>
                  </a>
                  <div className="navbar-nav mr-auto py-0">
                      <a href="#testimonial" className="nav-item nav-link">Testimonial</a>
                      <a href="#contact" className="nav-item nav-link">Contact</a>
                  </div>
              </div>
          </nav>

          {/* Carousel */}
          <div className="container-fluid p-0 mb-5 pb-5" id="home">
              <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                  <div className="carousel-inner">
                      <div className="carousel-item position-relative active" style={{ height: '100vh', minHeight: '400px' }}>
                          <img className="position-absolute w-100 h-100" src="img/carousel-1.jpg" style={{ objectFit: 'cover' }} alt="slide 1" />
                          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                              <div className="p-3" style={{ maxWidth: '900px' }}>
                                  <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: '3px' }}>Solar Energy</h4>
                                  <h3 className="display-2 font-secondary text-white mb-4">Innovative Solar Solution For Home</h3>
                                  <a className="btn btn-light font-weight-bold py-3 px-5 mt-2 btn-scroll" href="#contact">Get A Quote</a>
                              </div>
                          </div>
                      </div>
                      <div className="carousel-item position-relative" style={{ height: '100vh', minHeight: '400px' }}>
                          <img className="position-absolute w-100 h-100" src="img/carousel-2.jpg" style={{ objectFit: 'cover' }} alt="slide 2" />
                          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                              <div className="p-3" style={{ maxWidth: '900px' }}>
                                  <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: '3px' }}>Solar Energy</h4>
                                  <h3 className="display-2 font-secondary text-white mb-4">Let The Sun Work For Your Home</h3>
                                  <a className="btn btn-light font-weight-bold py-3 px-5 mt-2 btn-scroll" href="#contact">Get A Quote</a>
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

          {/* About Section */}
          <div className="container-fluid py-5" id="about">
              <div className="container py-5">
                  <div className="row align-items-center">
                      <div className="col-lg-5">
                          <img className="img-fluid mb-4 mb-lg-0" src="img/about.jpg" alt="About" />
                      </div>
                      <div className="col-lg-7">
                          <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: '3px' }}>About Us</h6>
                          <h1 className="display-4 mb-3">
                              <span className="text-primary">25+ Years Experience</span> In Solar Power Industry
                          </h1>
                          <p>
                              At sed est eirmod sanctus et amet diam magna. Dolore clita magna sed sed stet et, at magna rebum eirmod sanctus ut sed...
                          </p>
                          <button className="btn btn-primary font-weight-bold py-3 px-5 mt-2" type="button" data-toggle="modal" data-target="#exampleModalLong">
                              Read More
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}
export default Header;