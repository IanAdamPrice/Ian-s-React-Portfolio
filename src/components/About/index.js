import React from 'react';

function About() {
  return (
    <section class="hero" id="hero">
      <div class="about">
        <img 
          src={require ("../../assets/avatar/me.png")} 
          alt="My avatar" 
        />
        <img 
          src={require ("../../assets/avatar/me2.png")}
          alt="Alternate version of avatar"
          class="img-back"
        />
      </div>
      <div class="aboutMe">
        <h2>
            Hello!
        </h2>
        <h1>
            My name is <span class="name">Ian Price</span> 
        </h1>
        <p>
            I am a student at the coding bootcamp at the University of North Carolina at Charlotte. I began my career as a filmmaker specializing in cinematography before making a transition into web development.
            <br />
            <br />
            I am an avid animal lover and if I am not sitting at my computer you can find me at the dog park or watching basketball. 
        </p>
      </div>
    </section>
  );
}

export default About;
