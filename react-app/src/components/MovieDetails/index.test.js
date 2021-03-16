import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import MovieDetails from "./"

beforeEach(() => {
  render(<MovieDetails overview="overview of movie" />)
})

describe("MovieDetails", () => {
  it("Must display overview", () => {
    expect(screen.getByText(/overview of movie/i))
  })
})
