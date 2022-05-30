import React, { useState } from 'react'

function Box(props) {

    // const [on, setOn] = useState(props.on)



    const boxStyle = {
        backgroundColor: props.on ? 'green' : 'transparent'
    }

    return (
        <div onClick={() => props.toggleOnState(props.id)} style={boxStyle} key={props.id} className='box'></div>
    )
}

export default Box