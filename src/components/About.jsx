import Counter from "./Counter";

const About = ({data}) => {
  return (
    <section id="about" className="about-area rel z-1">
      <div className="for-bgc-black py-130 rpy-100">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-7">
              <div className="about-content-part rel z-2 rmb-55">
                <div className="section-title mb-35 fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About Me</span>
                  <h2>
                    Professional <span>Problem Solutions</span> For Digital
                    Products
                  </h2>
                  <p>
                    {data.description}
                  </p>
                </div>
                <ul className="list-style-one two-column fadeInUp delay-0-2s">

                  <li> Web  &amp;App </li>
                  <li>App Development</li>
                  <li>Brand Consultant</li>
                  <li>UI/UX Solutions</li>
                  <li>Wordpress Development"</li>
                  <li>Global Marketing</li>
                </ul>
                <div className="about-info-box mt-25 fadeInUp delay-0-2s">
                  <div className="info-box-item">
                    <i className="far fa-envelope" />
                    <div className="content">
                      <span>Email Us</span>
                      <br />
                      <a href="mailto:support@gmail.com">{data.contactEmail}</a>
                    </div>
                  </div>
                  <div className="info-box-item">
                    <i className="far fa-phone" />
                    <div className="content">
                      <span>Make A Call</span>
                      <br />
                      <a href="callto:+000(123)45688">+880 (123) 456 88</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-image-part fadeInUp delay-0-3s">
                <img src="assets/images/about/about.jpg" alt="About Me" />
                <div className="about-btn btn-one fadeInRight delay-0-4s">
                  <img src="assets/images/about/btn-image1.png" alt="Image" />
                  <h6>Experience Designer</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="about-btn btn-two fadeInRight delay-0-5s">
                  <img src={data.avatar.url}
                   alt="Image"  style={{height:'20px',width:'20px'}}/>
                  <h6>{data.name}</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="dot-shape">
                  <img src= {data.avatar.url}alt="Shape" style={{height:'200px',width:'200px'}} />
                  {/* "assets/images/shape/about-dot.png"  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        {[...Array(10)].map((_, index) => (
          <span key={index} />
        ))}
      </div>
    </section>
  );
};

export default About;
