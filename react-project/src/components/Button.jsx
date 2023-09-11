import { BsEye, BsFillTrash3Fill, BsPenFill } from 'react-icons/bs'

export default function Button() {
    return (
        <button className="delete-btn" > <BsFillTrash3Fill /> delte</button>
    )
}

/* named export
    import {EditButton} from "..path..."
*/  
export function EditButton() {
    return (
        <button className="" style={ { color: "blue" }  }>
            <BsPenFill  />
            edit
        </button>
    )
}
export function ViewButton() {
    return (
        <button className="" style={ {  }  }>
            <BsEye  />
            view
        </button>
    )
}


