import ReactDOM from 'react-dom/client'

import "./index.css"


let showResearchTask = false
// let userRole = "ADMIN"
// let userRole = "MANAGER"
let userRole = "customer"


/* functional component */
function Project(props) {
  console.log(props)
  return <div className="project">
    <img src="https://picsum.photos/200/200" alt="" />
    <h2 className='capitalize'>{props.title}</h2>
    <p>{props.descrption}</p>

    {
      (userRole == "ADMIN" || userRole == "MANAGER")
      &&
      <button>delete</button>
    }


  </div>
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <h1>Projects {1 + 1 * 2}</h1>
    <h1>userRole: {userRole}  </h1>

    {
      showResearchTask ?
        <div>
          <h1>research: props in react.</h1>
          <h1>research: if else in react jsx. ternary operator.</h1>
        </div>
        :
        null
    }

    <div className="projects">
      {/* Project("git") normal function call BUT we don't do like this in react    */}
      <Project title="html" descrption="html description" />  {/* tilte  is  props */}
      <Project title="css" descrption="css description" featured={true} />
      <Project title="git" descrption="git description" />
      <Project title="node" descrption="node description" />
    </div>




  </div>
)
