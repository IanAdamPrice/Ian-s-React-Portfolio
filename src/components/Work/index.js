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
                
                <div class="texxt">
                <div class="text">A Novel Idea <br /> HTML/CSS</div>
                </div>
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
                <div class="texxt">
                <div class="text">My Workout Tracker <br /> Refactor HTML/CSS</div>
                </div>
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
                <div class="texxt">
                <div class="text">Please Check Back Soon</div>
                </div>
                </a>
            </div>
  
            </div>
            <br />

        </section>

  )
}

export default Work