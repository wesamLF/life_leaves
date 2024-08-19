
export const RightCylinderCard = () => {
    return (
        <div className=" flex justify-end px-2 md:px-0">
            <div className=" p-3 bg-primary sm:w-[100%] md:w-[85%] lg:w-[70%]  flex flex-col items-center md:flex-row
            rounded-tr-full rounded-tl-full rounded-bl-none
            md:rounded-tr-none  md:rounded-tl-full md:rounded-bl-full">
                <div className="">
                    <img src="./Sencha.png" alt="" width={315} height={315} />
                </div>
                <div className=" flex-1 flex flex-col items-center justify-center">
                    <div className=" flex w-full justify-center items-center gap-2">
                        <div className=" flex-1 w-auto h-[1px] bg-black "></div>
                        <h3 className=" flex-none font-bold font-playfair text-[48px]  ">SENCHA
                        </h3>
                        <div className="  flex-1 h-[1px] bg-black "></div>

                    </div>
                    <p className=" text-center font-semibold font-lato text-[16px] leading-5 w-2/3">Sencha is the most commonly consumed green tea in Japan.
                        It’s known for its refreshing,
                        slightly grassy flavor and bright green color.</p>

                    <button className=" bg-secondary py-2 px-4 text-white font-playfair text-[18px] font-thin mt-10  ">
                        Explore Our Collection
                    </button>
                </div>
            </div>
        </div>

    )
}
