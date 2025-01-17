<template>
    <div>
    <h1></h1>
    <img :src="img_juego" alt="">

    </div>
</template>

<script>
export default {
    name: 'lista_detalle',
    props: {
        id:{
            type:String,
            required:true,
        },
        img_juego:{
            type:String,
            required:true,
        }
    },
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>