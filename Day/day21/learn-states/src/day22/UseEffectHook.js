import React, { useEffect, useState } from 'react'

function UseEffectHook() {

    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');

    // cleanup work here
    function callThisOnUnmout() {
        console.log('unmout');
    }

    useEffect(() => {
        console.log(counter, 'counter updated');

        return callThisOnUnmout 

    }, [counter, name]);

    useEffect(() => {
        console.log('firt time mounted');
    }, []);

    useEffect(() => {
        console.log(counter, 'counter udated');
    }, [counter]);

    useEffect(() => {
        console.log(name, 'counter udated');
    }, [name]);

    useEffect(() => {
        console.log('re-rendering');
    });

  return (
    <div>
        <p>{counter}</p>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setCounter(counter+1)}>Increment</button>
    </div>
  )
}

export default UseEffectHook;