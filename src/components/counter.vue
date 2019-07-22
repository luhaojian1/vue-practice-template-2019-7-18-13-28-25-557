<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div>
        <button v-on:click="decrease"> -</button>
        <span>{{ count }}</span>
        <button v-on:click="increase"> +</button>
    </div>

</template>

<script>
    export default {
        name: "Counter",
        data() {
            return {
                count:0,
            }
        },
        methods: {
            decrease() {
                this.count--;
                this.$store.commit('decrement');

            },
            increase() {
                this.count++;
                this.$store.commit('increment');
            },

        },
        beforeDestroy() {
             this.$store.commit('resetSum',this.count);
        }

    }
</script>

<style>

</style>