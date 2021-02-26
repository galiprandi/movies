<script>
  import MovieCard from "./MovieCard.svelte"

  let query
  let movies = []

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
      })
  }

  const inputLoaded = (input) => {
    input.focus()
  }
</script>

<main>
  <form on:submit|preventDefault={() => queryMovies(query)}>
    <input
      id="querySearch"
      type="search"
      name="querySearch"
      bind:value={query}
      placeholder="Search movies..."
      use:inputLoaded
      on:focus={(el) => el.target.select()}
    />
    <button type="submit">Search</button>
  </form>
  <section>
    {#each movies as movie (movie.id)}
      <MovieCard {movie} />
    {/each}
  </section>
  <p>Power by themoviedb.org</p>
</main>
