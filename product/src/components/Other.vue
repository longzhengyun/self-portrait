<template>
    <div class="content">
        <div v-for="item in resumeData.other">
            <!-- title-mode -->
            <div class="title-mode">
                <h2 class="title-cont">{{item.title}}</h2>
            </div>
            <!-- form-wrap -->
            <form class="form-mode">
                <div class="form-group form-multi">
                    <div class="group-cont">{{item.description}}</div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'other',
        data() {
            return {
                headerConfig: {
                    title: '其他信息',
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