
let todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "html",
        "completed": true
    },
    {
        "userId": 1,
        "id": 2,
        "title": "css",
        "completed": true
    },
    {
        "userId": 1,
        "id": 4,
        "title": "javascript",
        "completed": true
    },
    {
        "userId": 1,
        "id": 4,
        "title": "react",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "express",
        "completed": false
    },
]

let user = "ram"
// let user = {name:"ram"}

function Todos() {
    return <>
        {/* user: {user} */}
        todos: {JSON.stringify(todos)}

        <h1>Todos</h1>

        <table>
            <thead>
                <tr>
                    <th>title</th>
                    <th>complted</th>
                </tr>
            </thead>
            <tbody>

                {
                    todos.map(el => {
                        return <tr>
                            <td>{el.title}</td>
                            <td
                                className={` ${el.completed ? "bg-green" : "bg-red"}   `}
                            // style={{
                            //     background: el.completed ? "green" : "red"
                            // }}
                            >{el.completed ? "complteted." : "pending"}</td>
                        </tr>
                    })
                }


                {/* {
                    [
                        <tr>one</tr>,
                        <tr>two</tr>
                    ]
                    
                } */}


                {/* <tr>
                    <td>{todos[0].title}</td>
                    <td>{todos[0].completed}</td>
                </tr>
                <tr>
                    <td>{todos[1].title}</td>
                    <td>{todos[1].completed}</td>
                </tr>
                <tr>
                    <td>{todos[2].title}</td>
                    <td>{todos[2].completed}</td>
                </tr> */}
            </tbody>
        </table>
    </>
}

export default Todos