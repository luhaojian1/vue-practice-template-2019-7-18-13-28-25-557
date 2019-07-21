<template>
    <div>
        <Counter v-on:child-count-change="countSum" v-for="index in counterNum" v-bind:key="index"  :counterId="getIndex(index)">
        </Counter>

    </div>
</template>

<script>

    import Counter from "./counter"
    export default {
        name: "CounterGroup",
        components:{Counter},
        props:{
            'counterNum':Number,
        },
        data(){
            return{
                counters:[],
                counterSum:0
            }
        },
        methods:{
            countSum:function (count,index) {
              this.counters[index-1] = count;
                this.counterSum = 0;
                this.counters.forEach(counter => {
                    this.counterSum += counter;
                });
                this.$emit('getCounterSum',this.counterSum);
            },
            getIndex:function (index) {
                return index;
            }
        },

    }
</script>

<style >

</style>