<template>
    <div class="content">
        <!-- sub menu -->
        <div class="sub-menu">
            <ul class="sub-menu-cont">
                <li v-for="item in initSubMenu.items" class="menu-item" v-bind:class="{'cur':item.isCurrent}" v-on:click="subMenuAction(item)">{{item.itemName}}</li>
            </ul>
        </div>
        <!-- case list -->
        <ul class="list-mode2 case-list">
            <li class="list-item" v-for="item in caseData" v-if="!item.hide">
                <h2 class="item-title">{{item.title}}</h2>
                <p class="item-info">{{item.description}}</p>
                <div class="clearfix">
                    <div class="item-data"><span class="data-date">{{item.date}}</span></div>
                    <div class="item-tags" v-if="!initSubMenu.tagsKey"><span v-bind:class="{'tags-item tags-item1':item.category=='Mobile', 'tags-item tags-item2':item.category=='PC'}">{{item.category}}</span></div>
                </div>
                <router-link v-bind:to="'casedetail/' + item.id" v-bind:title="item.title" class="item-link"></router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'caseList',
        data() {
            return {
                headerConfig: {
                    title: '个人案例',
                    btnBack: true,
                    btnHome: true
                },
                initSubMenu: {
                    items:[
                        {itemName:'All', itemKey:null, isCurrent:true},
                        {itemName:'Mobile', itemKey:'Mobile', isCurrent:false},
                        {itemName:'PC', itemKey:'PC', isCurrent:false}
                    ],
                    tagsKey:null
                }
            }
        },
        mounted(){
            this.$store.commit('setHeaderConfig', this.headerConfig);
        },
        computed: {
            caseData(){
                return this.$store.state.caseData
            }
        },
        methods: {
            subMenuAction(item){
                this.initSubMenu.items.forEach((value) => {
                    value.isCurrent = false;
                });

                item.isCurrent = true;
                this.initSubMenu.tagsKey = item.itemKey;

                this.caseData.forEach((value) => {
                    value.hide = false;
                    if(value.category !== item.itemKey && item.itemKey !== null){
                        value.hide = true;
                    }
                });
            }
        }
    }
</script>