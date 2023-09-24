import React from 'react'
import Chair from "../assets/chair.png"
import { AiOutlineShoppingCart } from "react-icons/ai"

/* props ={name,price,imgSrc} */

export default function Product({name,price,imgSrc}) {
  return <div className="relative shadow-xl  border border-transparent text-center hover:border hover:border-primary group">
  <img src={imgSrc} alt="" className="mx-auto h-52 object-cover " />
  <div className="group-hover:bg-primary p-4">
    <p className="text-secondary font-bold text-lg group-hover:text-white capitalize">{name}</p>
    <p className="text-[#151875] text-sm group-hover:text-white">${price}</p>
  </div>
  <span className="hidden group-hover:inline-block p-4 border border-2 absolute top-4 left-4 rounded-full bg-[#EEEFFB]"
    onClick={() =>{alert("add to cart")}}
  >
    <AiOutlineShoppingCart className="text-primary-dark text-2xl" />
  </span>
</div>
}
