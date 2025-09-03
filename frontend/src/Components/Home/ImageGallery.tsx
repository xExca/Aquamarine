import ProductImage from "../Shared/ProductImage"

type Props = {
  isBestSellers: boolean
  images: {
    'productName': string,
    'price': number,
    'url' : string
  }[]
}

const ImageGallery = ({isBestSellers, images}:Props) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-2 w-full ${!isBestSellers ? "pt-10" : ""}`}>
      {images.map((image, index) => <ProductImage key={index} productName={image.productName} price={image.price} url={image.url} />)}
    </div>
  )
}
export default ImageGallery