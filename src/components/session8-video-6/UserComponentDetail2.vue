<template>
    <div>
        <p>Nội dung title 2 là {{reverseName}}</p>
        <button @click="changeName">Change name user 2</button>
    </div>
</template>

<script>
    export default {
        name: "UserComponentDetail2",
        props: {
            customName: String
        },
        computed: {
            reverseName() {
                return this.customName.split('').reverse().join('');
            }
        },
        methods: {
            changeName() {
                this.customName = 'sfsfsgsgsgss';
                this.$emit('nameWasReset', this.customName);
            }
        }

    }
</script>

<style scoped>

</style>