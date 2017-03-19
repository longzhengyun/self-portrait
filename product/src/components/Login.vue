<template>
    <div class="content">
        <form class="form-mode">
            <div class="form-group form-twin-three form-single">
                <div class="group-name">邀请码</div>
                <div class="group-cont">
                    <input type="password" class="form-input" placeholder="如果您是HR，请输入邀请码" v-model="inviteCode" />
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                inviteCode: '',
                userData: {
                    username: 'hr',
                    initCode: 'iamhr'
                },
                headerConfig: {
                    title: '验证访问权限',
                    btnBack: false,
                    btnHome: false
                }
            }
        },
        mounted(){
            this.$store.commit('headerConfig', this.headerConfig);
        },
        watch: {
            inviteCode: 'isLogin'
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        },
        methods: {
            isLogin() {
                // this.$http.get('http://localhost:3000/users?username=' + this.name + '&password=' + this.pwd).then((response) => {
                //     //这里在isLogin方法中先判断一下后台返回的是否为空值，如果不是然后提交后台返回的值。
                //     //注意这里是个难点，Vuex与Vue-Resource结合使用。 
                //     if(response.body != null & response.body.length > 0){ 
                //         this.$store.commit('isLogin', response.body[0]);
                //         this.name = '';
                //         this.pwd = '';
                //         this.$router.push({ path: 'main' });
                //     }else{
                //         alert('请输入正确的用户名和密码！！！');
                //         this.name = '';
                //         this.pwd = '';
                //     }
                // }).then((error)=> this.error = error)

                if(this.inviteCode == this.userData.initCode){
                    this.$store.commit('isLogin', this.userData);
                    this.$router.push({path: 'main'});
                }
            }
        }
    }
</script>