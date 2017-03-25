<template>
    <div class="content">
        <!-- list mode -->
        <div v-for="item in resumeData.skill">
            <!-- title-mode -->
            <div class="title-mode">
                <h2 class="title-cont">{{item.title}}</h2>
            </div>
            <!-- list-mode3 -->
            <div class="list-mode3">
                <ul class="clearfix">
                    <li class="list-item" v-for="subItem in item.description"><span class="item"><span v-bind:class="{'float-r tags-item tags-item2':subItem.grade=='精通', 'float-r tags-item tags-item3':subItem.grade=='熟练', 'float-r tags-item tags-item1':subItem.grade=='了解'}">{{subItem.grade}}</span>{{subItem.text}}</span></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'main',
        data() {
            return {
                headerConfig: {
                    title: 'Skill',
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