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
            },
            staticPath(){
                return this.$store.state.staticPath
            }
        },
        mounted(){
            this.getData('user_data');
        },
        methods: {
            goBack(){
                this.$router.go(-1);
            },
            getData(dataVAR){
                this.$http.get(this.staticPath + 'static/data/db_config.php?id=' + dataVAR).then((response) => {
                    // this.$store.commit('getResumeData', response.body.db_data[0]);
                }).then((error)=> this.error = error)
            }
        }
    }
</script>
