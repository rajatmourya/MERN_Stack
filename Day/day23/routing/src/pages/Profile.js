// import {joinPaths} from "@remix-run/router";
import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

function Profile() {

    const parameters = useParams();

    useEffect(() => {
        
    }, [parameters])
    
    

  return (
    <div>
        <h1>Profile of {parameters.userId} </h1>
    </div>
  )
}

export default Profile