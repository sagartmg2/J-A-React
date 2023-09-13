import { useState } from "react";
import { Counter } from "./pages/Counter";
import InputField from "./pages/IinputField";
import Theme from "./pages/Theme";
import Header from "./components/Header";

export default function App() {
    /* useState  */
    const [globalTheme, setGlobalTheme] = useState("LIGHT");
    return (
        <>
            <div className={`${globalTheme == "DARK" ? "dark-theme" : ""}`}>
                <Header setGlobalTheme={setGlobalTheme} title="git" />
                <header style={{ display: "flex", justifyContent: "space-between" }}>
                    <ul>
                        <span>home</span>
                        <span>about us</span>
                    </ul>
                    <ul>
                        <button onClick={() => {
                            setGlobalTheme("DARK")
                        }}>dark</button>
                        <button onClick={() => {
                            setGlobalTheme("LIGHT")
                        }}>light</button>
                    </ul>
                </header>
                <InputField />
                <Counter />
                <Theme />
                <p style={{ width: "5px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquid commodi iste nobis error quaerat necessitatibus, reprehenderit repudiandae perspiciatis aperiam, voluptas quia ducimus laborum libero sed quas voluptatibus accusantium sapiente!</p>
            </div>
        </>

    )
}
