import React from 'react';

function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "rgba(18, 22, 37, 0.822)" }}>
        <div className="container-fluid">
          <a id="myName" className="navbar-brand" href="https://govepitr.github.io/"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 pl-5">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#about-me">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#work">Work</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#links" id="navbarDropdown" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Links
            </a>
                <ul id="navMenu" className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" title="Github" target="_blank" href="https://github.com/Govepitr"><i
                      className="fa fa-github fa-2x "></i></a>
                  </li>
                  <li>
                    <a className="dropdown-item" title="LinkedIn" target="_blank"
                      href="https://www.linkedin.com/in/dan-arbelo/"><i className="fa fa-linkedin fa-2x"></i></a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="topContainer">
        <div>
          <hero>
            <div className="hero-image">
              <div className="text-right hero-text marker" data-color="234, 225, 210">
                <h3 className="heroic">I code, therefore I am..</h3>
              </div>
            </div>
          </hero>
        </div>
        <section id="about-me" className=" marker mt-5" data-color="165, 155, 145">
          <figure className="justify-content-center" id="biopic">
            <div className="text-center">
              <h2 id="aboutMe">About Me</h2>
              <img src="Assets\images\mesmol.jpg" className="bottom rounded" alt="Bio Pic" />
              <img src="Assets\images/smolder.jpg" className="top rounded" alt="Bio Pic" />
            </div>
          </figure>
          <div className="text-end marker mt-5" data-color="110, 178, 159">
            <p>
              Hi! My name is <span className="email" id="dan">Dan Arbelo</span>. I am a Full-Stack Web developer. One of the things I have realized in so many professional environments is that "less is more".
          That is something that is even more consistent in coding. Whether it's simple HTML/CSS, JavaScript, Handlebars.js, and even within the MERN stack itself!
          One of the things I have always prided myself on is not only taking the time to fully understand what tools I have to work with, but more importantly what is the most efficient way to
          apply them!<br />
          I have developed a fairly deep love for designing a user experience that is not overwhelming to a new-comer, but is also memorable to a those who have seen a few things.
        </p>
          </div>
        </section>

        <section id="work">
          <div className="body-title text-center marker mt-5 mb-5" data-color="67, 107, 131">
            <h2>My work</h2>
          </div>
          <div id="carouselControls" className="carousel slide mx-auto" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" id="run-buddy">
                <a target="_blank" href="https://govepitr.github.io/run-buddy/">
                  <img alt="Run Buddy" src="Assets\images\RB.gif" />
                </a>
              </div>
              <div className="carousel-item" id="flash-card">
                <a target="_blank" href="https://flash-card-buddy.herokuapp.com/">
                  <img alt="FCB" src="Assets\images\FCB.gif" />
                </a>
              </div>
              <div className="carousel-item" id="horiseon">
                <a target="_blank" href="https://govepitr.github.io/Horiseon/">
                  <img alt="Horiseon" src="Assets\images\Horiseon.gif" />
                </a>
              </div>
              <div className="carousel-item" id="Regex">
                <a target="_blank" href="https://gist.github.com/Govepitr/66dbf4e2a570ce3e23bded2e0deae5d9">
                  <img alt="Regex" src="Assets\images\regex.gif" />
                </a>
              </div>
              <div className="carousel-item" id="cinemasearch">
                <a target="_blank" href="https://govepitr.github.io/GroupProject1/">
                  <img alt="Cinema Search" src="Assets\images\cinemasearch.gif" />
                </a>
              </div>
              <div className="carousel-item" id="tardis">
                <img src="Assets\images\who.gif" alt="Who" />
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
        <section id="contact-me">

          <div className="container mt-5">
            <div id="contact" className="card-body col text-center">
              <h2 className="card-title">Contact Me</h2>
              <hr />
              <a href="mailto:dan@areblo.me" className="email">Email</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home