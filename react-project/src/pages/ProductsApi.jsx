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

    axios.get('https://dummyjson.com/products')
        .then(res => {
            setProducts(res.data.products)
        })

    console.log("after-api call");

    return (
        <>
            <div>ProductsApi</div>
            {JSON.stringify(products)}
        </>
    )
}
