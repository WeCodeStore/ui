import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeViewComponent from "../pages/HomeViewPage/HomeViewComponent";
import Footer from "../components/Footer/Footer";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import ShopViewContainer from "../pages/ShopViewPage/ShopViewContainer";
import ProductPage from "./ProductPage/ProductPage";

const PageContainer = () => {

  return (
    <BrowserRouter>
      <div className="page-container" data-testid="page-container">
        <div className="page-header" data-testid="page-header">
          <SiteHeader />
        </div>
        <Routes>
          <Route path="/" element={<HomeViewComponent />}></Route>
          <Route path="/shop/:catId" element={<ShopViewContainer />}></Route>
          <Route path="/shop/product/:prodId" element={<ProductPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default PageContainer;
