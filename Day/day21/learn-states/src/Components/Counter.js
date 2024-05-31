import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    function updateCount() {
        setCount(count + 1);
        console.log("count is " + count);
    }

  return (
    <> 
        <p>The Value of count is: {count}</p>
        <button onClick={updateCount}>Increment</button>
    </>
  )
}

export default Counter;