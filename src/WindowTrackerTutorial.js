import React from 'react'
import WindowTracker from './WindowTracker'

function WindowTrackerTutorial() {

    const [show, setShow] = React.useState(true)

    function toggle(){
        setShow(prevShow => !prevShow)
    }

    

  return (
    <div className='window-tracker-tutorial'>
        <button onClick={toggle}>Toggle Window Tracker</button>
        {show && <WindowTracker />}
    </div>
  )
}

export default WindowTrackerTutorial