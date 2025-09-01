import ProductImage from "../Shared/ProductImage"

type Props = {
  isBestSellers: boolean
}
const ImageGallery = ({isBestSellers}:Props) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-2 w-full ${!isBestSellers ? "pt-10" : ""}`}>
      <ProductImage productName="Sunset Orchid Bikini Set" price={1299} isProduct={true}/>
      <ProductImage productName="Sunset Orchid Bikini Set" price={1299} isProduct={true}/>
      <ProductImage productName="Sunset Orchid Bikini Set" price={1299} isProduct={true}/>
      <ProductImage productName="Sunset Orchid Bikini Set" price={1299} isProduct={true}/>
    </div>
  )
}
export default ImageGallery