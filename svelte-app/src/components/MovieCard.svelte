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
