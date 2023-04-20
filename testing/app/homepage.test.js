import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Homepage from "./page"

describe("Homepage", () => {
  it("should render the homepage", () => {
    render(<Homepage />)

    expect(
      screen.getByRole("heading", { name: "Home Page" })
    ).toBeInTheDocument()
  })

  it("should update input value state", async () => {
    render(<Homepage />)

    const inputElement = screen.getByPlaceholderText(/search some/i)
    await userEvent.type(inputElement, "Hey there")

    expect(inputElement).toHaveValue("Hey there")
  })
})
