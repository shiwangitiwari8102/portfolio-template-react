
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = ({ data }) => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="testimonials-area rel z-1" id='testonmial'>
      <div className="for-bgc-black py-130 rpy-100">
        <div className="container">
          <div className="row gap-90">
            <div className="col-lg-4">
              <div className="testimonials-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Clients Testimonials</span>
                  <h2>I’ve 1253+ Clients <span>Feedback</span></h2>
                  <p>Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis</p>
                </div>
                <div className="slider-arrows">
                  <button className="testimonial-prev slick-arrow" onClick={previous}>
                    <i className="fal fa-arrow-left" />
                  </button>
                  <button className="testimonial-next slick-arrow" onClick={next}>
                    <i className="fal fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <Slider
                ref={sliderRef}
                dots={false}
                arrows={false}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                className="testimonials-wrap"
              >
                {data.map((test, index) => (
                  <div  key ={index._id}className="testimonial-item wow fadeInUp delay-0-3s">
                    <div className="author">
                      <img src={test.image.url} alt="Author" />
                    </div>
                    <div className="text">
                      {test.review}
                    </div>
                    <div className="testi-des">
                      <h5>{test.name}</h5>
                      <span>{test.position}</span>
                    </div>
                  </div>
                ))}
              </Slider>
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

export default Testimonial;
