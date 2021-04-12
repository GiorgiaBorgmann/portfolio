import React from "react";
import "../style/AboutMe.scss";
import photo from '../style/background-text.png'
import Particles from 'react-particles-js'
import { Link } from "react-scroll";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      
      <div className="container-particles" id='home'>
      <Particles
        width='100wh'
        height="100vh"
        className="particles"
        params={{
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
            polygon: {
              enable: false,
              type: 'inside',
              move: {
                  radius: 5
              }},
          },
        }}
      />
      <div className='container-name'>
      <svg viewBox="0 0 505 575" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2.15409" width="348.098" height="348.098" transform="matrix(0.718032 -0.696011 0.718032 0.696011 0.879832 245.867)" stroke="white" stroke-width="4" />
          <rect x="2.15409" width="348.098" height="348.098" transform="matrix(0.718032 -0.696011 0.718032 0.696011 0.607387 287.493)" stroke="white" stroke-width="4" />
          <rect x="2.15409" width="348.098" height="348.098" transform="matrix(0.718032 -0.696011 0.718032 0.696011 0.607387 331.477)" stroke="white" stroke-width="4" />
        </svg>
        <h1>GIORGIA</h1>
        <h1>BORGMANN</h1>
        <h3>Web developer</h3>
      </div>
      <div className="container-image-text" id='aboutMe'>
        <span><h1>ABOUT ME</h1></span>
        <div className='container-text-about-me'>
          <img src={photo} alt='computer' />
          <div className="color-text-container">
            <p>
              Hi :) I'm a full-stack developer passionate about utilizing technology and
              design to create an intuitive, dynamic user experience.
          </p>
            <p>
              I'm a well-organized problem solver, and an independent worker with high
              attention to detail. I'm also a fan of traveling, cooking, and outdoor
              activities.

          </p>
            <p>
              I'm interested in the entire full-stack spectrum, focused on front-end as well as
            working on ambitious projects with positive people.
            </p>
            <div className='btn-container'>
              <Link class="btn" to="projects" spy={true} smooth={true} offset={-60}>
                <svg width="277" height="62">
                  <defs>
                    <linearGradient id="grad1">
                      <stop offset="0%" stop-color="#FF8282" />
                      <stop offset="100%" stop-color="#E178ED" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="5"
                    y="5"
                    rx="25"
                    fill="none"
                    stroke="url(#grad1)"
                    width="266"
                    height="50"
                  ></rect>
                </svg>
                <span>See projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
