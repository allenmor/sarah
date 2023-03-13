import React from 'react'
import { useState } from 'react'

function Messages() {

    const [messageClicked, setMessageClicked] = useState(true)
    const [scenerios, setScenerios] = useState(false)

    function handleMessageClicked(whatWasClicked) {
        if(whatWasClicked === 'messages') {
            setMessageClicked(true)
            setScenerios(false)
        } else {
            setMessageClicked(false)
            setScenerios(true)
        }
    }

  return (
      <div>

<div className='messages-div'>
        <button onClick={() => handleMessageClicked('messages')}>Messages</button>
        <button onClick={() => handleMessageClicked('scenerios')}>Scenerios</button>

    </div>
    {messageClicked &&
    <div className='message-scen-div' >

        <h1>Messages showing</h1>
        <h1>Messages showing</h1>
        <h1>Messages showing</h1>
    </div>
        }
    {scenerios && 
    <div className='message-scen-div'>
        <h1>Scenerios Showing</h1>
        <h1>Scenerios Showing</h1>
        <h1>Scenerios Showing</h1>
    </div>
}
      </div>
  )
}

export default Messages