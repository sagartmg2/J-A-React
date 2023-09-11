/* functional component */
function Project(props) {
    console.log(props)
    return <div className={`project ${props.featured ? "featured" : ""}`}>
        <img src="https://picsum.photos/200/200" alt="" />
        <h2 className='capitalize'>{props.title}</h2>
        <p>{props.descrption}</p>
    </div>
}

export default Project