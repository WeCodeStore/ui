import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeViewComponent from "../pages/HomeViewPage/HomeViewComponent";
import Footer from "../components/Footer/Footer";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import ShopViewContainer from "../pages/ShopViewPage/ShopViewContainer";
import ProductCard from "./ProductCardPage/ProductCard";


const PageContainer = () => {
  return (
    <BrowserRouter>
      <div className="page-container" data-testid="page-container">
        <div className="page-header" data-testid="page-header">
          <SiteHeader />
        </div>
        <Routes>
          <Route path="/" element={<HomeViewComponent />}></Route>
          <Route path="/shop" element={<ShopViewContainer />}></Route>
          <Route path="/shop/product" element={<ProductCard />}></Route>
        </Routes>
        <Footer />
        {/* <ShopViewContainer /> */}
      </div>
    </BrowserRouter>
  );
};

export default PageContainer;
