import { GoPerson } from "react-icons/go"
import Navbar from "./Components/Navbar/Navbar"
import Landing from "./Components/Home/Landing"
import BestSellers from "./Components/Home/BestSellers"
import Collections from "./Components/Home/Collections"
import ProductImage from "./Components/Shared/ProductImage"
import ImageGallery from "./Components/Home/ImageGallery"
import Discover from "./Components/Home/Discover"
import Footer from "./Components/Home/Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <BestSellers/>
      <Collections />
      <ImageGallery isBestSellers={false}/>
      <Discover />
      <Footer />
    </>
  )
}
export default App