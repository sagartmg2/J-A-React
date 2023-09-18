import { useState } from "react";
import { Counter } from "./pages/Counter";
import InputField from "./pages/IinputField";
import Theme from "./pages/Theme";
import Header from "./components/Header";
import Todos from "./pages/Todos";
import TodosState from "./pages/TodosState";
import ProductsApi from "./pages/ProductsApi";
import ComponentLifeCycle from "./pages/ComponentLifeCycle";
import TodosApi from "./pages/TodosApi"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
    /* useState  */
    const [globalTheme, setGlobalTheme] = useState("LIGHT");

    return (
        <>

            <div className={`${globalTheme == "DARK" ? "dark-theme" : ""}`}>
                <Link to="/todos"> todos-api</Link>
                <Link to="/lifecycle" style={{ marginLeft: "1rem" }}> component-lifecylce</Link>
                <Link to="/products" style={{ marginLeft: "1rem" }}>products-api</Link>
                <Routes>
                    <Route path="todos" element={<TodosApi />} />
                    <Route path="lifecycle" element={<ComponentLifeCycle />} />
                    <Route path="products" element={<ProductsApi />} />
                </Routes>
                {/* <TodosState/> */}
                {/* <Header
                    currentTheme={globalTheme}
                    setGlobalTheme={setGlobalTheme}
                />
                <InputField />
                <Counter />
                <Theme />
                <Todos/> */}
                {/* <p style={{ width: "5px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquid commodi iste nobis error quaerat necessitatibus, reprehenderit repudiandae perspiciatis aperiam, voluptas quia ducimus laborum libero sed quas voluptatibus accusantium sapiente!</p> */}
            </div>
        </>

    )
}
