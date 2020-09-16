<template>
  <div>
      <Routerstudy></Routerstudy>
      <Routerstudy1></Routerstudy1>
  </div>
</template>

<script>
export default {
data(){
    return{

    }
},
components:{
    Routerstudy:()=>import ('./Routerstudy.vue'),
    Routerstudy1:()=>import('./Routerstudy1.vue')
}
}
</script>

<style>

</style>