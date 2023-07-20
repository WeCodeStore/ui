import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import PageContainer from "../pages/PageContainer";


describe("Page container", () => {
  window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};
  it("should render PageContainer", () => {
    render(<PageContainer />);
    const pageContainer = screen.getByTestId("page-container");
    expect(pageContainer).toBeInTheDocument();
  })
});
