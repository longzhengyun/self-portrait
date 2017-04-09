<template>
    <div class="content">
        <!-- form-wrap -->
        <form class="form-mode" v-for="item in resumeData.experience">
            <div class="form-group form-twin-four form-single">
                <div class="group-name">企业名称</div>
                <div class="group-cont">{{item.title}}</div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-four form-single">
                <div class="group-name">入离时间</div>
                <div class="group-cont">{{item.time}}</div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-four form-single">
                <div class="group-name">所属行业</div>
                <div class="group-cont">{{item.industry}}</div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-four form-single">
                <div class="group-name">企业类型</div>
                <div class="group-cont">{{item.property}}</div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-four form-single">
                <div class="group-name">企业规模</div>
                <div class="group-cont">{{item.size}}</div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-four form-single">
                <div class="group-name">企业网站</div>
                <div class="group-cont"><a target="_blank" v-bind:href="item.website">{{item.tip}}</a></div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-four form-multi">
                <div class="group-name">企业介绍</div>
                <div class="group-cont">{{item.description}}</div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-four form-multi">
                <div class="group-name">个人职责</div>
                <div class="group-cont">{{item.duty}}</div>
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
                    title: '工作经历',
                    btnBack: true,
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
        }
    }
</script>