import { AlignRight, X } from "lucide-react"
import { useState } from "react"




export const Nav = () => {


    const [isOpen, setIsopen] = useState(false)

    const OpenCloseIcon = (
        isOpen ? <X size={35} className="text-primary block sm:hidden"
            onClick={() => setIsopen(!isOpen)} />
            : <AlignRight size={35} className="text-primary block sm:hidden"
                onClick={() => setIsopen(!isOpen)} />


    )


    return (
        <nav className="px-5 md:px-20 py-2 relative bg-secondary sm:bg-inherit" >
            <div className=" flex justify-between items-center ">
                <div className="">
                    <img src="./logo.svg" alt="" />
                </div>
                <ul className=" hidden sm:flex items-center gap-12 font-semibold font-playfair  text-[20px]">
                    <li className=" ">Home</li>
                    <li className="">About us</li>
                    <li className="">Products</li>
                    <li className="">Contact</li>
                </ul>
                {OpenCloseIcon}
                <ul className={`z-10 py-10 absolute top-[100%] left-0 w-full 
             bg-secondary text-primary flex-col items-center gap-6 font-semibold font-playfair  text-[20px]
             ${isOpen ? "flex" : "hidden"}
             `}>
                    <li className=" ">Home</li>
                    <li className="">About us</li>
                    <li className="">Products</li>
                    <li className="">Contact</li>
                </ul>
            </div>

        </nav>
    )
}
