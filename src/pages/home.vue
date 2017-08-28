<template>
    <div >
        <hot-book :books="books" ></hot-book>
        <div>asdfa</div>
    </div>
</template>
<script>
import hotBook from '../components/hotbook'
import Logo from '../assets/logo.png'
export default {
    name: "Home",
    data() {
        return {
            books: [{
                id: "111",
                name: '武动乾坤',
                img: Logo,
                author: "long",
                abstract: "我做了一个梦，然后世界就变成了一款游戏，世界背景被游戏随机修改了，幡然一新，历史与社会结构虽然变化不大，但却没有了那些我熟知的综艺节目、音乐作品、文学作品和影视作品。."
            }, {
                id: "111",
                name: '武动乾坤',
                img: Logo,
                author: "long",
                abstract: "我做了一个梦，然后世界就变成了一款游戏，世界背景被游戏随机修改了，幡然一新，历史与社会结构虽然变化不大，但却没有了那些我熟知的综艺节目、音乐作品、文学作品和影视作品。."
            }, {
                id: "111",
                name: '武动乾坤',
                img: Logo,
                author: "long",
                abstract: "我做了一个梦，然后世界就变成了一款游戏，世界背景被游戏随机修改了，幡然一新，历史与社会结构虽然变化不大，但却没有了那些我熟知的综艺节目、音乐作品、文学作品和影视作品。."
            }, {
                id: "111",
                name: '武动乾坤',
                img: Logo,
                author: "long",
                abstract: "我做了一个梦，然后世界就变成了一款游戏，世界背景被游戏随机修改了，幡然一新，历史与社会结构虽然变化不大，但却没有了那些我熟知的综艺节目、音乐作品、文学作品和影视作品。."
            }, {
                id: "111",
                name: '武动乾坤',
                img: Logo,
                author: "long",
                abstract: "我做了一个梦，然后世界就变成了一款游戏，世界背景被游戏随机修改了，幡然一新，历史与社会结构虽然变化不大，但却没有了那些我熟知的综艺节目、音乐作品、文学作品和影视作品。."
            }, {
                id: "111",
                name: '武动乾坤',
                img: Logo,
                author: "long",
                abstract: "我做了一个梦，然后世界就变成了一款游戏，世界背景被游戏随机修改了，幡然一新，历史与社会结构虽然变化不大，但却没有了那些我熟知的综艺节目、音乐作品、文学作品和影视作品。."
            }]

        };
    },
    components: {
        hotBook
    },
    created() {
        console.log(this.$route.path.slice(1))
    }
}
</script>
<style lang="scss" scoped>

</style>