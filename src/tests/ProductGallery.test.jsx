import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import ProductGallery from "../components/ProductGallery/ProductGallery";

describe("", () => {
  it("should render Gallery of Products", () => {
    render(<ProductGallery />);
    const productGallery = screen.getByTestId("product-gallery");
    expect(productGallery).toBeInTheDocument();
  });

});