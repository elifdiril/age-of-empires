import { render, screen } from "@testing-library/react";
import AgeFilter from "../components/AgeFilter/index";

describe("Age Filter component tests", () => {
  test("renders Button", () => {
    render(<AgeFilter />);
    const linkElement = screen.getByText("All");
    expect(linkElement).toBeInTheDocument();
  });

  test("renders Button", () => {
    render(<AgeFilter />);
    const linkElement = screen.getByText("Dark");
    expect(linkElement).toBeInTheDocument();
  });

  test("renders Button", () => {
    render(<AgeFilter />);
    const linkElement = screen.getByText("Feudal");
    expect(linkElement).toBeInTheDocument();
  });

  test("renders Button", () => {
    render(<AgeFilter />);
    const linkElement = screen.getByText("Castle");
    expect(linkElement).toBeInTheDocument();
  });

  test("renders Button", () => {
    render(<AgeFilter />);
    const linkElement = screen.getByText("Imperial");
    expect(linkElement).toBeInTheDocument();
  });
});
