import React from "react";
import "../style/Projects.scss";
import Carousel from './Carousel'

export default function projects() {
    return (
        <div className='container-projects' id='projects'>
            <span><h1>RECENT PROJECTS</h1></span>
            <Carousel/>

        </div>

    )

}
