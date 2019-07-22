import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex"

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        sum: 0
    },
    getters: {
        getSum:state => state.sum,
    },
    mutations:{
        increment() {
            this.state.sum++;
        },
        decrement() {
            this.state.sum--;
        },
        resetSum(count){
            this.state.sum -= parseInt(count);
        }
    }
});
new Vue({
    store,
    render: h => h(App),
}).$mount('#app');
