<template>
  <div class="home">
  <img class="Back" src="../assets/Portada.jpg" alt="">

   
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
   
  }
}
</script>
<style>
.Back{
  display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.6;
    background-position: 50% 0;
    background-size: cover;
}
</style>