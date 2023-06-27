import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeViewComponent from "../components/HomeViewComponent";
import Footer from "../components/Footer/Footer";

const PageContainer = () => {
  return (
    <BrowserRouter>
      <div className="page-container" data-testid="page-container">
        <div className="page-header" data-testid="page-header">
          Header
        </div>
        <Routes>
          <Route path="/" element={<HomeViewComponent />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default PageContainer;
