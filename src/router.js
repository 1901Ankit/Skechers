import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Index'
import Instagramslider from './components/instagram_Slider'
import Home from './views/home/index'
import Login from './components/login/Index'
import Headerbar from './components/navbar/Index'
import Collections from './views/collections'
import Technology from './views/technology'
import Productlist from './views/productlist'
import ProductDetails from './views/product_details'
import GoToTop from './components/scroll_to_top'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <GoToTop />
        <Headerbar />
        <Routes>
          <Route exact path={'/'} element={<Home />} />
          <Route exact path={'/login'} element={<Login />} />
          <Route exact path={'/collection'} element={<Collections />} />
          <Route exact path={'/technology'} element={<Technology />} />
          <Route exact path={'/home/productlist'} element={<Productlist />} />
          <Route
            exact
            path={'/home/productlist/:name'}
            element={<ProductDetails />}
          />
        </Routes>
        <Instagramslider />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Router
