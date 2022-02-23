import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Link test", () => {
  test("renders link Home", () => {
    render(<App />);
    const linkElement = screen.getByText("Home");
    expect(linkElement).toBeInTheDocument();
  });

  test("renders link Units", () => {
    render(<App />);
    const linkElement = screen.getByText("Units");
    expect(linkElement).toBeInTheDocument();
  });
});
