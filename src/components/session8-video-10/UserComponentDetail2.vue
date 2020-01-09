<template>
    <div class="demo">
        <p>Tuổi user 2 là: {{userAge}}</p>
        <button @click="editAge">Change user age</button>
    </div>
</template>

<script>
    import {eventBus} from "../../main";

    export default {
        name: "UserComponentDetail2",
        props: {
            userAge: Number
        },
        //Start point
        methods: {
            editAge() {
                this.userAge = 27;
                //this.$emit('ageWasChange', this.userAge);
                eventBus.$emit('ageWasChange', this.userAge);
            }
        }
    }
</script>

<style scoped>

</style>