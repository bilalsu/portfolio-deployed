import React from 'react'
import image1 from '../favLinksImages1.png'
import image2 from '../favLinksImages2.png'


function Project1() {
    return (
        <div>
            <div>In this project I am demonstrating the use of Components, State and Props in React, as well as my Javascript functionality. It is a form in which a user can input their favorite websites. </div>
            <img src={image1} alt='Project1'></img>
            <img src={image2} alt='Project1'></img>
            <a href={"https://github.com/bilalsu/homework2"}>Link to the Project on GitHub</a>
        </div>
    )
}



export default Project1