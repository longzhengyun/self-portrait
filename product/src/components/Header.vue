<template>
    <div class="header">
        <div class="header-cont">
            <!-- title -->
            <h1 class="header-title">{{headerConfig.title}}</h1>
            <!-- back -->
            <span class="header-icon icon-back" v-if="headerConfig.btnBack" v-on:click="goBack()"></span>
            <!-- home -->
            <router-link class="header-icon icon-home2" v-if="headerConfig.btnHome" to="main"></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'header',
        computed: {
            headerConfig(){
                return this.$store.state.headerConfig
            }
        },
        methods: {
            goBack(){
                this.$router.go(-1);
            }
        }
    }
</script>
