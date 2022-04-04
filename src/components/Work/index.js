import React from "react";

function Work() {
  return (
    <section id="work">
            <div class="slideshow-container">

            <div class="mySlides fade">
                <a href="https://adunderwood96.github.io/a-novel-idea/">
                <img 
                  src={require ("../../assets/work/adunderwood96.github.io_a-novel-idea_ (6).png")} 
                  id="book" 
                  class="images" 
                  alt="A web app that allows you to search and save books"
                  
                />
                </a>
            </div>
  
            <div class="mySlides fade">
                <a href="">
                <img 
                  src={require ("../../assets/work/workout-tracker.png")} 
                  class="images" 
                  id="workout"
                  alt="a web app that lets you track your workouts"
                />
                </a>
            </div>
  
            <div class="mySlides fade">
                    <a href="">
                    <img 
                      src={require ("../../assets/work/Horiseon.png")} 
                      class="images" 
                      id="placeholder"
                      alt="a placeholder"
                    />
                </a>
            </div>

            <div class="mySlides fade">
                    <a href="">
                    <img 
                      src={require ("../../assets/work/Horiseon.png")} 
                      class="images" 
                      id="placeholder"
                      alt="a placeholder"
                    />
                </a>
            </div>

            <div class="mySlides fade">
                    <a href="">
                    <img 
                      src={require ("../../assets/work/Horiseon.png")} 
                      class="images" 
                      id="placeholder"
                      alt="a placeholder"
                    />
                </a>
            </div>

            <div class="mySlides fade">
                    <a href="">
                    <img 
                      src={require ("../../assets/work/Horiseon.png")} 
                      class="images" 
                      id="placeholder"
                      alt="a placeholder"
                    />
                </a>
            </div>
  
            </div>

        </section>

  )
}

export default Work