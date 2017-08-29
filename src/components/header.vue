<template>
    <div>

        <el-menu theme="light" class="el-menu-demo" mode="horizontal" router @select="handleSelect">
            <el-menu-item v-for="item in data" :index="item.path" :key="item.name">{{item.name}}</el-menu-item>
            <div class="search">
                <el-input placeholder="搜索喜欢的小说" icon="search" v-model="input2" :on-icon-click="handleIconClick">
                </el-input>
            </div>
        </el-menu>

    </div>
</template>
<script>
export default {
    name: "Header",
    data() {
        return {
            input2: '',
            data: [
                {
                    name: '首页',
                    path: '/'
                },
                {
                    name: '玄幻',
                    path: '/fantasy'
                },
                {
                    name: '修真',
                    path: '/xiuzhen'
                },
                {
                    name: '都市',
                    path: '/urban'
                },
                {
                    name: '历史',
                    path: '/history'
                },
                {
                    name: '其他',
                    path: '/other'
                }
            ]
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleIconClick(ev){
            console.log(this.input2)
            console.log(ev.target.value)
        }
    }
}
</script>
<style lang="css" scoped>
.search{
    display: inline-block;
    float: right;
    margin-top: 10px;
}
</style>