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
  movies.map((movie) => container.appendChild(renderCard(movie)))
}

function renderCard(movie) {
  // Create a Fragment
  const template = document.importNode(
    document.getElementById("MovieCard").content,
    true
  )

  const year = new Date(movie.release_date).getFullYear()
  const src = movie.poster_path
    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=POSTER%20UNAVAILABLE"

  // Set image
  const img = template.querySelector("img")
  img.setAttribute("src", src)
  img.setAttribute("alt", movie.title)
  img.setAttribute("title", movie.title)

  // Set title
  const title = template.querySelector(".summary h1")
  title.textContent = `${movie.title} (${year})`

  // Set overview
  const overview = template.querySelector(".summary p")
  overview.textContent = movie.overview

  return template
}

function handleSubmit(event) {
  event.preventDefault()
  const query = document.forms[0][0].value || ""
  queryMovies(query)
}
