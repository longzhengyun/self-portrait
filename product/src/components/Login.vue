<template>
    <div class="login">
        <h1 class="login-title">{{msg}}</h1>
        <input type="text" v-model="loginData.username">
        <input type="password" v-model="loginData.password">
        <button v-on:click="login">访问</button>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            msg: '请验证访问身份！',
            account: {
                username:'hr',
                password:'iamhr'
            },
            loginData: {
                username:'',
                password:''
            },
            resumeData:{}
        }
    },
    mounted(){
        this.getValidate()
    },
    methods: {
        login(){
            if(this.loginData.username == this.account.username && this.loginData.password == this.account.password){
                var now = new Date().getTime();
                this.resumeData.date = now;
                this.resumeData.pass = true;
                this.setLocalData('resumeData', this.resumeData); //本地存储用户数据
                this.$router.push({path: 'info'});
            }else{
                console.log('验证失败！');
            }
        },
        getValidate(){
            var now = new Date().getTime();
                this.resumeData = this.getLocalData('resumeData');
            if(this.resumeData.pass && (now - this.resumeData.date) < 3600000){
                this.resumeData.date = now;
                this.setLocalData('resumeData', this.resumeData); //本地存储用户数据
                this.$router.push({path: 'info'});
            };
        },
        setLocalData: function(key, value) {
            window.localStorage[key] = JSON.stringify(value);
        },
        getLocalData(key){
            return JSON.parse(window.localStorage[key] || '{}');
        }
    }
}
</script>

<style scoped>

</style>
