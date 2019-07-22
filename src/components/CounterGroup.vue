<template>
    <div>
        <Counter  v-bind:key="index" v-for="index in counterNum">
        </Counter>

    </div>
</template>

<script>

    import Counter from "./counter"

    export default {
        name: "CounterGroup",
        components: {Counter},
        props: {
            'counterNum': Number,
        },

    }
</script>

<style>

</style>