import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
export const eventBus = new Vue({});
export const eventBusCustom = new Vue({
    methods: {
        changeAge(age) {
            this.$emit('ageWasChange2', age);
        }
    }
});
new Vue({
    render: h => h(App),
}).$mount('#app');
