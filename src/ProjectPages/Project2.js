import React from 'react'
import image1 from '../designpadimage1.png'
import image2 from '../designpadimage2.png'
import image3 from '../designpadimage3.png'
import image4 from '../designpadimage4.png'
import '../Styles.css'


function Project2() {
    return (
        <div>
            <div>In this project I am demonstrating the use of Components, State and Props in React, as well as my Javascript functionality. The user is able to edit the design pads using the pad buttons. The design pad will take on the color of the pad button when it is dragged and dropped on top of it</div>
            <div className='image-stlye'>
                <img className="image" src={image1} alt='Project2'></img>
                <img className="image" src={image2} alt='Project2'></img>
                <img className="image" src={image3} alt='Project2'></img>
                <img className="image" src={image4} alt='Project2'></img>
            </div>
            <a href={"https://github.com/bilalsu/design-pad"}>Link to the Project on GitHub</a>
        </div>
    )
}



export default Project2