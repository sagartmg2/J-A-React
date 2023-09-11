import ReactDOM from 'react-dom/client'

import "./index.css"


let deleteStyle = {
  backgroundColor: "red",
  color: "white"
}
/* functional component */
function TableRow(props) {  // props here is an object  {tilte:html, duration:2}
  // console.log("props", props)
  return <tr>
    <td style={{ fontWeight: "bold" }}  >{props.title}</td>
    <td>{props.duration}</td>
    <td>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quas impedit possimus voluptatibus ipsum reprehenderit deserunt, illum ratione sed temporibus facilis incidunt totam, sapiente quia molestias reiciendis quis consectetur fugiat!</p>
    </td>
    <td>
      {/* <button style="background-color:red;" >delete</button> */}
      <button style={deleteStyle} >delete</button>
    </td>
  </tr>
}

let projectCount = 3;

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <h1>Projects : {projectCount}   </h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>druation</th>
          <th>description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* 
            tableRow("html")  // arguement 
            tableRow("css")

            <TableRow title = "html" duration="2days" /> title and duration  are  props
        */}

        <TableRow title={"html"} duration="4" />
        <TableRow title="css" duration="10" />
        <TableRow title="git" duration="2" />
      </tbody>
    </table>
  </div>
)
