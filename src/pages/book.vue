<template>
    <div>
        <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/' }">小小说</el-breadcrumb-item>
            <el-breadcrumb-item>{{breadcrumb}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button
    plain
    @click="open">
    可自动关闭
  </el-button>
    </div>
</template>
<script>
import get from '../service/service'
export default {
    name: "Book",
    data() {
        return {
            breadcrumb:''

        };
    },
    beforeCreate() {
        let path = this.$route.path.slice(1)
        get(path,{}).then(data=>{
            console.log(data)
        })
    },
    created(){
        this.breadcrumb=this.$route.query.title
    },
    methods:{
         open() {
        const h = this.$createElement;

        this.$notify.success({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'),
          offset:500
        });
      },
    }
}
</script>
<style lang="scss" scoped>

</style>