<template>
    <div class="content case-detail">
        <!-- title-mode -->
        <div class="title-mode">
            <h2 class="title-cont">Data</h2>
        </div>
        <!-- form-wrap -->
        <form class="form-mode">
            <div class="form-group form-twin-two form-single">
                <div class="group-name">所属</div>
                <div class="group-cont">{{detailData.belong}}</div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-two form-single">
                <div class="group-name">分类</div>
                <div class="group-cont">{{detailData.category}}</div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-two form-single">
                <div class="group-name">日期</div>
                <div class="group-cont">{{detailData.date}}</div>
            </div>
            <div class="line-between"></div>
            <div class="form-group form-twin-two form-multi">
                <div class="group-name">简介</div>
                <div class="group-cont">{{detailData.description}}</div>
            </div>
        </form>
        <!-- title-mode -->
        <div class="title-mode">
            <h2 class="title-cont">Pages</h2>
        </div>
        <!-- list mode -->
        <div class="list-mode1 gap-bottom">
            <div class="mode-cont">
                <ul class="clearfix">
                    <li class="list-item" v-for="item in detailData.pages"><a target="_blank" class="item" v-bind:href="'/static/case/' + item.url">{{item.name}}</a></li>
                </ul>
            </div>
        </div>
        <!-- title-mode -->
        <div class="title-mode" v-if="recommendData.length">
            <h2 class="title-cont">Recommend</h2>
        </div>
        <!-- list mode -->
        <div class="list-mode1" v-if="recommendData.length">
            <div class="mode-cont">
                <ul class="clearfix">
                    <li class="list-item" v-for="item in recommendData"><a class="item" v-bind:href="item.id">{{item.title}}</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'caseDetail',
        data() {
            return {
                id: this.$route.params.id,
                headerConfig: {
                    title: '',
                    btnBack: true,
                    btnHome: true
                },
                detailData: {},
                recommendData: []
            }
        },
        mounted(){
            this.getDetailData();
            this.$store.commit('setHeaderConfig', this.headerConfig);
        },
        computed: {
            caseData(){
                return this.$store.state.caseData
            }
        },
        watch: {
            caseData: 'getDetailData',
            detailData: 'getRecommendData'
        },
        methods: {
            getDetailData(){
                if(!this.isEmptyObject(this.caseData)){
                    this.caseData.forEach((value) => {
                        //当前ID数据
                        if(value.id == this.id){
                            this.detailData = value;
                            this.headerConfig.title = value.title;
                        };
                    });
                }
            },
            getRecommendData(){
                if(!this.isEmptyObject(this.caseData)){
                    this.caseData.forEach((value) => {
                        //当前ID相关推荐数据
                        if(value.id != this.detailData.id && value.belong == this.detailData.belong && value.hot == 'y' && this.recommendData.length < 4){
                            this.recommendData.push(value);
                        };
                    });
                }
            },
            isEmptyObject(obj) {
                for (var key in obj) {
                    return false;
                }
                return true;
            }
        }
    }
</script>