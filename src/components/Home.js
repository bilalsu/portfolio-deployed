import React from 'react'
import image from '../smallbilal.jpg'
import '../Styles.css'

function Home() {
    return (
        <div>
            <h1>Bilal Suraj</h1>
            <img className="bilal" src={image} alt='Small Bilal Giving Side Eye'></img>

        </div>
    )
}

export default Home