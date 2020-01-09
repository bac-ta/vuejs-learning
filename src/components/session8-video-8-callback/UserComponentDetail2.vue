<template>
    <div class="demo">
        <p>Nội dung title 2 là {{reverseName}}</p>
        <button @click="resetNameFunc">Change name user 2</button>
    </div>
</template>

<script>
    export default {
        name: "UserComponentDetail2",
        props: {
            customName: String,
            resetNameFunc: Function
        },
        computed: {
            reverseName() {
                return this.customName.split('').reverse().join('');
            }
        }

    }
</script>

<style scoped>

</style>