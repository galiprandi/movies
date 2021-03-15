import React from "react"
import MovieDetails from "./MovieDetails"
import MoviePoster from "./MoviePoster"
import MovieTitleAndYear from "./MovieTitleAndYear"

function MovieCard({ Movie }) {
  // const { title, poster_path: src, overview, release_date: date } = Movie

  return (
    <>
      <article>
        <MoviePoster {...Movie} />
        <section className="summary">
          <MovieTitleAndYear {...Movie} />
          <MovieDetails {...Movie} />
        </section>
      </article>
    </>
  )
}

export default MovieCard
