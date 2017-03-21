<template>
    <div class="content">
        <!-- sub menu -->
        <div class="sub-menu">
            <ul class="sub-menu-cont">
                <li v-for="item in initSubMenu.items" v-bind:class="{true:'menu-item cur', false:'menu-item'}[item.isCurrent]" v-on:click="subMenuAction(item)">{{item.itemName}}</li>
            </ul>
        </div>
        <!-- case list -->
        <ul class="list-mode2 case-list">
            <li class="list-item" v-for="item in caseData">
                <h2 class="item-title">{{item.title}}</h2>
                <p class="item-info">{{item.description}}</p>
                <div class="clearfix">
                    <div class="item-data"><span class="data-date">{{item.date}}</span></div>
                    <div class="item-tags" v-if="initSubMenu.tagsShow"><span v-bind:class="{'tags-item tags-item1':item.category=='Mobile', 'tags-item tags-item2':item.category=='PC'}">{{item.category}}</span></div>
                </div>
                <a href="#" v-bind:title="item.title" class="item-link"></a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'main',
        data() {
            return {
                headerConfig: {
                    title: '个人案例',
                    btnBack: true,
                    btnHome: true
                },
                initSubMenu: {
                    items:[
                        {itemName:'全部', itemKey:'', isCurrent:true},
                        {itemName:'Mobile', itemKey:'Mobile', isCurrent:false},
                        {itemName:'PC', itemKey:'PC', isCurrent:false}
                    ],
                    tagsKey:'',
                    tagsShow:true
                },
                caseData: {}
            }
        },
        mounted(){
            this.$store.commit('setHeaderConfig', this.headerConfig);
        }
    }
</script>