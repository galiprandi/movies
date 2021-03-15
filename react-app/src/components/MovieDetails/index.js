import React from "react"
import PropTypes from "prop-types"

function MovieDetails({ overview }) {
  return (
    <details>
      <summary>Summary</summary>
      <p>{overview}</p>
    </details>
  )
}

MovieDetails.propTypes = {
  overview: PropTypes.string,
}

export default MovieDetails
