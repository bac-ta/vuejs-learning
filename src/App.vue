<template>
    <div id="app">
        <!--        <UserComponent/>-->
        <!--        <User/>-->
        <!--        <User89/>-->
        <!--        <User810/>-->
        <!--        <User811/>-->
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <button @click="selectedComponent ='About'">About</button>
                    <button @click="selectedComponent ='Card'">Card</button>
                    <button @click="selectedComponent ='Contact'">Contact</button>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <keep-alive>
                        <component :is="selectedComponent"/>
                    </keep-alive>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    // import UserComponent from "./components/session8-video-6/UserComponent";
    // import User from "./components/session8-video-8-callback/User";
    // import User89 from "./components/session8-video-9/UserComponent";
    // import User810 from "./components/session8-video-10/UserComponent";
    // import User811 from "./components/session8-video-11/UserComponent";
    import About from "./components/section9-video10/About";
    import Card from "./components/section9-video10/Card";
    import Contact from "./components/section9-video10/Contact";


    export default {
        name: 'app',
        components: {
            // User811,
            // User810,
            // User89,
            // UserComponent, User
            About, Card, Contact
        },
        data() {
            return {
                selectedComponent: ''
            }
        }
    }
</script>

<style>
</style>
