import './App.css'
import { CarouselSize } from './components/CarouselComponent'
import CTAForm from './components/CTAForm'
import Feature from './components/Feature'
import FeaturesSection from './components/FeatureSection'
import FormWithMap from './components/FormWithMap'
import ImgWithHeading from './components/ImgWithHeading'
import Stats from './components/Stats'
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/ui/Footer'
import HeroSection from './components/ui/HeroSection'
import NavMenu from './components/ui/NavMenu'



function App() {

  return (   
   <>
    <NavMenu/>
    <HeroSection/>   
    <ImgWithHeading/>
    <CarouselSize/>  
      <Stats /> 
     <Feature/>
     <CTAForm/>
     <FeaturesSection/>
    <TestimonialSection/>
    <FormWithMap/>
    <Footer/>

    </>
  )
}

export default App
