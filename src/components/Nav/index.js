import React from "react";


function Nav() {
  return (
    <section>
      <nav class="topnav" id="myTopnav">
        <div class="navi">
            <link to='/' >About</link>
        </div>
        <div class="navi">
            <link to="/work">Work</link>
        </div>
        <div class="navi">
            <link to="/contact">Contact</link>
        </div>
        <div class="avatar">
            <img src={require ("../../assets/avatar/me.png")} alt="my avatar" />
            
        </div>
      </nav>
    </section>
  );
}

export default Nav;