import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeViewComponent from "../components/HomeViewComponent";

const PageContainer = () => {
  return (
    <BrowserRouter>
      <div className="page-container" data-testid="page-container">
        <div className="page-header" data-testid="page-header">Header</div>
        <Routes>
          <Route path="/" element={<HomeViewComponent />}></Route>
        </Routes>
        <div className="page-footer" data-testid="page-footer">Footer</div>
      </div>
    </BrowserRouter>
  );
};

export default PageContainer;
