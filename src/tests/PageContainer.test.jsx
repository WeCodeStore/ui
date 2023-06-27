import { render, screen } from "@testing-library/react";
import App from '../App'
describe("Page container", () => {
    it("should render PageContainer", () => {
      render(<App />);
    const pageContainer = screen.getByTestId("page-container");
    expect(pageContainer).toBeInTheDocument();
    });
});