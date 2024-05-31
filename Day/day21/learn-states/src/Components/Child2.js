import React, {useState} from 'react'

function Child2(props) {

    const shorPrivateData = true;

  return (
    <div>
        <div>
            {shorPrivateData ? <p>This is Private : dfhuhdufh uidhsnfsnhiusnf</p> : <></>}
            {shorPrivateData && <p>This is Private : dfhuhdufh uidhsnfsnhiusnf</p>}
        </div>
        This is inside Child2: {props.countFromParent}
        <button onClick={props.uploadData}>Upload Data</button>
    </div>
    
  )
}

export default Child2