<template>
    <div>
        <el-menu theme="light" class="el-menu-demo" mode="horizontal" router @select="handleSelect">
            <el-menu-item v-for="item in data" :index="item.path" :key="item.name">{{item.name}}</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: "Header",
    data() {
        return {
            data: [
                {
                    name: '首页',
                    path: '/home'
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
            console.log(key, keyPath);
        }
    }
}
</script>
<style lang="css" scoped>

</style>