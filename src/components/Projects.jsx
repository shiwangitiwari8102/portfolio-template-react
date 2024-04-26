import React from 'react';
import { Link } from 'react-router-dom';

const Projects = ({data}) => {
  return (
    <section id="portfolio" className="projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Latest Works</span>
              <h2>
                Explore My Popular <span>Projects</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-25">
          {data.map((project, index) => (
            <div key={index} className="col-lg-6">
              <div className="project-image wow fadeInLeft delay-0-2s">
                <img src={project.image.url} alt="Project" style={{height:'300px', width:'400px'}} />
              </div>
              <div className="project-content wow fadeInRight delay-0-2s">
                <span className="sub-title">{data.liveurl}</span>
                <h2>
                  <Link to={project.projectDetailsLink}>{project.title}</Link>
                </h2>
                <p>{project.description}</p>
                <Link to="/project-details" className="details-btn">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="project-btn text-center wow fadeInUp delay-0-2s">
          <Link to="/projects" className="theme-btn">
            View More Projects <i className="far fa-angle-right" />
          </Link>
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

export default Projects;