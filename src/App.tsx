import './App.css'
import Contact from './components/Contact'
import CustomInfoCard from './components/CustomInfoCard'
import Footer from './components/Footer'
import { Hero } from './components/Hero'
import LeftCylinderCard from './components/LeftCylinderCard'
import { Nav } from './components/Nav'
import { RightCylinderCard } from './components/RightCylinderCard'

function App() {

  return (
    <>
      <div className="overflow-hiddend">
        <div className="bg-custom-gradient">
          <Nav />
          <Hero />
        </div>
        <section className=" mt-60 md:mt-36">

          <div className="flex justify-center">
            <h2 className=' inline-block text-secondary font-bold font-playfair text-[40px] text-center relative'>
              OUR COLLECTION
              <div className=" absolute -left-[482px] bottom-2 w-full sm:w-[850px] h-[1px] bg-secondary "></div>

            </h2>
          </div>
          <div className=" py-24 flex flex-col gap-20">
            <RightCylinderCard />
            <LeftCylinderCard />
            <RightCylinderCard />

          </div>
        </section>
        <section className='mt-52 px-0 md:px-20 flex flex-col gap-[400px]'>
          <CustomInfoCard dir="right"/>
          <CustomInfoCard dir="left"/>
          <CustomInfoCard dir="right"/>

        </section>
        <section className=' mt-64 px-0 md:px-20 '>
          <Contact />
        </section>
        <Footer />
      </div>

    </>
  )
}

export default App
