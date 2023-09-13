import React from 'react'

export default function Header(props) {
    return (
        <header style={{ display: "flex", justifyContent: "space-between" }}>
            <ul>
                <span>home</span>
                <span>about us</span>
            </ul>
            <ul>
                <button onClick={() => {
                    props.setGlobalTheme("DARK")
                }}>dark</button>
                <button onClick={() => {
                    props.setGlobalTheme("LIGHT")
                }}>light</button>
            </ul>
        </header>
    )
}
