import React from 'react';
import './Box.css'

const Box = ({id, width, height, bgColor}) => {

    const handleClick = (e) => {
        e.preventDefault();
        e.target.parentElement.remove()
    }

    return (
        <div className='container'>
            <div className='box' data-testid='box' key={id} style={{
            backgroundColor: bgColor,
            width: width,
            height: height
            }}>
                <button data-testid='delete-button' onClick={handleClick}>X</button>
                <span className='color-id'>{bgColor}</span>
            </div>
        </div>
    )
}

export default Box;