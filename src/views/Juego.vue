<template>
    <div class="juego-detalle">
         <router-link to="/listaJuegos" class="boton-atras">
        Atrás
      </router-link>
  
      <h1 class="titulo">{{ juego?.name }}</h1>
      <div class="contenido">
        <img class="imagen" :src="juego?.background_image" :alt="juego?.name" />
        <div class="caracteristicas">
          <p class="descripcion">
            <strong>Descripción:</strong>
            <span v-html="juego?.description"></span>
          </p>
          <p class="generos">
            <strong>Géneros:</strong>
            <span v-for="(genre, index) in juego?.genres" :key="index">
              {{ genre.name }}<span v-if="index < juego.genres.length - 1">, </span>
            </span>
          </p>
        </div>
      </div>
      <opinion></opinion>
    </div>
  </template>
 
  <script>
   import opinion from '../components/opinion.vue';
  export default {
    name: 'JuegoDetalle',
    props: ['id'], 
    data() {
      return {
        juego: null,
      };
    },
    methods: {
      async obtenerDetalles() {
        try {
          const respuesta = await fetch(`https://api.rawg.io/api/games/${this.id}?key=b5d44110e6bc4f7bacd208820bbdc44e`);
          const datos = await respuesta.json();
          this.juego = datos;
        } catch (error) {
          console.error("Error al obtener los detalles del juego:", error);
        }
      },
    },
    created() {
      this.obtenerDetalles();
    },
    components: {
        opinion
    },
  };
  </script>
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;  
  }

 
  .juego-detalle {
    background-image: url('@/assets/descarga.gif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed; 
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0; 
    font-family: Arial, sans-serif;
    color: black;
    position: relative;
    overflow-x: hidden; 
    overflow-y: auto;
  }

 
  .boton-atras {
    display: inline-block;
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
    text-decoration: none;
    text-align: center;
    transition: background-color 0.3s ease;
  }

  .boton-atras:hover {
    background-color: #0056b3;
  }


  .titulo {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
    color: #8f8f8f; /* Blanco para mejorar el contraste */
  }

  /* Contenedor principal de contenido */
  .contenido {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    width: 100%; /* No debe exceder el 100% del ancho */
    max-width: 100%; /* Asegura que no haya desbordamiento horizontal */
    overflow: hidden; /* Asegura que no haya desbordamiento dentro del contenido */
    box-sizing: border-box;
  }

  /* Imagen */
  .imagen {
   
    max-width: 30%; 
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 5%;
  }

  /* Características del juego */
  .caracteristicas {
   
    text-align: left;
    width: 100%;
    max-width: 800px;
    color: #fff; /* Blanco para mejorar el contraste */
   
  }

  /* Descripción del juego */
  .descripcion {
    margin: 5%;
    margin-bottom: 20px;
    line-height: 1.6;
  }

  .generos {
    font-size: 1rem;
    margin: 5%;
  }

  /* Adaptaciones para pantallas más grandes */
  @media (min-width: 768px) {
    .contenido {
      flex-direction: row;
      align-items: flex-start;
    }

    .imagen {
      flex: 1;
    }

    .caracteristicas {
      flex: 2;
      margin-left: 20px;
    }
  }
</style>
