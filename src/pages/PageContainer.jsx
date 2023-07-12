import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeViewComponent from "../pages/HomeViewPage/HomeViewComponent";
import Footer from "../components/Footer/Footer";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import ShopViewContainer from "../pages/ShopViewPage/ShopViewContainer";
import ProductCardPage from "./ProductCardPage/ProductCardPage";
import AboutUs from "./AboutUs/AboutUsPage";
import OurStores from "./OurStores/OurStoresPage";
import Press from "./Press/PressPage";
import FAQ from "./FAQ/FAQ";
import ReturnsPage from "./Returns&Exchanges/ReturnsPage";
import Careers from "./Careers/Careers";
import ContactUs from "./ContactUs/ContactUs";
import PrivacyPolicy from "./Privacy/Privacy";

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
          <Route path="/shop/product" element={<ProductCardPage />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/our-stores" element={<OurStores />}></Route>
          <Route path="/press" element={<Press />}></Route>
          <Route path="/FAQ" element={<FAQ />}></Route>
          <Route
            path="/returns-and-exchanges"
            element={<ReturnsPage />}
          ></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default PageContainer;
