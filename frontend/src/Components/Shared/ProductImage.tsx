import { FaSearch } from "react-icons/fa";
type Props = {
  productName: string
  price: number
  isProduct?: boolean
}
const ProductImage = ({productName, price, isProduct=false}: Props) => {
  return (
    <div className={`relative ${isProduct ? "group" : ""} overflow-hidden rounded-lg`}>
      {/* Product Image */}
      <img
        src="https://placehold.co/325x500"
        alt="home"
        className="w-full h-auto object-cover transition duration-300 group-hover:blur-sm group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col py-16 px-8 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500">
        <h3 className="text-white font-bold text-3xl">{productName}</h3>
        <p className="text-white text-xl mb-2">₱{price}</p>
        <div className="flex items-center justify-center">
          <FaSearch className="text-white text-5xl"/>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
