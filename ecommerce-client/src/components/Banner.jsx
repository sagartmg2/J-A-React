import React from 'react'
import BannerImage from "../assets/banner-1.png"

export default function Banner() {
    return (
        <>
            <div className=" h-[80vh]  bg-cover bg-no-repeat bg-center flex items-cente "
                style={{
                    backgroundImage: `url(${BannerImage})`
                }}>
                <div className="container mt-8 lg:mt-20" >
                    <div className="w-1/2">
                        <p className="text-secondary font-bold mb-3">Best Furniture For Your Castle....</p>
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 lg:mb-7">
                            New Furniture CollectionTrends in 2020
                        </p>
                        <p className="text-primary-light  mb-2 lg:mb-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscingin phasellus non in justo.
                        </p>
                        <button className="bg-secondary text-white px-3 py-1 lg:px-6 lg:py-3">Shop Now</button>
                    </div>
                </div>
            </div>

            <div className="p-40 hidden "
                style={{
                    backgroundImage: `url("https://fastly.picsum.photos/id/116/1920/1080.jpg?hmac=6YPBGD1f3FmqVLG2HweZHfprOzOVVBafm7EJ50g9iSU")`
                }}>
                <h1>hello</h1>
            </div>
            {/* <img src={BannerImage} alt="banner" /> */}
            {/* <img src="./assets/banner-1.png" alt="banner" /> */}
            {/* <img src="https://fastly.picsum.photos/id/116/1920/1080.jpg?hmac=6YPBGD1f3FmqVLG2HweZHfprOzOVVBafm7EJ50g9iSU" alt="" /> */}
        </>
    )
}
