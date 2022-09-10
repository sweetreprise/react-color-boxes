import React, {useState} from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'

const BoxList = () => {
    const INITIAL_STATE = [
        { width: 100, height: 100, bgColor: 'black'}
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (width, height, bgColor) => {
        setBoxes(boxes => [...boxes, { width, height, bgColor }])
    }

    return (
        <div>
            <h3>BOXES!</h3>
            <NewBoxForm addBox={addBox}/>
            <div>
                {boxes.map(({width, height, bgColor}) => <Box 
                    width={width}
                    height={height}
                    bgColor={bgColor}
                />)}
            </div>
        </div>
    )
}

export default BoxList;