/* CRUD operations in database
    Create
    Read
    update
    delete
*/

import axios from "axios"
import { useEffect, useState } from "react"

/* http request methods

    Create  - post
    Read   -     get
    update - put/patch
    delete - delete.

 */

/* 
    http status codes 
        2  (success)
          200
          201,203,204
        3
        - redirect
        4   (client error)
            400 ,422
            401
            403
            404  // invalid path // respource not found
        5 server error (backend )
            500
*/




export default function TodosApi() {
    const [todos, setTodos] = useState([]);

    function fetchtodos(){
        axios.get("https://todo-api-dom.vercel.app/api/todos")
            .then(res => {
                setTodos(res.data.data)
            })
            .catch(err => {
                console.log("err");
            })
    }
    useEffect(() => {
        console.log("before-api-csll");
            fetchtodos()
        console.log("after -api-csll");
    }, [])

    const createNewTodo = (e) => {
        e.preventDefault()
        axios.post("https://todo-api-dom.vercel.app/api/todos", {
            title: e.target.title.value
        }).then(res =>{
            // alert("data created...")
            fetchtodos()
        }).catch(err =>{
            // console.log(err)
            alert(JSON.stringify(err.response.data))
        })
    }
    return <>
        <br />
        Todos - API
        <form onSubmit={createNewTodo}>

            <input type="text" name="title" />
            <button>add</button>
        </form>
        <hr />
        <ul>
            {
                todos.map(todo => {
                    return <li>{todo.title} <button>deelte</button></li>
                })
            }
        </ul>
    </>
}