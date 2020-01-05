<template>
    <div id="app">
        <UserComponent/>
        <User/>
        <User89/>
        <User810/>
        <User811/>
    </div>
</template>

<script>



    import UserComponent from "./components/session8-video-6/UserComponent";
    import User from "./components/session8-video-8-callback/User";
    import User89 from "./components/session8-video-9/UserComponent";
    import User810 from "./components/session8-video-10/UserComponent";
    import User811 from "./components/session8-video-11/UserComponent";

    export default {
        name: 'app',
        components: {
            User811,
            User810,
            User89,
            UserComponent, User
        }
    }
</script>

<style>
</style>
