<template>
    <div class="header">
        <div class="header-cont">
            <!-- title -->
            <h1 class="header-title">{{headerConfig.title}}</h1>
            <!-- back -->
            <span class="header-icon icon-back" v-if="headerConfig.btnBack" v-on:click="goBack()"></span>
            <!-- home -->
            <!-- <router-link class="header-icon icon-home2" v-if="headerConfig.btnHome" to="/main"></router-link> -->
            <span class="header-icon icon-home2" v-if="headerConfig.btnHome" v-on:click="goHome()"></span>
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
        mounted(){
            this.getData();
        },
        methods: {
            goBack(){
                this.$router.go(-1);
            },
            goHome(){
                window.location.href = '/website/';//跳转website
            },
            arraySort(array, key){
                return array.sort(function(a, b){
                    var a = a[key];
                    var b = b[key];
                    if (a < b) {
                        return 1;
                    } else if (a > b) {
                        return -1;
                    } else {
                        return 0;
                    }
                })
            },
            getData(){
                this.$http.get(API_PATH + 'static/data/db_config.php?id=user_data').then((response) => {
                    let resumeData = response.body.db_data[0];

                    let year = new Date().getFullYear();
                    let month = (new Date().getMonth() + 1) > 9 ?  '' + (new Date().getMonth() + 1) : '0' + (new Date().getMonth() + 1);
                    let day = new Date().getDate() > 9 ? '' + new Date().getDate() : '0' + new Date().getDate();
                    let age = (year + month + day - resumeData.birthday.replace(/-/g,'')).toString().substr(0, 2);
                    let worklife = year - resumeData.worklife.toString().substr(0, 4);

                    //数据格式化
                    resumeData.photo = '/static/' + resumeData.photo;
                    resumeData.age = age;
                    resumeData.worklife = worklife;
                    resumeData.info = JSON.parse(resumeData.info);
                    resumeData.skill = JSON.parse(resumeData.skill);
                    resumeData.experience = JSON.parse(resumeData.experience);
                    resumeData.other = JSON.parse(resumeData.other);

                    this.$store.commit('getResumeData', resumeData);
                }).then((error)=> this.error = error);

                this.$http.get(API_PATH + 'static/data/db_config.php?id=case_data').then((response) => {
                    let caseData = this.arraySort(response.body.db_data, 'date');
                    caseData.forEach((value) => {
                        value.pages = JSON.parse(value.pages);
                    });

                    this.$store.commit('getCaseData', caseData);
                }).then((error)=> this.error = error)
            }
        }
    }
</script>
