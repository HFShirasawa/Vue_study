<template>
  <div>
      <p>我要接受从其他页面传过来值</p>
      <button @click="btnShow">接受</button>
      <p v-text="msgl"></p>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    data(){
        return{
            msgl:'子组件默认值'
        }
    },
    methods:{
        btnShow(){
            console.log("bbb");
            window.eventBus.$on("eventBusName",(msg)=>{this.msgl=msg});
        }
    }
}
</script>

<style>

</style>