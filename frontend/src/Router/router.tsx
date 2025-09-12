import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "../Components/Layout/DefaultLayout"
import Home from "../Components/Page/Home"
import ProductItem from "../Components/Product/ProductItem"
import CheckoutLayout from "../Components/Layout/CheckoutLayout"
import Checkout from "../Components/Page/Checkout"


const AppRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductItem />} />
        </Route>
        <Route element={<CheckoutLayout />}>
          <Route path="/checkout" element={<Checkout />}/> 
        </Route>
      </Routes>
    </BrowserRouter>  
  )
}

export default AppRoute