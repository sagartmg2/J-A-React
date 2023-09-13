
import { useState } from "react"

export default function Theme() {
    const [theme, setTheme] = useState("LIGHT")  // return [  "LIght", mutator function ]

    const lightTheme = () => {
        setTheme("LIGHT")
    }
    const darkTheme = () => {
        // theme = "DARK" // cannot change state directly
        setTheme("DARK") // only change state using their respecitve mutator function
    }

    /* 
        UNLUCK JAVASCRIPT
        TEMPLATE LITERAL
        TERNARY OOPERATOR   true ? "" : ""
    */
    console.log("render....");

    return <>
        <div className={`${theme === "DARK" ? "dark-theme" : ""}`} style={{ height: "100vh" }}>
            <button onClick={lightTheme}>light theme</button>
            <button onClick={darkTheme}>dark theme</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto neque dignissimos iste quia quas dolorum aliquam ullam consequuntur, odit magnam delectus labore modi tempore dolor minus! Quaerat, iure dolor!</p>
        </div>
    </>
}