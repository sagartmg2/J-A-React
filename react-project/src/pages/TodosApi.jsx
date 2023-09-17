/* CRUD operations in database
    Create
    Read
    update
    delete
*/

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
    return <>
        <br/>
        Todos - API
        <hr />
        <ul>
            <li>react</li>
            <li>ghtml</li>
            <li>css</li>
        </ul>
    </>
}