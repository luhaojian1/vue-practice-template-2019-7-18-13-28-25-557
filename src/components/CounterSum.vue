<template>
    <div>
        <CounterGroup :counterNum="parseInt(counterNum) || 0" ></CounterGroup>
        <span>CounterSum = {{counterSum}}</span>
    </div>
</template>

<script>
    import CounterGroup from "./CounterGroup"

    export default {
        name: "CounterSum",
        components: {CounterGroup},
        props: {
            counterNum: Number
        },
        computed:{
            counterSum(){
                return this.$store.getters.getSum;
            }
        },


    }
</script>

<style>

</style>