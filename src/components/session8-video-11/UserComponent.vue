<template>
    <div>
        <h1>User component</h1>
        <p>Tuổi component cha là: {{age}}</p>
        <div>
            <UserComponentDetail1 :userAge="age"/>
        </div>
        <div>
            <UserComponentDetail2 :userAge="age" @ageWasChange="age =$event"/>
        </div>
    </div>
</template>

<script>
    import UserComponentDetail1 from "./UserComponentDetail1.vue";
    import UserComponentDetail2 from "./UserComponentDetail2.vue";

    export default {
        name: "User811",
        data() {
            return {
                age: 18
            }
        },
        components: {UserComponentDetail1, UserComponentDetail2}

    }
</script>

<style scoped>

</style>