import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "../Components/Layout/DefaultLayout"
import Home from "../Components/Page/Home"
import ProductItem from "../Components/Product/ProductItem"
import CheckoutLayout from "../Components/Layout/CheckoutLayout"
import Checkout from "../Components/Page/Checkout"
import Shop from "../Components/Page/Shop"
import CustomerCare from "../Components/Page/CustomerCare"
import Sale from "../Components/Page/Sale"
import UserManagement from "../Components/Page/UserManagement"


const AppRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductItem />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/customer-care" element={<CustomerCare />} />
          <Route path='/sale' element={<Sale />} />
          <Route path='/user-management' element={<UserManagement />} />
        </Route>
        <Route element={<CheckoutLayout />}>
          <Route path="/checkout/:id" element={<Checkout />}/> 
        </Route>
      </Routes>
    </BrowserRouter>  
  )
}

export default AppRoute