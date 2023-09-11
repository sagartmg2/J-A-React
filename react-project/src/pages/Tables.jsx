import TableRow from "../components/TableRow"
const Tables = () => {
    return <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>druation</th>
                <th>description</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <TableRow title="html" />
            <TableRow title="css" />
            <TableRow title="js" />
        </tbody>
    </table>
}

export default Tables