<template>
    <div>
        <h1>User component</h1>
        <button @click="changeData">Change user details</button>
        <div>
            <UserComponentDetail1 :title="title"/>
        </div>
        <div>
            <UserComponentDetail2 :customName="customName"
            :resetNameFunc="resetCustomName"
            />
        </div>
    </div>
</template>

<script>
    import UserComponentDetail1 from "./UserComponentDetail1.vue";
    import UserComponentDetail2 from "./UserComponentDetail2.vue";

    export default {
        name: "User",

        data() {
            return {
                customName: '',
                title: ''
            }
        },
        methods: {
            changeData() {
                this.title = "Entropy";
                this.customName = 'Bac';

            },
            resetCustomName(){
                this.customName = 'Van la Bac'
            }
        },
        components: {UserComponentDetail1, UserComponentDetail2}

    }
</script>

<style scoped>

</style>