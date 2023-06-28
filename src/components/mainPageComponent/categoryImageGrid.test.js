import { render, screen } from "@testing-library/react";
import CategoryImageGrid from "./categoryImageGrid";

describe("CategoryImageGrid", () => {
  test("Rendering the component should display page title", () => {
    render(<CategoryImageGrid />);

    screen.getByText("Shop By Category");
  });
});
