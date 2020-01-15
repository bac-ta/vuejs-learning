<template>
    <div>
        <h1>This is contact</h1>
    </div>
</template>

<script>
    export default {
        name: "Contact",
        activated() {
            // eslint-disable-next-line no-console
            console.log('Actived');
        },
        deactivated() {
            // eslint-disable-next-line no-console
            console.log('silencer&&55' +
                '');
        }
    }
</script>

<style scoped>

</style>