<template>
  <main>
    <form @submit.prevent="queryMovies()">
      <input
        id="querySearch"
        name="querySearch"
        type="search"
        v-model="query"
        placeholder="Search movie..."
      />
      <button type="search">Search</button>
    </form>
    <section>
      <template v-for="movie in movies" :key="movie.id">
        <movie-card :movie="movie" />
      </template>
    </section>
    <p>Power by themoviedb.org</p>
  </main>
</template>

<script>
import { provide, ref } from "vue";
import MovieCard from "./MovieCard.vue";

export default {
  components: { MovieCard },
  setup() {
    const query = ref("");
    const movies = ref([]);
    provide("movies", movies);

    const queryMovies = async () => {
      const querySearch = query.value;

      if (querySearch.length < 2) return;

      const API_KEY = `38d2b879e4e32254577f8d6411c67af4`;
      const API_ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${querySearch}`;

      const orderResultsNyYears = (a, b) =>
        a.release_date < b.release_date
          ? 1
          : b.release_date < a.release_date
          ? -1
          : 0;

      return await fetch(API_ENDPOINT)
        .then((response) => response.json())
        .then((data) => {
          movies.value = data.results.sort(orderResultsNyYears) || [];
        });
    };
    return { query, movies, queryMovies };
  },
};
</script>

<style>
</style>