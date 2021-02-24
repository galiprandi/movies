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
    movies = await fetch(url)
      .then((response) => response.json())
      .then((data) => data.results || [])
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
          {/if}
        </picture>
        <section class="information">
          <h1>{title} ({new Date(date).getFullYear()})</h1>
          <details>
            <summary>Summary</summary>
            <p>{overview}</p>
          </details>
        </section>
      </article>
    {:else}
      <h1>No search result</h1>
    {/each}
  </section>
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
    line-height: 1.3em;
    padding: 0.5em;
    border-color: white;
    text-transform: capitalize;
  }
  button:hover {
    cursor: pointer;
    border-color: initial;
    background-color: white;
    color: tomato;
  }
  main {
    text-align: center;
    background-color: #252525;
    min-height: 100vh;
    padding: 1em;
  }
  form {
    position: sticky;
    top: 0;
    background-color: inherit;
    width: 100%;
    padding: 1em 0;
  }
  article {
    margin-bottom: 5em;
    display: flex;
    flex-direction: column;
  }
  article img {
    max-width: 80%;
  }
  article section {
    background-color: white;
    color: initial;
    font-size: 1.3em;
    margin: auto;
    width: 80%;
    padding: 1em;
    box-sizing: border-box;
  }
  article h1 {
    margin: 0;
  }
  article details {
    color: #292929;
    margin-top: 1em;
  }
</style>
