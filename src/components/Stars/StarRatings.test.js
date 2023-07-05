import { render, screen } from "@testing-library/react";
import StarRatings from "./StarRatings";

describe("Star Ratings", () => {
  test("Rendering the component should display Stars", () => {
    render(<StarRatings rate={5} />);
    expect(screen.getByTestId("starRatingId")).toBeInTheDocument();
  });
});
