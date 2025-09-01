import HomeFull from "../Shared/HomeFull"
import ImageGallery from "./ImageGallery"

const BestSellers = () => {
  return (
    <HomeFull title="Best Sellers" message="Our most-loved swimsuits — flattering, comfortable, and made to move with you. Perfect for sun, sea, and everything in between.">
      <ImageGallery isBestSellers />
    </HomeFull>
  )
}
export default BestSellers