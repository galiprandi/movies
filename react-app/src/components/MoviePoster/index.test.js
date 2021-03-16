import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import MoviePoster from "./"

beforeEach(() => {
  render(<MoviePoster title="title" poster_path="image.jpg" />)
})

describe("MoviePoster", () => {
  it("Image attribute: alt title", () => {
    expect(screen.getByTitle(/title/i))
  })

  it("Image attribute: alt", () => {
    screen.getByAltText(/title/i)
  })
})
