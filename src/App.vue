<template>
  <div id="app">
    <Counter v-for="(item, index) in forLength" v-bind:item="item"  v-bind:key="index" v-bind:index="index"></Counter>
  </div>
</template>

<script>
  import Counter from "./counter"


   export default {
   name:"app",
     components: {Counter},
     data(){
      return{
        forLength:new Array(3)
     }
     }

   }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  button {
    font-size: 30px;
    margin: 30px;
  }
</style>
