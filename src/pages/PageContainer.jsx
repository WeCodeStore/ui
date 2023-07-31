import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeViewComponent from "../pages/HomeViewPage/HomeViewComponent";
import Footer from "../components/Footer/Footer";
import ShopViewContainer from "../pages/ShopViewPage/ShopViewContainer";
import ProductPage from "./ProductPage/ProductPage";
import NavbarComp from "../components/NavbarHead/NavbarComp";
import './PageContainer.css'
import LoginPage from "./LoginPage/LoginPage";


const PageContainer = () => {

  return (
    <BrowserRouter>
      <div className="page-container" data-testid="page-container">
        <div className="page-header" data-testid="page-header">
          <NavbarComp />
        </div>
        <Routes>
          <Route path="/" element={<HomeViewComponent />}></Route>
          <Route path="/shop/:catId" element={<ShopViewContainer />}></Route>
          <Route path="/shop/product/:prodId" element={<ProductPage />}></Route>
          <Route path="/profile" element={<LoginPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default PageContainer;
