<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div>
        <span>{{counterId}}</span>
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
                count: 0,
            }
        },
        methods: {
            decrease() {
                this.count--;
                this.$emit("child-count-change",this.count,this.counterId);
            },
            increase() {
                this.count++;
                this.$emit("child-count-change",this.count,this.counterId);
            }
        },
        props:{'counterId':Number}

    }
</script>

<style>

</style>