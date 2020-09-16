<template>
  <div>
      <p>我需要向其他组件传值</p>
      <button @click="get">发送数值到event Bus中</button>
      <Routerstudy1/>
  </div>
</template>

<script>
export default {
    data(){
        return{
            msg:"ccs"
        }
    },
    methods:{
        get(){
            console.log("Aaa");
            window.eventBus.$emit('eventBusName',this.msg);
        }
    },

}
</script>

<style>

</style>