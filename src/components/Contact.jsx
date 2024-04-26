// import React from "react";

// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="contact-area pt-20 pb-32 md:pt-32 md:pb-40 lg:pt-48 lg:pb-56 xl:pt-64 xl:pb-80 relative z-10"
//     >
//       <div className="container">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
//           <div className="col-span-1 md:col-span-1 lg:col-span-1">
//             <div className="contact-content-part pt-5 md:pt-0 mb-8 md:mb-0 lg:mb-20 wow fadeInUp delay-200">
//               <div className="section-title mb-8 md:mb-12">
//                 <span className="sub-title mb-3 md:mb-4">Get In Touch</span>
//                 <h2>
//                   Let’s Talk For your <span>Next Projects</span>
//                 </h2>
//                 <p>
//                   Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
//                   inventore veritatis
//                 </p>
//               </div>
//               <ul className="list-style-two">
//                 <li>5+ Years Of Experience</li>
//                 <li>Professional Web Designer</li>
//                 <li>Mobile Apps Design</li>
//                 <li>Custom Design Support</li>
//               </ul>
//             </div>
//           </div>
//           <div className="col-span-1 md:col-span-1 lg:col-span-1">
//             <div className="contact-form contact-form-wrap form-style-one wow fadeInUp delay-400">
//               <form
//                 id="contactForm"
//                 className="contactForm"
//                 name="contactForm"
//                 action="assets/php/form-process.php"
//                 method="post"
//               >
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//                   <div className="form-group">
//                     <label htmlFor="name">Full Name</label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       className="form-control"
//                       defaultValue=""
//                       placeholder="Richard D. Hammond"
//                       required=""
//                       data-error="Please enter your Name"
//                     />
//                     <label htmlFor="name" className="for-icon">
//                       <i className="far fa-user" />
//                     </label>
//                     <div className="help-block with-errors" />
//                   </div>
//                   {/* Remaining form inputs */}
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-lines">
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//         <span />
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React from "react";
import { faUser, faEnvelope, faPhone, faAngleRight } from '@fortawesome/free-solid-svg-icons';



const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-area pt-20 pb-32 md:pt-32 md:pb-40 lg:pt-48 lg:pb-56 xl:pt-64 xl:pb-80 relative z-10"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="contact-content-part pt-5 md:pt-0 mb-8 md:mb-0 lg:mb-20 wow fadeInUp delay-200">
              <div className="section-title mb-8 md:mb-12">
                <span className="sub-title mb-3 md:mb-4">Get In Touch</span>
                <h2>
                  Let’s Talk For your <span>Next Projects</span>
                </h2>
                <p>
                  Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                  inventore veritatis
                </p>
              </div>
              <ul className="list-style-two">
                <li>5+ Years Of Experience</li>
                <li>Professional Web Designer</li>
                <li>Mobile Apps Design</li>
                <li>Custom Design Support</li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="contact-form contact-form-wrap form-style-one wow fadeInUp delay-400">
              <form
                id="contactForm"
                className="contactForm"
                name="contactForm"
                // action="assets/php/form-process.php"
                // method="post"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      defaultValue=""
                      placeholder="Jhon Doe"
                      required=""
                      data-error="Please enter your Name"
                    />
                    <label htmlFor="name" className="for-icon">
                      <i className="far fa-user" />
                    </label>
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      defaultValue=""
                      placeholder="support@gmail.com"
                      required=""
                      data-error="Please enter your Email"
                    />
                    <label htmlFor="email" className="for-icon">
                      <i className="far fa-envelope" />
                    </label>
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone_number">Phone Number</label>
                    <input
                      type="text"
                      id="phone_number"
                      name="phone_number"
                      className="form-control"
                      defaultValue=""
                      placeholder="+880 (123) 456 88"
                      required=""
                      data-error="Please enter your Phone Number"
                    />
                    <label htmlFor="phone_number" className="for-icon">
                      <i className="far fa-phone" />
                    </label>
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      defaultValue=""
                      placeholder="Subject"
                      required=""
                      data-error="Please enter your Subject"
                    />
                    <label htmlFor="subject" className="for-icon">
                      <i className="far fa-text" />
                    </label>
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows={4}
                      placeholder="write message"
                      required=""
                      data-error="Please enter your Message"
                      defaultValue={""}
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="theme-btn">
                      Send Us Message <i className="far fa-angle-right" />
                    </button>
                    <div id="msgSubmit" className="hidden" />
                  </div>
                </div>
              </form>
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

export default Contact;
