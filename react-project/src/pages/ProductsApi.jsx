import axios from "axios";
import { useState, useEffect } from "react";

export default function ProductsApi() {
    /* make api call */
    // re-renders occurs from top level..
    const [products, setProducts] = useState(["iphone", "samsugn"])

    // fetch('https://dummyjson.com/products')
    //     .then(res => res.json())
    //     .then(console.log);

    console.log("before-api-call");
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            setProducts(res.data)
        })
    },[])

    console.log("after-api call");

    return (
        <>
            <div>ProductsApi</div>
            {JSON.stringify(products)}
            {
                products.map(el =>{
                    return <li>{el.title}</li>
                })
            }
        </>
    )
}
