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
        increment(state) {
            state.sum++;
        },
        decrement(state) {
            state.sum--;
        },
        resetSum(state,payload){
            state.sum -= payload.count;
        }
    }
});
new Vue({
    store,
    render: h => h(App),
}).$mount('#app');
