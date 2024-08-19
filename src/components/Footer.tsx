import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (

    <section className=' mt-64 '>
      <div className="bg-primary flex flex-col items-center gap-10  py-32">
        <div className=" flex gap-6 text-2xl">
          <Facebook size={45} className="bg-white rounded-full p-2 cursor-pointer" />
          <Instagram size={45} className="bg-white rounded-full p-2 cursor-pointer" />
          <Twitter size={45} className="bg-white rounded-full p-2 cursor-pointer" />
        </div>
        <div className="">
          <ul className="flex items-center justify-center gap-6 md:gap-12 font-semibold font-playfair text-[20px] flex-wrap">
            <li className=" ">Home</li>
            <li className="">About us</li>
            <li className="">Products</li>
            <li className="">Contact</li>
          </ul>
        </div>
      </div>

      <div className=" bg-secondary w-full py-2 text-center text-primary">Copyright 2024, designed by wesam LF</div>
    </section>

  )
}

export default Footer