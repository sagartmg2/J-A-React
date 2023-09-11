import Project from "../components/Project"

function Products() {
    return <>
        <h1>Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero tenetur amet sequi quos, repellat nihil sed nobis aperiam voluptas praesentium illo beatae, nisi fugiat expedita voluptates corporis velit temporibus....</p>
        <div className="projects">
            <Project title="html" descrption="desc.." />
            <Project title="html" descrption="desc.." featured={true} />
            <Project title="html" descrption="desc.."  />

        </div>
    </>
}

export default Products