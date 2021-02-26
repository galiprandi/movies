<template>
  <main>
    <form @submit.prevent="queryMovies(query)">
      <input
        ref="querySearch"
        id="querySearch"
        name="querySearch"
        placeholder="Search movies..."
        :value="query"
      />
      <button type="search">Search</button>
    </form>
    <section>
      <article
        v-for="{
          id,
          title,
          poster_path: src,
          overview,
          release_date: date,
        } in movies"
        :key="id"
      >
        <picture>
          <img
            v-if="src"
            :src="'https://image.tmdb.org/t/p/original' + src"
            :alt="title"
            :title="title"
          />
          <img
            v-else
            src="https://via.placeholder.com/500x750?text=POSTER%20UNAVAILABLE"
            :alt="title"
            :title="title"
          />
        </picture>
        <section class="summary">
          <h1>{{ title }} {{ new Date(date).getFullYear() }}</h1>
          <details>
            <summary>Summary</summary>
            <p>{{ overview }}</p>
          </details>
        </section>
      </article>
    </section>
    <p>Power by themoviedb.org</p>
  </main>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    query: "",
    movies: [],
  }),

  methods: {
    queryMovies: async function (querySearch) {
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
          this.movies = data.results.sort(orderResultsNyYears) || [];
        });
    },
  },
};
</script>

<style>
</style>
