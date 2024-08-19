


const CustomInfoCard = ({ dir }: { dir: "left" | "right" }) => {
    return (
        <div className={` bg-secondary flex  px-0 md:px-20 py-36 relative 
${dir == "left" ?"justify-end" : "justify-start" }`}
    >
        < div className = "bg-primary px-7 py-4  z-50" >
                <div className="">
                    <h3 className="font-bold font-playfair text-[48px]">The Benefits of Japanese Green Tea</h3>
                    <p className=" md:w-[450px] font-semibold font-lato text-[16px] leading-5 ">Japanese green tea is renowned not only for its distinctive, refreshing flavor but also for its numerous health benefits.  </p>


                </div>
                <button className=" bg-secondary py-2 px-4 text-white font-playfair text-[18px] font-thin mt-10  ">
                    Learn More
                </button>
            </div >


    <div className="  flex justify-center items-center">
        <img src="./benefits_image.png" alt="" className={`absolute ${dir == "left" ? " left-0" : " right-0"}`} />
    </div>
        </div >
    )
}

export default CustomInfoCard