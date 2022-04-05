import React from "react";
import { Link } from "react-router-dom";


function Nav() {
  return (
    <section>
      <nav class="topnav" id="myTopnav">
        <div class="navi">
            <Link to='/Ian-s-React-Portfolio' >About</Link>
        </div>
        <div class="navi">
            <Link to="/work">Work</Link>
        </div>
        <div class="navi">
            <Link to="/contact">Contact</Link>
        </div>
        <div class="avatar">
            <img src={require ("../../assets/avatar/me.png")} alt="my avatar" />
            
        </div>
      </nav>
    </section>
  );
}

export default Nav;