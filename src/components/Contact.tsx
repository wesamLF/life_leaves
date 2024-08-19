
const Contact = () => {
  return (
    <div className=' font-playfair flex justify-center'>
      <div className="   max-w-[550px] w-full relative ">
        <div className="relative z-50 py-16 px-6 bg-primary_light">
          <div className="">
            <h3 className=' font-bold text-[36px]'>CONTACT US</h3>
            <div className=" w-[55%] ms-auto px-2 font-lato border-b border-secondaryBorder">
              <p className=' text-start uppercase	font-lato  text-sm'>let's have a cup of tea</p>
            </div>
          </div>
          <div className="mt-14 px-6 md:px-16">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label htmlFor="name" className="font-bold">NAME</label>
                <input type="text" id="name" className=" h-10 px-2 font-lato border border-secondaryBorder" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="font-bold">EMAIL</label>
                <input type="text" id="email" className=" h-10 px-2 font-lato border border-secondaryBorder" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="font-bold">MESSAGE</label>
                <textarea id="message" className=" h-24 border border-secondaryBorder px-2 font-lato" />
              </div>
            </div>
            <button className="w-full bg-secondary py-1 px-4 text-white font-playfair text-[18px] font-thin mt-10  ">
              Send
            </button>
          </div>
        </div>
        <div className="absolute -top-[50px] right-0 md:-right-[50px] w-[150px] h-[150px] bg-secondary">
        </div>

        <div className="absolute -bottom-[75px] -left-[55px] w-[100px] h-[100px] bg-primary ">
        </div>

      </div>
    </div>
  )
}

export default Contact