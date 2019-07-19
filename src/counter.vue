<template>
    <div>
        <button v-on:click="decrease"> - </button>
        <span>{{ count }}</span>
        <button v-on:click="increase"> + </button>
    </div>

</template>

<script>
    export default {
        name:"Counter",
        data(){
            return {
                count : 0,
                message : "hello"
            }
        },
        methods:{
            decrease(){
                this.count--;
            } ,
            increase(){
                this.count++;
            }
        }
    }
</script>

<style scoped>

</style>