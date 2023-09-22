import Banner from "./components/Banner"
import Header from "./components/Header"
import Chair from "./assets/chair.png"
import { AiOutlineShoppingCart } from "react-icons/ai"

function App() {
  return (
    <>
      <Header />
      <Banner />
      <div className="container my-20">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            [1, 2, 3, 4].map(el => {
              return <div className="relative shadow-xl pt-4 border border-transparent text-center hover:border hover:border-primary group">
                <img src={Chair} alt="" className="mx-auto" />
                <div className="group-hover:bg-primary p-4">
                  <p className="text-secondary font-bold text-lg group-hover:text-white">Product Name</p>
                  <p className="text-[#151875] text-sm group-hover:text-white">$100</p>
                </div>
                <span className="hidden group-hover:inline-block p-4 border border-2 absolute top-4 left-4 rounded-full bg-[#EEEFFB]"
                  onClick={() =>{alert("add to cart")}}
                >
                  <AiOutlineShoppingCart className="text-primary-dark text-2xl" />
                </span>
              </div>
            })
          }
        </div>


      </div>
    </>
  )
}

export default App
