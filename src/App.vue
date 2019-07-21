<template>
    <div id="app">
        <span>计算器数量：</span>
        <input type="tel" v-model="countNumber">
        <CounterSum :counterNum="parseInt(countNumber) || 0"></CounterSum>
    </div>
</template>

<script>
    import CounterSum from "./components/CounterSum"

    export default {
        name: "app",
        components: {
         CounterSum
        },
        data() {
            return {
                countNumber: 0
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
