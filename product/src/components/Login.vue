<template>
    <div class="content">
        <form class="form-mode">
            <div class="form-group form-twin-three form-single">
                <div class="group-name">邀请码</div>
                <div class="group-cont">
                    <input type="password" class="form-input" placeholder="如果您是HR，请输入邀请码" v-model="localData.code" />
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
                localData: {
                    date: '',
                    code: ''
                },
                headerConfig: {
                    title: '验证访问权限',
                    btnBack: false,
                    btnHome: false
                }
            }
        },
        mounted(){
            this.$store.commit('setHeaderConfig', this.headerConfig);
        },
        watch: {
            'localData.code': 'isLogin'
        },
        methods: {
            isLogin() {
                if(this.localData.code.length >= 5 && MD5(this.localData.code) == CODE){
                    this.localData = {
                        code: CODE,
                        date: new Date().getTime()
                    };
                    window.localStorage['localData'] = JSON.stringify(this.localData);//本地存储用户信息

                    this.$store.commit('isLogin', this.localData);
                    this.$router.push({path: 'main'});
                }
            }
        }
    }
</script>