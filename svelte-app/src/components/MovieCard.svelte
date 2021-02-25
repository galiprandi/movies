<script>
  export let movie

  const { title, poster_path: src, overview, release_date: date } = movie
</script>

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

<style>
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
  article > section {
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
