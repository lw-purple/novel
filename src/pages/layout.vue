<template>
    <div>
        <el-row>
            <el-col :span="16" :offset="4">
                <header-top></header-top>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="16" :offset="4">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </el-col>
        </el-row>
       
    </div>
</template>
<script>
import headerTop from '../components/header'
export default {
    name: "Layout",
    data() {
        return {


        };
    },
    components: {
        headerTop
    },
    created() {
        console.log(this.$route.path.slice(1))
    }
}
</script>
<style lang="scss" scoped>

</style>