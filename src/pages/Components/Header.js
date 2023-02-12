import { FiMenu, FiSearch } from "react-icons/fi"
import { IoIosOptions } from "react-icons/io"
import { MdOutlineContactSupport } from "react-icons/md"
import { FiSettings } from "react-icons/fi"
import { GrApps } from "react-icons/gr"
import { FaUser } from "react-icons/fa"

export default function Header() {
    return (
        <header className="flex p-6 shadow-sm border-b sticky top-0 bg-white z-30" >
            <div className="flex flex-row cursor-pointer">
                <div className="flex flex-row space-x-16  items-center" >
                    < FiMenu className="flex  justify-center mr-5" />

                    <img width="70" height="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="gmail logo" />

                    <div >
                        <form className="flex border border-gray-400 justify-center border border-gray-200 rounded-lg shadow-lg px-40 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center  ">
                            < input type="text" className=" " />
                            <FiSearch className="" />
                            <IoIosOptions />
                        </form>
                    </div>

                    <MdOutlineContactSupport className="flex" />
                    <FiSettings />
                    <GrApps />
                    <FaUser />

                </div>








            </div>

        </header >

    )
}
