async function handleSubmit(event) {
  event.preventDefault()
  const query = document.getElementById("querySearch").value
  const movies = await queryMovies(query)
  renderMovies(movies)
}

// Fetch data from API
async function queryMovies(querySearch) {
  querySearch = querySearch.trim()
  if (querySearch.length <= 2) return

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
    .then((data) => data.results.sort(orderResultsNyYears) || [])
}

// Render movies cards to DOM
function renderMovies(movies, container = document.getElementById("movies")) {
  const movieList = document.createDocumentFragment()
  movies.map((movie) => movieList.appendChild(renderMovieCard(movie)))
  container.textContent = "" // Empty movie list
  container.appendChild(movieList) // Append movie list to DOM
}

// Create and return a template node with movie card.
function renderMovieCard(movie) {
  const { title, release_date: date, poster_path: poster, overview } = movie

  // Create a card like a DOM fragment
  const card = document.createDocumentFragment()

  // Append template
  const template = document.getElementById("MovieCard").content
  card.appendChild(template.cloneNode(true))

  // Set new data to Fragment
  const year = new Date(date).getFullYear()
  const src = poster
    ? `https://image.tmdb.org/t/p/original/${poster}`
    : "https://via.placeholder.com/500x750?text=POSTER%20UNAVAILABLE"

  // Set image poster
  const movieImage = card.querySelector("img")
  movieImage.setAttribute("src", src)
  movieImage.setAttribute("alt", title)
  movieImage.setAttribute("title", title)

  // Set title and year
  const movieTitle = card.querySelector(".summary > h1")
  movieTitle.textContent = `${title} (${year})`

  // Set overview
  const movieOverview = card.querySelector(".summary p")
  movieOverview.textContent = `${overview}`

  return card
}
