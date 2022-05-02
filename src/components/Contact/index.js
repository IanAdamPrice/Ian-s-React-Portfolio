import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

import igSVG from '../../assets/icons/insta.svg';
import fbSVG from '../../assets/icons/fb.svg';
import ghSVG from '../../assets/icons/github.svg';
import linkSVG from '../../assets/icons/link.svg';


function Contact() {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (

    <section id="contact">
        
        <form id="contact-form" onSubmit={handleSubmit}>
        <h3>Contact</h3>
          <div>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name"  placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email"  placeholder="Your Email"/>
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" rows="5"  placeholder="Your Message..."/>
          </div>
            <button data-testid="button" type="submit">{status}</button>
        </form>

        <div className="divider">
        </div>
        
        <div className="social">
                <h2>Find Me Online</h2>
                <div className="icons" id="fb">
                    <a href="https://www.facebook.com/ian.a.price.3/">
                    <img 
                      src={fbSVG}
                      alt="facebook icon" 
                    />
                    </a>
                </div>
                <div className="icons" id="insta">
                    <a href="https://www.instagram.com/ianaprice/">
                    <img 
                      src={igSVG} 
                      alt="instagram icon" 
                      className='igLogo'
                    />
                    </a>
                </div>
                <div className="icons" id="github">
                    <a href="https://github.com/IanAdamPrice">
                    <img 
                      src={ghSVG} 
                      alt="github icon"
                    />
                    </a>
                </div>
                <div className="icons" id="link">
                    <a href="https://www.linkedin.com/in/ian-price-ba164b223/">
                    <img 
                      src={linkSVG} 
                      alt="LinkedIn icon"
                    />
                    </a>
                </div>
            </div>
        
    </section>
  )
}

export default Contact; 