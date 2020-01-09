<template>
    <div>
        <p>Nội dung title la 1 {{title}}</p>
    </div>
</template>

<script>
    //Props truyền dữ liệu từ cha sang con, và các component con truyền sự kiện sang component cha
    export default {
        name: "UserComponentDetail1",
        props:['title']

    }
</script>

<style scoped>

</style>