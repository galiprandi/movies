import React from "react"

function MovieCard(props) {
  const { title, poster_path: src, overview, release_date: date } = props.Movie
  const srcImage = src
    ? "https://image.tmdb.org/t/p/original/" + src
    : "https://via.placeholder.com/500x750?text=POSTER%20UNAVAILABLE"

  return (
    <>
      <article>
        <picture>
          <img src={srcImage} alt={title} />
        </picture>
        <section class="summary">
          <h1>
            {title} ({new Date(date).getFullYear()})
          </h1>
          <details>
            <summary>Summary</summary>
            <p>{overview}</p>
          </details>
        </section>
      </article>
    </>
  )
}

export default MovieCard
