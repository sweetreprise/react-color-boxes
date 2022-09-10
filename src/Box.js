import React from 'react';
import './Box.css'

const Box = ({width, height, bgColor}) => {

    const handleClick = (e) => {
        e.preventDefault();
        e.target.parentElement.remove()
    }

    return (
        <div className='box' style={{
            backgroundColor: bgColor,
            width: width,
            height: height
        }}>
            <button onClick={handleClick}>X</button>
        </div>
    )
}

export default Box;