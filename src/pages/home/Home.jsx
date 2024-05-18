import { useContext } from "react"
import  Category  from "../../components/category/Category"
import HeroSection from "../../components/herosection/HeroSection"
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard"
import Layout from "../../components/layout/Layout"
import Testimonial from "../../components/testimonial/Testimonial"
import Track from "../../components/track/Track"
import Loader from "../../components/loader/Loader"

const Home = () => {

  return (
    <Layout>
      <HeroSection/>
      <Category/>
      <HomePageProductCard/>
      <Track/>
      <Testimonial/>
      <Loader/>
    </Layout>
  )
}

export default Home
