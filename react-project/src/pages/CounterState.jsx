import { useState } from "react";


/* named export */
export function Counter() {

    // let counterValue = 100
    let initialValue = 100
    const [counterValue, setCounterValue] = useState(initialValue) // return [100,mutatorFunciton] // array destructuring.

    const decrement = () => {
        console.log("decrement");
        setCounterValue(counterValue - 1);
    }

    const increment = () => {
        console.log("increment");
        // counterValue++
        // console.log({ counterValue });
        setCounterValue(counterValue + 1)
    }

    console.log("render");
    return <>
        <p>counter: {counterValue} </p>
        <hr />
        <button onClick={decrement} >decrement</button>
        <button onClick={increment}>increment</button>
    </>
}

