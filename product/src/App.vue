<template>
    <div id="app">
        <img src="./assets/logo.png" class="logo">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    data(){
        return {
        }
    },
    mounted(){
    },
    methods: {
    }
}
</script>

<style>
body{background-color:#eee;}
.logo{display:block;width:320px;height:100px;margin:40px auto;}
</style>
