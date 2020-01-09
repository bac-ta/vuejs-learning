<template>
    <div>
        <p>Nội dung title la 1 {{title}}</p>
        <p>Tuổi là : {{userAge}}</p>
    </div>
</template>

<script>
    //Props truyền dữ liệu từ cha sang con, và các component con truyền sự kiện sang component cha
    import {eventBus} from "../../main";

    export default {
        name: "UserComponentDetail1",
        props: {
            title: String,
            userAge: Number
        },
        //End point
        created() {
            eventBus.$on('ageWasChange2', (age) => {
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>

</style>