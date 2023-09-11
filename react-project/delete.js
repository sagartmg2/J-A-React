
function useState(initialValue) {
    /* codes.... */
    const mutatorfunction = () => { }
    return [initialValue, mutatorfunction]
}

console.log(useState(100)) // [ 100, [Function: mutatorfunction] ]

const [setValue,value] = useState(100)  // object desctrucing // array destructuring..
console.log({value});
console.log({setValue});
