<template>
    <div class="content">
        <form class="form-mode">
            <div class="resume-photo"><img v-bind:src="resumeData.photo"></div>
            <div class="form-group form-twin-four form-single">
                <div class="group-name">姓名</div>
                <div class="group-cont">{{resumeData.user}} <span class="color-gray">({{resumeData.nickname}})</span></div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-four form-single">
                <div class="group-name">年龄</div>
                <div class="group-cont">{{resumeData.age}}</div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-four form-single">
                <div class="group-name">手机</div>
                <div class="group-cont">{{resumeData.phone}}</div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-four form-single">
                <div class="group-name">Email</div>
                <div class="group-cont">{{resumeData.email}}</div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-four form-single">
                <div class="group-name">GitHub</div>
                <div class="group-cont"><a v-bind:href="resumeData.github" target="_blank">{{resumeData.github}}</a></div>
            </div>
        </form>
        <form class="form-mode">
            <div class="form-group form-twin-four form-single">
                <div class="group-name">学历</div>
                <div class="group-cont">{{resumeData.degrees}}</div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-four form-single">
                <div class="group-name">专业</div>
                <div class="group-cont">{{resumeData.major}}</div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-four form-single">
                <div class="group-name">职业</div>
                <div class="group-cont">{{resumeData.job}}</div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-four form-single">
                <div class="group-name">工作年限</div>
                <div class="group-cont">{{resumeData.worklife}}年</div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-four form-single">
                <div class="group-name">工作状态</div>
                <div class="group-cont">{{resumeData.state}}</div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-four form-single">
                <div class="group-name">期望年薪</div>
                <div class="group-cont">{{resumeData.salary}}</div>
            </div>
        </form>
        <form class="form-mode">
            <div class="form-group form-twin-four form-single">
                <div class="group-name">个人案例</div>
                <div class="group-cont group-arrow" v-on:click="goTarget('caselist')"></div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-four form-single">
                <div class="group-name">职业评价</div>
                <div class="group-cont group-arrow" v-on:click="goTarget('info')"></div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-four form-single">
                <div class="group-name">职业技能</div>
                <div class="group-cont group-arrow" v-on:click="goTarget('skill')"></div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-four form-single">
                <div class="group-name">工作经历</div>
                <div class="group-cont group-arrow" v-on:click="goTarget('experience')"></div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-four form-single">
                <div class="group-name">其他信息</div>
                <div class="group-cont group-arrow" v-on:click="goTarget('other')"></div>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        name: 'main',
        data() {
            return {
                headerConfig: {
                    title: 'Resume',
                    btnBack: false,
                    btnHome: true
                }
            }
        },
        mounted(){
            this.$store.commit('setHeaderConfig', this.headerConfig);
        },
        computed: {
            resumeData(){
                return this.$store.state.resumeData
            }
        },
        methods: {
            goTarget(target){
                this.$router.push({path: target});
            }
        }
    }
</script>