import { Link } from "react-router-dom";


import React from 'react';

const Resume = ({ data }) => {
  
  const educationData = data.filter(job => job.forEducation);
  const experienceData = data.filter(job => !job.forEducation);

  return (
    <section
      id="resume"
      className="resume-area-two bgc-black rel z-1 pt-185 rpt-145 pb-140 rpb-100"
    >
      <div className="container">
        <div className="row align-items-center pb-20">
          <div className="col-lg-8">
            <div className="section-title mb-35 fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                <i className="flaticon-asterisk-1" />
                MY Experience resume
              </span>
              <h2>Work & Education</h2>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end">
          <Link to="/contact">
              <a className="theme-btn mb-35">Contact Me</a>
            </Link>
          </div>
        </div>
        <div className="row no-gap">
          <div className="col-xl-6">
            <div className="resume-box-wrap design-two">
              <div className="timeline-heading wow fadeInUp delay-0-4s">
                <span className="title">Work</span>
                <div className="arrow">
                  <i className="far fa-arrow-down" />
                </div>
              </div>
              <div className="resume-box wow fadeInLeft delay-0-2s">
                
                {experienceData.map((job, index) => (
                  <div key={index} className="resume-column">
                    <div className="timeline-item">
                      <div className="resume-content">
                        <span className="duration">
                          <i className="far fa-calendar-alt" /> {job.startDate} - {job.endDate}
                        </span>
                        <h5 className="title">{job.jobTitle}</h5>
                        <p>{job.company_name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="resume-box-wrap mt-110 rmt-75">
              <div className="timeline-heading wow fadeInDown delay-0-4s">
                <span className="title">Education</span>
                <div className="arrow">
                  <i className="far fa-arrow-down" />
                </div>
              </div>
              <div className="resume-box wow fadeInRight delay-0-2s">
                
                {educationData.map((job, index) => (
                  <div key={index} className="resume-column">
                    <div className="timeline-item">
                      <div className="resume-content">
                        <span className="duration">
                          <i className="far fa-calendar-alt" /> {job.startDate} - {job.endDate}
                        </span>
                        <h5 className="title">{job.jobTitle}</h5>
                        <p>{job.company_name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
      <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};

export default Resume;

