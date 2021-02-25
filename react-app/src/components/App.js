import React, { useState } from "react"
import MovieCard from "./MovieCard"
import "./App.css"

export default function App() {
  const [query, setQuery] = useState("Matrix")
  const [movies, setMovies] = useState([])

  async function queryMovies(querySearch) {
    if (querySearch.length < 2) return

    const API_KEY = `38d2b879e4e32254577f8d6411c67af4`
    const API_ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${querySearch}`

    const orderResultsNyYears = (a, b) =>
      a.release_date < b.release_date
        ? 1
        : b.release_date < a.release_date
        ? -1
        : 0

    return await fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        const results = data.results.sort(orderResultsNyYears) || []
        setMovies(results)
        console.log(results)
      })
  }

  return (
    <>
      <main>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            queryMovies(query)
          }}
        >
          <input value={query} onChange={(e) => setQuery(e.target.value)} />
          <button type="submit">Search</button>
        </form>
        <section>
          {movies.map((movie) => {
            return <MovieCard Movie={movie} />
          })}
        </section>
        <p>Power by themoviedb.org</p>
      </main>
    </>
  )
}