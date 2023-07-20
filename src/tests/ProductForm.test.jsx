import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import ProductForm from "../components/ProductForm/ProductForm";

describe("", () => {
  it("should render  ProductForm in the Product page", () => {
    render(<ProductForm/>);
    const productForm = screen.getByTestId("product-form");
    expect(productForm).toBeInTheDocument();
  });

});