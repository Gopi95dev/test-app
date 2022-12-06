import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Calculator", () => {
  it("renders a calculator", () => {
    render(<Home />)
    const div = screen.getByTestId("test-div")
    expect(div).toHaveTextContent("content")
    
  })
})