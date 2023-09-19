import { AiOutlineMail, AiOutlineUser, AiOutlinePhone } from "react-icons/ai"

function App() {

  return (
    <>
      <header className=" bg-[#7E33E0] text-white p-3 text-center sm:flex sm:justify-between  ">
        <div>
          <span> <AiOutlineMail className="inline" /> mhhasanul@gmail.com</span>
          <span className="ml-4"><AiOutlinePhone className="inline" />(12345)67890</span>
        </div>
        <div>
          <span> <AiOutlineUser className="inline" />login</span>
        </div>


      </header>
    </>
  )
}

export default App
