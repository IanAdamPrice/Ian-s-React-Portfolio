import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

import igSVG from '../../assets/icons/insta.svg';
import fbSVG from '../../assets/icons/fb.svg';
import ghSVG from '../../assets/icons/github.svg';
import linkSVG from '../../assets/icons/link.svg';


function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (

    <section id="contact">
        
        <form id="contact-form" onSubmit={handleSubmit}>
        <h3>Contact</h3>
          <div>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" defaultValue={name} onBlur={handleChange} placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" defaultValue={email} onBlur={handleChange} placeholder="Your Email"/>
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" rows="5" defaultValue={message} onBlur={handleChange} placeholder="Your Message..."/>
          </div>
          {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
            <button data-testid="button" type="submit">Submit</button>
        </form>

        <div class="divider">
        </div>
        
        <div class="social">
                <h2>Find Me Online</h2>
                <div class="icons" id="fb">
                    <a href="https://www.facebook.com/ian.a.price.3/">
                    <img 
                      src={fbSVG}
                      alt="facebook icon" 
                    />
                    </a>
                </div>
                <div class="icons" id="insta">
                    <a href="https://www.instagram.com/ianaprice/">
                    <img 
                      src={igSVG} 
                      alt="instagram icon" 
                      className='igLogo'
                    />
                    </a>
                </div>
                <div class="icons" id="github">
                    <a href="https://github.com/IanAdamPrice">
                    <img 
                      src={ghSVG} 
                      alt="github icon"
                    />
                    </a>
                </div>
                <div class="icons" id="link">
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