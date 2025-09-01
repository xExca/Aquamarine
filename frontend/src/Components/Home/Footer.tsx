const Footer = () => {
  return (
    <div className="h-[40vh] w-full mt-2 grid grid-cols-[30fr_40fr_30fr]">
      <div className="bg-red-400 flex justify-center items-center">
        <p className="text-4xl font-semibold">Aquamarine.</p>
      </div>
      <div className="bg-yellow-400 grid grid-cols-1 md:grid-cols-3 items-center justify-center">
        <div className="bg-blue-400">
          <p className="text-center">About us</p>
          <p className="text-center">Who we are</p>
          <p className="text-center">Stores</p>
          <p className="text-center">Rewards</p>
          <p className="text-center">Gift codes</p>
        </div>
        <div className="bg-orange-400">
          <p className="text-center">Top collection</p>
          <p className="text-center">Best Sellers</p>
          <p className="text-center">Salt & Sun Collection</p>
          <p className="text-center">Heatwave Collection</p>
        </div>
        <div className="bg-purple-400">
          <p className="text-center">Customer Care</p>
          <p className="text-center">Find your fit</p>
          <p className="text-center">Shipping</p>
          <p className="text-center">Returns and Exchanges</p>
          <p className="text-center">FAQs</p>
          <p className="text-center">Contanct us</p>
        </div>
      </div>
      <div className="bg-green-400 ">Footer 3</div>
    </div>
  )
}
export default Footer

