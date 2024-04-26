
import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ data, extraClass }) => {
  return (
    <section
      id="services"
       className={`services-area pt-130 rpt-100 pb-100 rpb-70 rel z-1 ${extraClass}`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Popular Services</span>
              <h2>
                My <span>Special Service</span> For your Business Development
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((service) => (
            <div className="col-lg-6" key={service.id}>
              <div className="service-item wow fadeInUp delay-0-2s">
                 <div className="img mx-5">
                 
                  <img src ={service.image.url} style={{height:'50px',width:'50px'}}/>
                </div> 
                <div className="content">
                  <h4>{service.name}</h4>
                  <p>{service.desc}</p>
                  <p>{service.charge}</p>
                </div>
                <Link to="/#">
                  <a className="details-btn">
                    <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          ))}
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

export default Services;
