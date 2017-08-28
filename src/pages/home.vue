<template>
    <div >
        <hot-book :books="books" ></hot-book>
        <div class="book_body">
            <left-book></left-book>
        <right-book></right-book>
        </div>
    </div>
</template>
<script>
import hotBook from '../components/hotbook'
import Logo from '../assets/logo.png'
import leftBook from '../components/left'
import rightBook from '../components/right'
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
        hotBook,leftBook,rightBook
    },
    created() {
        console.log(this.$route.path.slice(1))
        console.log(this)
    }
}
</script>
<style lang="scss" scoped>
.book_body{
  display:flex;
  justify-content: space-between;
}
</style>