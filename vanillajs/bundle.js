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
      movies = data.results.sort(orderResultsNyYears) || []
      renderMovies(movies, document.getElementById("movies"))
    })
}

function renderMovies(movies, container = document.getElementById("movies")) {
  if (!container || !movies) return
  container.innerHTML = ""
  movies.map((movie) => (container.innerHTML += renderCard(movie)))
}

function renderCard(movie) {
  const date = new Date(movie.release_date).getFullYear()
  return `
        <article>
        <picture
        ><img
            src="https://image.tmdb.org/t/p/original/${movie.poster_path}"
            alt="${movie.title}"
            title="${movie.title}"
        /></picture>
        <section class="summary">
        <h1>${movie.title} (${date})</h1>
        <details>
            <summary>Summary</summary>
            <p>
            ${movie.overview}
            </p>
        </details>
        </section>
    </article>
    `
}

function handleSubmit(event) {
  event.preventDefault()
  const query = document.forms[0][0].value || ""
  queryMovies(query)
}
