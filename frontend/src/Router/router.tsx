import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "../Components/Layout/DefaultLayout"
import Home from "../Components/Page/Home"
import ProductItem from "../Components/Product/ProductItem"


const AppRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductItem />} />
        </Route>
      </Routes>
    </BrowserRouter>  
  )
}

export default AppRoute