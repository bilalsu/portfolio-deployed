import React from 'react'
import Pdf from '../Documents/bilalresume.pdf'



function AboutMe() {
    return (
        <div>
            <header>A Little About Me</header>
            <div><h4>My name is Bilal Suraj. I graduated from Lehman Colloge in May 2021, double majoring in Computer Science and Health Services Administration. My hobbies include running, traveling, and trying new foods. Below you can download my resume.
    </h4></div>
            <a href={Pdf} target='bilalresume.pdf' download>Download Bilal's Resume</a>
        </div>
    )
}
export default AboutMe
