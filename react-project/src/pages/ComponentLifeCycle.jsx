import { useEffect, useState } from "react"

export default function ComponentLifeCycle() {
    const [state, setstate] = useState(100);
    const [input, setInput] = useState("");

    useEffect(() => {
        console.log("use-effect  -- mounted..");
    },[]) // dependencies array of useffect

    useEffect(() => {
        console.log("input value changed.");
    },[input]) // dependencies array of useffect

    return (
        <>
            <div>ComponentLifeCycle</div>
            <ul>
                <li>mounted</li>
                <li>did update</li>
                <li>did unmount</li>
            </ul>

            <h1>state: {state}</h1>
            <h1>input: {input}</h1>
            <button onClick={() => {
                setstate(state + 1)
            }}>add</button>

            <input type="text" onChange={(e) => {
                setInput(e.target.value)
            }} />
        </>
    )
}
