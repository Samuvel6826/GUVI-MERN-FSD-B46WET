import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Contact() {

  const form = useRef();

  const formikQuery = useFormik({
    initialValues:{
      your_name:"",
      your_email:"",
      message:""
    },
    validationSchema:Yup.object({
      your_name: Yup.string().required("Required").min(2,"Minimum 2 Characters Required"),
      your_email:Yup.string().required("Required").email("Enter a valid email"),
      message:Yup.string().required("Required")
    }),
    onSubmit: (values)=>{
      sendEmail(values)
     }
  })

  const sendEmail = (e) => {
    // e.preventDefault();
    emailjs.sendForm('service_a6vosqm', 'template_y8grdsb', form.current, 'dsQNk0H0okAie8xT2')
      .then((result) => {
          console.log(result.text);
          // e.target.value.reset()
          alert('Email Sent!')
      }, (error) => {
          console.log(error.text);
      });
  };
  return <>
  <section id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactPageDesc">
            Please fill out the form below to discuss any work opportunities.
      </span>

      <form id='contactForm' className="contactForm" ref={form} onSubmit={formikQuery.handleSubmit}>

        <input 
            type="text" 
            className="name" 
            placeholder='Your Name' 
            id='your_name'
            name='your_name'
            onChange={formikQuery.handleChange}
            onBlur={formikQuery.handleBlur}
            value={formikQuery.values.your_name}
            />
           {formikQuery.touched.your_name && formikQuery.errors.your_name?<div style={{color:"red"}}>*{formikQuery.errors.your_name}</div>:<></>}

        <input 
            type="email" 
            className="email" 
            placeholder='Your Email' 
            id='your_email'
            name='your_email'
            onChange={formikQuery.handleChange}
            onBlur={formikQuery.handleBlur}
            value={formikQuery.values.your_email}
            />
           {formikQuery.touched.your_email && formikQuery.errors.your_email?<div style={{color:"red"}}>*{formikQuery.errors.your_email}</div>:<></>}

        <textarea
            rows="10" 
            className="msg" 
            placeholder='Enter Your Message'
            id='message'
            name='message'
            onChange={formikQuery.handleChange}
            onBlur={formikQuery.handleBlur}
            value={formikQuery.values.message}>
          
        </textarea>
        {formikQuery.touched.message && formikQuery.errors.message?<div style={{color:"red"}}>*{formikQuery.errors.message}</div>:<></>}
        <button type='submit' value='Send' className="submitBtn">Submit</button>

        <div className="links">
          
          <a href="https://www.instagram.com/mr_fun_factory_24/"><img width="48" height="48" src="https://img.icons8.com/fluency/96/instagram-new.png" alt="instagram-new"/></a>

          <a href="https://www.linkedin.com/in/samuvelantony/"><img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/></a>

          <a href="https://www.facebook.com/samuvel68"><img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new" className="link"/></a>

          <a href="https://twitter.com/samuvel6826"><img width="48" height="48" src="https://img.icons8.com/color/48/twitter--v1.png" alt="twitter--v1"/></a>

          
          <a aria-label="Chat on WhatsApp" href="https://wa.me/+919043251797?text=Hey%20Samuvel"><img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/></a>

        </div>

      </form>

  </section>
  <footer className="footer">
        Copyright &#169; 2023 Samuvel Antony. All right received.
    </footer>
  </>
}

export default Contact