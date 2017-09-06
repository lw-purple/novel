<template>
    <div>
        <hot-book :books="books"></hot-book>
        <div class="book_body">
            <left-book :favs="favsl"></left-book>
            <right-book :favs="favsr"></right-book>
        </div>
        <div id="myChart"  :style="{width: '300px', height: '300px'}"></div>
        <el-radio-group v-model="radio" @change="change">
            <el-radio :label="b1">备选项</el-radio>
            <el-radio :label="b2">备选项</el-radio>
        </el-radio-group>
        <button @click="alert1">
            弹出
        </button>
    </div>
</template>
<script>
import hotBook from '../components/hotbook'
import leftBook from '../components/left'
import rightBook from '../components/right'
import get from '../service/service'

export default {
    name: "Home",
    data() {
        return {
            books: [],
            favsl: [],
            favsr: [],
            radio: '1',
            b1: '1',
            b2: '2'
        };
    },
    components: {
        hotBook, leftBook, rightBook
    },
    beforeCreate() {
        let path = this.$route.path.slice(1)
        get(path + '/hotbook', {}).then((data) => {
            this.books = data.data.books
        })
        get(path + '/favlbook', {}).then((data) => {
            this.favsl = data.data.books
        })
        get(path + '/favrbook', {}).then((data) => {
            this.favsr = data.data.books
        })
    },
    created() {
    },
    methods: {
        change(e) {
            console.log(e)

            let path = this.$route.path.slice(1)
            get(path + '/hotbook', {}).then((data) => {
                this.radio = '1'
            })
        },
        alert1() {
            this.radio = '2'
        },
        drawLine() {
            console.log(this)
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: { text: '在Vue中使用echarts' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        }
    },
    mounted(){
        this.drawLine()
    }
}
</script>
<style lang="scss" scoped>
.book_body {
    display: flex;
    justify-content: space-between;
}
</style>