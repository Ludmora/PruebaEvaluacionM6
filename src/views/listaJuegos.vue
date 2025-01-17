<template>
    <div class="lista">
        <div class="contenedor">
            <div class="fondo"></div>
            <div class="contenido">
                <Juegos></Juegos>
            </div>
        </div>
    </div>
</template>




<script>
import Juegos from '../components/Juegos.vue';
export default {
    name: 'component-name',
    // props: {},
    data: function () {
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        Juegos
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style>
/* Fondo fijo */
.fondo {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-image: url('../assets/pacman.gif');
}


.contenedor {
    position: relative;
    width: 100%;
    height: auto;
}


.contenido {
    position: relative;
    z-index: 1;
    padding: 20px;
    color: white;
    text-shadow: 0 0 5px black;
}
</style>