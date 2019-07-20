<template>
    <div>
        <span>传入参数 ={{counterNum}}</span>
        <Counter v-for="index in counterNum" v-bind:key="index"></Counter>
    </div>
</template>

<script>
    import Counter from "./counter"
    export default {
        name: "CounterGroup",
        components:{Counter},
        props:{'counterNum':Number},

    }
</script>

<style scoped>

</style>