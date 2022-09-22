import React, {useState} from 'react';
import './NewBoxForm.css'

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        width: '',
        height: '',
        bgColor: '#000000'
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(parseInt(formData.width), parseInt(formData.height), formData.bgColor);
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width:</label>
            <input 
                id="width"
                type="number" 
                min="100"
                max="500"
                name="width" 
                placeholder="Width"
                value={formData.width}
                onChange={handleChange}/>

            <label htmlFor="height">Height:</label>
            <input 
                id="height"
                type="number" 
                min="100"
                max="500"
                name="height" 
                placeholder="Height"
                value={formData.height}
                onChange={handleChange}/>

            <label htmlFor="bgColor">Background-color:</label>
            <input 
                id="bgColor"
                type="color" 
                name="bgColor" 
                placeholder="background-color"
                value={formData.bgColor}
                onChange={handleChange}/>
            
            <button>Enter</button>
        </form>
    )
}

export default NewBoxForm