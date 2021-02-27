<template>
  <article>
    <picture>
      <img
        v-if="movie.poster_path"
        :src="'https://image.tmdb.org/t/p/original' + movie.poster_path"
        :alt="movie.title"
        :title="movie.title"
      />
      <img
        v-else
        src="https://via.placeholder.com/500x750?text=POSTER%20UNAVAILABLE"
        :alt="movie.title"
        :title="movie.title"
      />
    </picture>
    <section class="summary">
      <h1>
        {{ movie.title }} ({{ new Date(movie.release_date).getFullYear() }})
      </h1>
      <details>
        <summary>Summary</summary>
        <p>{{ movie.overview }}</p>
      </details>
    </section>
  </article>
</template>
<script>
export default {
  props: {
    movie: {
      type: Object,
      require: true,
    },
  },
};
</script>