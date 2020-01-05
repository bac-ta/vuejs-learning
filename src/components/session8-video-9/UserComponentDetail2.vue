<template>
    <div class="demo">
        <p>Tuổi user 2 là: {{userAge}}</p>
        <button @click="editAge">Change user age</button>
    </div>
</template>

<script>
    export default {
        name: "UserComponentDetail2",
        props: {
            userAge: Number
        },
        methods: {
            editAge() {
                this.userAge = 27;
                this.$emit('ageWasChange', this.userAge);
            }
        }

    }
</script>

<style scoped>

</style>