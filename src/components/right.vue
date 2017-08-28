<template>
    <div class="fav_wrap">
        <h4 class="fav_title">{{title}}</h4>
        <p class="fav_row" v-for="fav in favs" :key="fav.id">
            <router-link :to="'/'+fav.id">{{fav.name|bookNameF}}</router-link>
                <span>{{fav.author}}</span>
            </p>
    </div>
</template>
<script>
Vue.filter('bookNameF', function(value) {
    return `<<${value}>>`
})
export default {
    name: "Right",
    data() {
        return {
            title: '好看的最近更新列表',
            favs: [{
                id: '111',
                name: '连星',
                latestId: '333',
                latest: '第11111章',
                author: 'long'
            }, {
                id: '111',
                name: '连星',
                latestId: '333',
                latest: '第11111章',
                author: 'long'
            }]


        };
    }
}
</script>
<style lang="scss" scoped>
.fav_wrap {
    margin-top: 5px;
    width: 265px;
    border: 2px solid #88c6e5;
    .fav_title {
        background: #b6e3e8;
        font-size: 16px;
        font-weight: normal;
        line-height: 24px;
    }
    .fav_row {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px dashed #b6e3e8;
    }
    .fav_row:last-child {
        border-bottom: none;
    }
}
</style>