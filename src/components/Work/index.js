import React from "react";

function Work() {
  return (
    <section id="work">
            <div className="slideshow-container">

            <div className="mySlides fade">
                <a href="https://adunderwood96.github.io/a-novel-idea/">
                <img 
                  src={require ("../../assets/work/adunderwood96.github.io_a-novel-idea_ (6).png")} 
                  id="book" 
                  className="images" 
                  alt="A web app that allows you to search and save books"
                  
                />
                </a>
            </div>
  
            <div className="mySlides fade">
                <a href="https://ianadamprice.github.io/Challenge6-WeatherDashboard/">
                <img 
                  src={require ("../../assets/work/weather.png")} 
                  className="images" 
                  id="workout"
                  alt="a web app that lets you track your workouts"
                />
                </a>
            </div>
  
            <div className="mySlides fade">
                    <a href="https://boiling-scrubland-07440.herokuapp.com/">
                    <img 
                      src={require ("../../assets/work/whenyagottago.png")} 
                      className="images" 
                      id="placeholder"
                      alt="a placeholder"
                    />
                </a>
            </div>

            <div className="mySlides fade">
                    <a href="https://fast-wave-78429.herokuapp.com/">
                    <img 
                      src={require ("../../assets/work/bookAPI.png")} 
                      className="images" 
                      id="bookAPI"
                      alt="a placeholder"
                    />
                </a>
            </div>

            <div className="mySlides fade">
                    <a href="https://infinite-lake-21912.herokuapp.com/">
                    <img 
                      src={require ("../../assets/work/budgetTracker.png")} 
                      className="images" 
                      id="budget"
                      alt="a placeholder"
                    />
                </a>
            </div>

            <div className="mySlides fade">
                    <a href="https://afternoon-ridge-69887.herokuapp.com/">
                    <img 
                      src={require ("../../assets/work/oneApp.png")} 
                      className="images" 
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