import React, { useState } from 'react'

export default function TodosState() {

    const [todos, setTodos] = useState(["html", "react", "node"]);

    const addTodo = (e) => {
        e.preventDefault()

        // todos.push("react") // ["html", "css","react"] // wrong way // \must not change state value directly
        // let temp = todos // arrays and objects are reference data-types

        let temp = [...todos]
        temp.push(e.target.title.value)
        setTodos(temp)
    }

    const deleteTodo = (idx) => {
        console.log("delete ");
        let temp = todos.filter((el, index) => index != idx)
        setTodos(temp)
    }

    console.log("re-render...");
    return (
        <>
            <br />
            <br />
            todos - state : {JSON.stringify(todos)}
            <br />
            <form onSubmit={addTodo}>
                <input type="text" name='title' />
                <button>Add</button>
            </form>
            <h1>Todos List</h1>
            <ul>
                {
                    todos.map((element, index) => {
                        return <li key={element}>{element}<button onClick={() =>{
                            deleteTodo(index)
                        }}>delete</button></li>
                    })
                }
            </ul>
        </>
    )
}
