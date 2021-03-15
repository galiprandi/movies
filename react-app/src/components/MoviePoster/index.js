import React from "react"

export default function MoviePoster({ title, poster_path }) {
  const src = poster_path
    ? "https://image.tmdb.org/t/p/original/" + poster_path
    : "https://via.placeholder.com/500x750?text=POSTER%20UNAVAILABLE"
  return (
    <picture>
      <img src={src} alt={title} title={title} />
    </picture>
  )
}
