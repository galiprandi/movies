import React from "react"

export default function MovieTitleAndYeard({ title, release_date }) {
  const year = new Date(release_date).getFullYear()
  return (
    <h1>
      {title} ({year})
    </h1>
  )
}
