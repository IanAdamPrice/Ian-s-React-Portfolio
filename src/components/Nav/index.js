import React from "react";


function Nav() {
  return (
    <section>
      <nav class="topnav" id="myTopnav">
        <div class="navi">
            <a href="/">About</a>
        </div>
        <div class="navi">
            <a href="/work">Work</a>
        </div>
        <div class="navi">
            <a href="/contact">Contact</a>
        </div>
        <div class="avatar">
            <img src={require ("../../assets/avatar/me.png")} alt="my avatar" />
            
        </div>
      </nav>
    </section>
  );
}

export default Nav;