import { render, screen } from "@testing-library/react"
import Homepage from "./page"

describe("Homepage", () => {
  it("should render the homepage", () => {
    render(<Homepage />)

    expect(
      screen.getByRole("heading", { name: "Home Page" })
    ).toBeInTheDocument()
  })
})
