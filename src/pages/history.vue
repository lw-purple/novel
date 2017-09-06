<template>
    <div>
        <hot-book :books="books"></hot-book>
        <div class="book_body">
            <!-- <left-book :favs="favsl"></left-book>
            <right-book :favs="favsr"></right-book> -->
        </div>
    </div>
</template>
<script>
import hotBook from '../components/hotbook'
import leftBook from '../components/left'
import rightBook from '../components/right'
import get from '../service/service'
    export default {
    name: "History",
    data () {
        return {
             books: [],
            favsl:[],
            favsr:[]

        };
    },
     components: {
        hotBook, leftBook, rightBook
    },
    beforeCreate(){
        //   let path =this.$route.path.slice(1)
        // get(path+'/hotbook', {}).then((data) => {
        //     this.books = data.data.books
        // })
        // get(path+'/favlbook', {}).then((data) => {
        //     this.favsl = data.data.books
        // })
        // get(path+'/favrbook', {}).then((data) => {
        //     this.favsr = data.data.books
        // })
    }
}
</script>
<style lang="scss" scoped>
.book_body {
    display: flex;
    justify-content: space-between;
}

</style>