import React from 'react';
import { Link } from 'react-router-dom';

const Skill = ({data}) => {
  return (
    <section id="skills" className="skill-area rel z-1">
      <div className="for-bgc-black pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-5">
              <div className="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">My Skills</span>
                  <h2>
                    Let’s Explore Popular <span>Skills &amp; Experience</span>
                  </h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus to voluptatem
                    accusantium doloremque laudantium, totam rem aperiamc eaque
                    ipsa quae ab illo inventore veritatis
                  </p>
                </div>
                <Link to="/about" className="theme-btn">
                  Learn More <i className="far fa-angle-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="skill-items-wrap">
                <div className="row">
                  {data.map((item) => (
                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6" key={item._id}>
                      <div className="skill-item wow fadeInUp delay-0-2s">
                        <img src={item.image.url} alt="Skill" style={{height:'60px', width:'50px'}} />
                        <h5>{item.name}</h5>
                        <span className="percent">{item.percentage}%</span>
                      </div>
                    </div>
                  ))}
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

export default Skill;
