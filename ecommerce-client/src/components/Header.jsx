import { AiOutlineMail, AiOutlineUser, AiOutlinePhone, AiOutlineSearch } from "react-icons/ai"

export default function Header(){
    return <>
    <header className="  ">
        <div className="p-3 text-center bg-primary text-white sm:flex sm:justify-between">
          <div>
            <span> <AiOutlineMail className="inline" /> mhhasanul@gmail.com</span>
            <span className="ml-4"><AiOutlinePhone className="inline" />(12345)67890</span>
          </div>
          <div>
            <span> <AiOutlineUser className="inline" />login</span>
          </div>
        </div>
        <div className=" py-5 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 items-center">
            <p className="text-[#0D0E43] text-4xl font-bold">Hekto</p>
            <ul className="flex gap-4 items-center  ">
              <li><a href="" className="text-secondary">Home</a></li>
              <li><a href="">Product</a></li>
            </ul>
          </div>
          <form className="flex ">
            <input className="border focus:rounded border-black focus:border-secondary focus:outline-none"  type="text" />
            <button className="bg-secondary p-1">
              <AiOutlineSearch className="text-white" />
            </button>
          </form>
        </div>

      </header>
    </>
}