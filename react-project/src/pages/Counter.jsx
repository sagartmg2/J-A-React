

/* named export */
export function Counter() {

    let counterValue = 100

    const decrement = () =>{
        console.log("decrement");
        counterValue--
        console.log({counterValue});
    }
    const increment = () =>{
        console.log("increment");
        counterValue++
        console.log({counterValue});
    }

    console.log("render");
    return <>
        <p>old counter: {counterValue} </p>
        <hr />
        <button onClick={decrement} >decrement</button>
        <button onClick={increment}>increment</button>
    </>
}

