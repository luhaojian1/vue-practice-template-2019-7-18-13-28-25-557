<template>
  <div id="app">
    <span>计算器数量：</span>
    <input type="tel" v-model="countNumber">
    <p>{{countNumber}}</p>
   <CounterGroup :counterNum = "parseInt(countNumber) || 0"></CounterGroup>
  </div>
</template>

<script>

  import CounterGroup from "./components/CounterGroup"

   export default {
   name:"app",
     components: {CounterGroup},
     data(){
      return{
        countNumber:0
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
