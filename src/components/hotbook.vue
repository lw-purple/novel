<template>
    <div class="media_wrap">
        <router-link :to="{path:'/'+book.id,query:{title:book.name}}" tag="li" v-for="book in books" :key="book.id">
            <div class="media">
                <div class="media_left">
                    <img :src="book.img" alt="图片">
                </div>
                <div class="media_right">
                    <h4 class="media_title">
                        <span class="bookName">
                            {{book.name}}
                        </span>
                        <span class="bookAuthor">
                            {{book.author}}
                        </span>
                    </h4>
                    <p class="media_body">
                        {{book.abstract}}
                    </p>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    name: "Hotbook",
    data() {
        return {


        };
    },
    props: ["books"]
}
</script>
<style lang="scss" scoped>
.media_wrap {
    min-height: 310px;
    border: 2px solid #999;
    overflow: hidden
}
li{
    cursor: pointer;
}
.media {
    width: 33%;
    display: flex;
    float: left;
    height: 155px;
    .media_left {
        padding: 8px;
        width: 30%;
        img {
            max-width: 100%;
        }
    }
    .media_right {
        padding: 2px;
        width: 70%;
        .media_title {
            font-weight: normal;
            border-bottom: 1px dashed #666;
            display: flex;
            justify-content: space-between;
            span:first-child {
                color: blue
            }
        }
        .media_body {
            text-indent: 12px;
            color: #999;
            text-overflow: ellipsis;
            font-size: 14px;
        }
    }
}
</style>