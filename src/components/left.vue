<template>
    <div class="fav_wrap">
            <h4 class="fav_title">{{title}}</h4>
            <p class="fav_row" v-for="fav in favs" :key="fav.id">
                <router-link :to="'/'+fav.id">{{fav.name |bookNameF}}</router-link>
                <router-link :to="'/'+fav.id+'/'+fav.latestId">{{fav.latestId}}</router-link>
                <span class="fav_author">{{fav.author}}</span>
            </p>
    </div>
</template>
<script>
import Vue from 'vue'
Vue.filter('bookNameF', function(value) {
    return `«${value}»`
})
export default {
    name: "Left",
    data() {
        return {
            title:'好看的最近更新列表',

        };
    },
    props:['favs']
}
</script>
<style lang="scss" scoped>
.fav_wrap{
    margin-top: 5px;
    width:693px;
    border: 2px solid #88c6e5;
    .fav_title{
        background: #b6e3e8;
        font-size: 16px;
        font-weight: normal;
        line-height: 24px;
    }
    .fav_row{
        border-bottom: 1px dashed #b6e3e8;
        padding: 0 5px;
        .fav_author{
            color:#999;
            float: right;
        }
    }
    .fav_row:last-child{
        border-bottom: none;
    }
}
</style>