<template>
    <div style="width:980px;margin:0 auto">
        <header-top></header-top>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
       
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