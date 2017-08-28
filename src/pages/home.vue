<template>
   <div>
       我是主页
   </div>

</template>
<script>
export default {
   name: "Home",
   data() {
      return {


      };
   },
   components:{
   },
   created(){
       console.log(this.$route.path.slice(1))
   }
}
</script>
<style lang="scss" scoped>


</style>