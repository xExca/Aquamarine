import Navbar from "./Components/Navbar/Navbar"
import Landing from "./Components/Home/Landing"
import BestSellers from "./Components/Home/BestSellers"
import Collections from "./Components/Home/Collections"
import ImageGallery from "./Components/Home/ImageGallery"
import Discover from "./Components/Home/Discover"
import Footer from "./Components/Home/Footer"

const images = [
  {
    'productName': 'Sunset Orchid Bikini Set',
    'price': 1299,
    'url' : '/assets/swimsuit/sunset_orchid_bikini.jpg'
  },
  {
    'productName': 'Black Bikini Set',
    'price': 1099,
    'url': '/assets/swimsuit/black_bikini.jpg'
  }, 
  {
    'productName': 'Pink Flower Bikini Set',
    'price': 1299,
    'url': '/assets/swimsuit/pink_flower.jpg'
  },
  {
    'productName': 'White Robe',
    'price': 1099,
    'url': '/assets/swimsuit/white_robe.jpg'
  }
];

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <BestSellers/>
      <Collections />
      <ImageGallery isBestSellers={false} images={images}/>
      <Discover />
      <Footer />
    </>
  )
}
export default App