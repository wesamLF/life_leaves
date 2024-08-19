
export const Hero = () => {
    return (
        <section className='   px-10 lg:px-16 xl:px-20 pt-40 pb-52 '>
            
            <div className=" ">
                <h1 className="relative font-playfair text-[48px] font-bold inline-block">Elevate Your Day with Pure, Premium Green Tea

                    <div className=" absolute -left-14 bottom-2 w-full h-[1px] bg-secondary"></div>
                </h1>
                <p className="text-textSecondary font-lato max-w-[550px] text-[20px] leading-6	">Handpicked from the world’s finest tea estates,
                    our green tea blends offer unmatched freshness
                    and flavor. Experience a rejuvenating sip with
                    every cup.
                </p>

                <button className=" bg-secondary py-2 px-4 text-white font-playfair text-[18px] font-thin mt-10  ">
                    Explore Our Collection
                </button>
            </div>
            <div className="absolute right-0  top-[70%] sm:top-[45%] lg:top-[30%]">
                <img src="hero2.png" alt="" className="md:w-[650px]  z-0" />
            </div>

        </section>
    )
}
