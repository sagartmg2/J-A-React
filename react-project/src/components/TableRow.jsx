import { BsFillTrash3Fill, BsPenFill } from "react-icons/bs"
import { FaPenAlt } from "react-icons/fa"
import DeleteButton, { EditButton, ViewButton } from "./Button"

function TableRow(props) { // props = {title:html}
    return <tr>
        <td>{props.title}</td>
        <td>two</td>
        <td>3</td>
        <td>
            {/* <button style={{ background: "red" }}>delete.</button> */}
            {/* <button> <BsFillTrash3Fill /> delte</button> */}
            <DeleteButton />
            <EditButton/>
            <ViewButton/>
            {/* <button>
                <FaPenAlt />
                <BsPenFill />
                edit
            </button> */}
        </td>
    </tr>
}

export default TableRow