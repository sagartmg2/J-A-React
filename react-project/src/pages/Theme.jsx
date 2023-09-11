export default function Theme() {
    // let theme = "DARK"
    let theme = "LIGHT"

    const lightTheme = () => {
        theme = "LIGHT"
        console.log({theme});
    }
    const darkTheme = () => {
        theme = "DARK"
        console.log({theme});
    }

    /* 
        UNLUCK JAVASCRIPT
        TEMPLATE LITERAL
        TERNARY OOPERATOR   true ? "" : ""
    */
    console.log("render....");

    return <>
        <div className={`  ${theme === "DARK" ? "dark-theme" : ""}`} style={{ height: "100vh" }}>
            <button onClick={lightTheme}>light theme</button>
            <button onClick={darkTheme}>dark theme</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto neque dignissimos iste quia quas dolorum aliquam ullam consequuntur, odit magnam delectus labore modi tempore dolor minus! Quaerat, iure dolor!</p>
        </div>
    </>
}