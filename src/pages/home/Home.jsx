import { Hero, CoreFeatures, Testimonials, Faq, DebitCard } from "./index"
import { Footer } from "../../components"

const Home = () => {
  return (
   <>
    <div className="px-2">
    <Hero/>
    <CoreFeatures/>
    </div>
    <Testimonials/>
    <DebitCard/>
    <Faq/>
    <Footer/>
   </>
  )
}

export default Home