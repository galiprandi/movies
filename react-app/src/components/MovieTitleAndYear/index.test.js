import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import MovieTitleAndYear from "./"

beforeEach(() => {
  render(<MovieTitleAndYear title="Title of movie" release_date="2021-12-15" />)
})

describe("MovieTitleAndYear", () => {
  it("Must display title of movie", () => {
    expect(screen.queryByText(/Title of movie/i)).toBeInTheDocument()
  })

  it("Must display Year of movie", () => {
    expect(screen.queryByText(/\(2021\)/i)).toBeInTheDocument()
  })
  it("Must be h1", () => {
    expect(
      screen.getByRole("heading", {
        name: /Title of movie \(2021\)/i,
      })
    )
  })
})
