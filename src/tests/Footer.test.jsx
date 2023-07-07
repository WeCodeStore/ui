import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer/Footer";
import '@testing-library/jest-dom'

describe("Footer", () => {
  it("should render Footer", () => {
    render(<Footer />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
  it("should render a submit button", () => {
    render(<Footer />);
    const submitButton = screen.getByTestId("submit");
    expect(submitButton).toBeInTheDocument();
  });
});
