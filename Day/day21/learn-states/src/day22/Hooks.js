import React, { useEffect, useRef, useState } from 'react'

function Hooks() {

    const [counter, setCounter] = useState(0);
    let normalCounter = 0;
    const refCounter = useRef(0);

    useEffect(() => {
        console.log('state counter', counter);
        console.log('Normal counter', normalCounter);
        console.log('Ref Counter', refCounter.current);

        return () => {
            console.log('unmounting component');
        }
    });

    function increment() {
        setCounter(counter + 1);
        normalCounter = normalCounter + 1;
        refCounter.current = refCounter.current + 1;
    }

  return (
    <div>
        <p>{counter}</p>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Hooks;