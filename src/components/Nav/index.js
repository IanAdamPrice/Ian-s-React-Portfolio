import React from "react";
import { Link } from "react-router-dom";


function Nav() {
  return (
    <section>
      <nav className="topnav" id="myTopnav">
        <div className="navi">
            <Link to='/' >About</Link>
        </div>
        <div className="navi">
            <Link to="/work">Work</Link>
        </div>
        <div className="navi">
            <Link to="/contact">Contact</Link>
        </div>
        <div className="avatar">
            <img src={require ("../../assets/avatar/me.png")} alt="my avatar" />
            
        </div>
      </nav>
    </section>
  );
}

export default Nav;