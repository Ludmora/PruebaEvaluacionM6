<template>
  <div>
    <div class="lista">
      <h1>Juegos</h1>
      <!-- Lista de juegos -->
      <div class="cuadro">

        <div v-for="(game, index) in juego" :key="index" class="game-card">
          <a @click="buscar_juego(game.id)">
            <img :src="game.background_image || 'placeholder.jpg'" :alt="game.name || 'Juego sin nombre'" />
          </a>

          <div>Nombre: {{ game.name }}</div>
          <div>Código: {{ game.id }}</div>
          <div>Géneros:
            <span v-for="(genre, genreIndex) in game.genres" :key="genreIndex">
              #{{ genre.name }}<span v-if="genreIndex < game.genres.length - 1">, </span>
            </span>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameList",
  data() {
    return {
      juego: [],
      loading: true,
    };
  },
  methods: {
    async fetchGames() {
      try {
        const respuesta = await fetch(
          `https://api.rawg.io/api/games?key=b5d44110e6bc4f7bacd208820bbdc44e&dates=2019-09-01,2019-09-30&platforms=18,1,7`
        );
        if (!respuesta.ok) throw new Error("Error al obtener datos de la API");

        const json = await respuesta.json();
        console.log("Datos obtenidos:", json);
        this.juego = json.results || [];
      } catch (error) {
        console.error("Error al obtener los juegos:", error);
        this.juego = [];
      } finally {
        this.loading = false;
      }
    },
    buscar_juego(gameId) {
      this.$router.push(`/listaJuegos/${gameId}`);
    },
  },
  mounted() {
    this.fetchGames();
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 300px;
  border-radius: 8px;
}

.cuadro {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  /* Espacio entre columnas y filas */
  width: 80%;
  margin: 0 auto;
  /* Centra el contenedor */
  box-sizing: border-box;
}

.game-card {
  background-color: #ffffff;
  border: 1px solid #5a5757;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  color: rgb(23, 24, 24);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
