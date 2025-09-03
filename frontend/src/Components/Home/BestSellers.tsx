import HomeFull from "../Shared/HomeFull"
import ImageGallery from "./ImageGallery"

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
const BestSellers = () => {
  return (
    <HomeFull title="Best Sellers" message="Our most-loved swimsuits — flattering, comfortable, and made to move with you. Perfect for sun, sea, and everything in between.">
      <ImageGallery isBestSellers images={images} />
    </HomeFull>
  )
}
export default BestSellers