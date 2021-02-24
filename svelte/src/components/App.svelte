<script>
  /**
     * API Key V3: 38d2b879e4e32254577f8d6411c67af4
     * Token V4: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGQyYjg3OWU0ZTMyMjU0NTc3ZjhkNjQxMWM2N2FmNCIsInN1YiI6IjYwMzY2MTZkZWVjNWI1MDAzZjFhZWQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hH17tMt65B4QkE0thazM9mHNEAgNi--1dJhWP4DmvDw
     * 
     * Sample: https://api.themoviedb.org/3/movie/550?api_key=38d2b879e4e32254577f8d6411c67af4
     * 
     * Sample https://api.themoviedb.org/3/search/movie?api_key=38d2b879e4e32254577f8d6411c67af4&query=Matrix
     * 
     * Result: {
  "poster_path": "/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg",
  "adult": false,
  "overview": "Jack Reacher must uncover the truth behind a major government conspiracy in order to clear his name. On the run as a fugitive from the law, Reacher uncovers a potential secret from his past that could change his life forever.",
  "release_date": "2016-10-19",
  "genre_ids": [
    53,
    28,
    80,
    18,
    9648
  ],
  "id": 343611,
  "original_title": "Jack Reacher: Never Go Back",
  "original_language": "en",
  "title": "Jack Reacher: Never Go Back",
  "backdrop_path": "/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg",
  "popularity": 26.818468,
  "vote_count": 201,
  "video": false,
  "vote_average": 4.19
}
*/

  export let initialquery

  let query = initialquery
  let movies = []

  async function searchMovies() {
    if (query.length < 2) return
    const API_KEY = `38d2b879e4e32254577f8d6411c67af4`
    const url = `https://api.themoviedb.org/3/search/movie?api_key=38d2b879e4e32254577f8d6411c67af4&query=${query}`
    console.info(`Searching: ${query}`)

    const orderResults = (a, b) =>
      a.release_date < b.release_date
        ? 1
        : b.release_date < a.release_date
        ? -1
        : 0

    movies = await fetch(url)
      .then((response) => response.json())
      .then((data) => data.results.sort(orderResults) || [])

    console.log(movies)
  }

  const inputLoaded = (input) => {
    input.focus()
  }
</script>

<main>
  <form on:submit|preventDefault={() => searchMovies()}>
    <input
      type="search"
      name="querySearch"
      bind:value={query}
      placeholder="Search movies..."
      use:inputLoaded
    />
    <button type="submit">Search</button>
  </form>
  <section>
    {#each movies as { title, poster_path: src, overview, release_date: date, vote_average: votes }}
      <article>
        <picture>
          {#if src}
            <img
              src="https://image.tmdb.org/t/p/original/{src}"
              alt={title}
              {title}
            />
          {:else}
            <img
              src="https://via.placeholder.com/500x750?text=POSTER%20UNAVAILABLE"
              alt={title}
              {title}
            />
          {/if}
        </picture>
        <section class="summary">
          <h1>{title} ({new Date(date).getFullYear()})</h1>
          <details>
            <summary>Summary</summary>
            <p>{overview}</p>
          </details>
        </section>
      </article>
    {/each}
  </section>
  <p>Power by themoviedb.org</p>
</main>

<style>
  :global(body) {
    margin: 0;
    min-height: 100vh;
    color: white;
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
    background-color: #252525;
    min-height: 100vh;
    padding: 0 1em;
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
  }

  article {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    background-color: white;
    margin: 0.5em auto 5em auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 1px 1px 5px 1px #1b1b1b;
  }

  article img {
    max-width: 100%;
  }
  article section {
    display: flex;
    flex-direction: column;
    background-color: white;
    color: initial;
    font-size: 1.3em;
    margin: auto;
    padding: 0.5em;
  }
  article h1 {
    margin: 0;
  }
  article details {
    color: #292929;
    margin-top: 1em;
  }
  article details > * {
    font-size: 14px;
  }
</style>
