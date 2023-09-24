import React, { useEffect, useState } from 'react'
import Banner from "../components/Banner"
import Product from "../components/Product"
import axios from 'axios'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        /* fetch api data .. */
        axios.get("https://ecommerce-sagartmg2.vercel.app/api/products/trending")
            .then(res => {
                setProducts(res.data.data)
            })
    }, [])  // dependencies array  [] means run only one time and will fetch api only once.

    console.log("re-render");
    return (
        <>
            <Banner />

            <div className="container my-20">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        products.length === 0
                            ?
                            <>
                                <Skeleton height={300} />
                                <Skeleton height={300} />
                                <Skeleton height={300} />
                                <Skeleton height={300} />
                            </>
                            :
                            products.map(el => {
                                return <Product name={el.name} price={el.price} imgSrc={el.images[0]} />
                            })
                    }
                </div>
            </div>
        </>
    )
}
