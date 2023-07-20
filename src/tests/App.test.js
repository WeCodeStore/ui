import { render } from "@testing-library/react";
import App from "../App";

test("renders App", () => {
  window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};
  render(<App />);
});
