<script>
  import { element } from "svelte/internal"

  import MovieCard from "./MovieCard.svelte"

  export let initialQuery

  let query = initialQuery
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

<style>
  :global(body) {
    margin: 0;
    min-height: 100vh;
    color: white;
    background-color: #252525;
    font-family: system-ui, Ubuntu, sans-serif;
  }

  input,
  button {
    border-radius: 5px;
    padding: 0 1em;
    font-size: 110%;
  }
  input {
    width: 100%;
  }
  button {
    cursor: pointer;
  }
  button:hover {
    color: tomato;
  }
  main {
    text-align: center;
    min-height: 100vh;
    padding: 0 1.5em;
  }
  form {
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    height: 2em;
    background-color: inherit;
    width: 100%;
    max-width: 500px;
    padding: 1em 0;
    margin: auto;
  }

  form input {
    flex-grow: 2;
    margin-right: 2em;
  }

  main section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: calc(100vh - 120px);
  }
</style>
