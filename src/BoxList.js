import React, {useState} from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import { v4 as uuid } from 'uuid';

const BoxList = () => {
    const INITIAL_STATE = [
        { id: uuid(), width: 100, height: 100, bgColor: '#000000'}
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    // const addBox = (width, height, bgColor) => {
    //     setBoxes(boxes => [...boxes, { id: uuid(), width, height, bgColor }])
    // }

    function addBox(width, height, bgColor) {
        setBoxes(boxes => [...boxes, { id: uuid(), width, height, bgColor }])
    }

    return (
        <div>
            <h3>BOXES!</h3>
            <NewBoxForm addBox={addBox}/>
            <div>
                {boxes.map(({id, width, height, bgColor}) => <Box 
                    key={id}
                    width={width}
                    height={height}
                    bgColor={bgColor}
                />)}
            </div>
        </div>
    )
}

export default BoxList;