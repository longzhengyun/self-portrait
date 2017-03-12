<template>
    <div class="info">
    </div>
</template>

<script>
export default {
    name: 'info',
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
            }
        }
    },
    methods: {
        login(){
            if(this.loginData.username == this.account.username && this.loginData.password == this.account.password){
                this.$router.push({path: 'info'});
            }else{
                console.log('验证失败！');
            }
        }
    }
}
</script>

<style scoped>

</style>
