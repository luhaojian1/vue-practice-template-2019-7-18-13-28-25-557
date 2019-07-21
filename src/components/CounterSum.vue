<template>
    <div>
        <CounterGroup v-on:getCounterSum="setCounterSum"  :counterNum="parseInt(counterNum) || 0"></CounterGroup>
        <span>CounterSum = {{counterSum}}</span>
    </div>
</template>

<script>
    import CounterGroup from "./CounterGroup"
    export default {
        name: "CounterSum",
        components:{CounterGroup},
        props:{
          counterNum: Number
        },
        data() {
            return{
                counterSum:0
            }
        },
        methods:{
            setCounterSum:function (sum) {
                this.counterSum = sum;
            }
        },


    }
</script>

<style>

</style>