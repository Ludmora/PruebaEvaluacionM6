<template>
    <div>
      <form @submit.prevent="agregar">
        <div>{{ edicion ? "Editar Opinión" : "Agregar Opinión" }}</div>
  
       
        <div class="input-container">
          <label for="nombre">Nombre:</label>
          <input 
            id="nombre"
            type="text" 
            v-model="nombreInput" 
            placeholder="Escriba su Nombre" 
            :class="{ 'input-error': !nombreInput.trim() && edicion }"
          />
        </div>
  
     
        <div class="input-container">
          <label for="opinion">Opinión:</label>
          <input 
            id="opinion"
            type="text" 
            v-model="opinionInput" 
            placeholder="Escriba su Opinión" 
            :class="{ 'input-error': !opinionInput.trim() && edicion }"
          />
        </div>
  
        <button type="submit">{{ edicion ? "Guardar" : "Agregar" }}</button>
        <button v-if="edicion" type="button" @click="cancelarEdicion">Cancelar</button>
      </form>
  
  
      <div v-if="opiniones.length > 0" class="opiniones-container">
        <ul>
          <li v-for="(opinion, index) in opiniones" :key="index" class="opinion-item">
            <div class="opinion-box">
              <strong>Nombre:</strong> {{ opinion.nombre }}
            </div>
            <div class="opinion-box">
              <strong>Opinión:</strong> {{ opinion.opinion }}
            </div>
            
            <button @click="editarOpinion(index)">Editar</button>
            <button @click="removerOpinion(index)">Eliminar</button>
          </li>
        </ul>
      </div>
  
      <div v-else>
        <h2>No hay opiniones que agregar</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Opinion-agregar',
    data() {
      return {
        opiniones: [],
        nombreInput: '',
        opinionInput: '',
        edicion: false,
        editarIndex: null,
      };
    },
    methods: {
      agregar() {
        if (this.nombreInput.trim() === '' || this.opinionInput.trim() === '') {
          alert('Por favor, complete todos los campos');
          return;
        }
  
        const opinion = {
          nombre: this.nombreInput,
          opinion: this.opinionInput,
        };
  
        if (this.edicion) {
          this.$set(this.opiniones, this.editarIndex, opinion);
          this.cancelarEdicion();
        } else {
          this.opiniones.push(opinion);
          this.nombreInput = '';
          this.opinionInput = '';
        }
      },
      editarOpinion(index) {
        const opinion = this.opiniones[index];
        this.nombreInput = opinion.nombre;
        this.opinionInput = opinion.opinion;
        this.editarIndex = index;
        this.edicion = true;
      },
      cancelarEdicion() {
        this.nombreInput = '';
        this.opinionInput = '';
        this.editarIndex = null;
        this.edicion = false;
      },
      removerOpinion(index) {
        this.opiniones.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin: 5px 0;
  }
  
  button {
    margin-left: 10px;
    cursor: pointer;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .input-container {
    margin-bottom: 15px;
  }
  
  .input-container input {
    padding: 10px;
    width: 100%;
    max-width: 400px;
    border-radius: 4px;
    border: 1px solid #ccc;
    transition: border-color 0.3s;
  }
  
  .input-container input:focus {
    outline: none;
    border-color: #007bff;
  }
  
  .input-error {
    border: 2px solid red;
  }
  
 
  .opiniones-container {
    background: bl ; 
    width: 50%;
    margin: 0 auto;
    margin-top: 40px;
    color: white;
    border-radius: 8px;
    padding: 20px;
  }
  
  .opinion-item {
    margin-bottom: 10px;
  }
  
  .opinion-box {
    background: rgba(0, 212, 255, 0.1);
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 6px;
    border: 1px solid #007bff;
  }
  
  .opiniones-container button {
    background: #ff6347;
    color: white;
  }
  
  .opiniones-container button:hover {
    background: #ff4500;
  }
  </style>
  