import { useState } from "react";

export default function Counter() {
    let count = 100
    const [value, setValue] = useState(999999);

    function increment() {
        count++
        console.log({ count })
    }
    function incrementValue() {
        setValue(value + 1)
    }

    console.log("render..")
    return (
        <>
            <div>Counter - {count}</div>
            <div>value- {value}</div>
            <button onClick={increment} >increment counter</button>
            <button onClick={incrementValue} >increment value</button>
        </>
    )
}
