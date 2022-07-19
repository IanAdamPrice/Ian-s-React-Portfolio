import React, { useRef } from 'react';

import { validateEmail } from '../../utils/helpers';

import igSVG from '../../assets/icons/insta.svg';
import fbSVG from '../../assets/icons/fb.svg';
import ghSVG from '../../assets/icons/github.svg';
import linkSVG from '../../assets/icons/link.svg';


function Contact() {


  return (

    <section id="contact">
        
        <form id="contact-form">
        <h3>Contact</h3>
        <h4>Email: ianadamprice@gmail.com</h4>
          <div>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name"  placeholder="Your Name" tabIndex="1"/>
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email"  placeholder="Your Email" tabIndex="2"/>
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" rows="5"  placeholder="Your Message..." tabIndex="3"/>
          </div>
            <button data-testid="button" type="submit">Submit</button>
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