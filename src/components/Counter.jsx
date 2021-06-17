import React from 'react';
import useCount from '../counterhook';

function Counter(){
    let c = localStorage.getItem("count");
    const [count,increment,decrement] = useCount(c,3);

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment by 1</button>
            <button onClick={decrement}>Decrement by 1</button>
        </div>
        

    )

}

export default Counter;
