import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeViewComponent from "../pages/HomeViewPage/HomeViewComponent";
import Footer from "../components/Footer/Footer";
import ShopViewContainer from "../pages/ShopViewPage/ShopViewContainer";
import ProductCardPage from "./ProductCardPage/ProductCardPage";
import NavbarComp from "../components/NavbarHead/NavbarComp";
import './PageContainer.css'


const PageContainer = () => {
  return (
    <BrowserRouter>
      <div className="page-container" data-testid="page-container">
        <div className="page-header" data-testid="page-header">
          <NavbarComp />
        </div>
        <Routes>
          <Route path="/" element={<HomeViewComponent />}></Route>
          <Route path="/shop" element={<ShopViewContainer />}></Route>
          <Route path="/shop/product" element={<ProductCardPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default PageContainer;
