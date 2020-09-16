<template>
<div>
    <div class="felxs"><router-link to="/">账号登录</router-link></div>
    <div class="post">
      <p style="color:#007bf8;font-size:0.7rem;">账号注册</p>
      </div>
      <loginInput2/>
        <div class="inputdata">
        <img src="../../assets/img/login/phone.png" alt="" class="inputImg">
        <input type="text" placeholder="请输入图形验证码" class="inputText" v-model="fnk">
        </div>
    <div class="inputdata">
        <img src="../../assets/img/login/dun.png" alt="" class="inputImg">
        <input type="password" placeholder="请输入验证码" class="inputPassword inputPassword2" @mouseover="fnshow" @mouseout="fnshow2">
        <p class="inputImg imgk3" style="">获取验证码</p>
      </div>
      
    
        <p class="font1">忘记密码?</p>
     <div style="width:100%;height:1.2rem;background:#0079f8;text-argin:center;line-height:1.2rem;font-size:0.5rem;color:#fff">注册</div>
     </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      fnk:'',
      show1:true,
      show2:false,
    }
  },
  watch:{},
  computed:{},
  methods:{
      fnkon(){
        this.fnk = '';
      },
      fnshow(){
        this.show1=false;
        this.show2=true;
      },
      fnshow2(){
        this.show1=true;
        this.show2=false;
      }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="stylus" scoped>
@import '../../assets/css/common.styl';
</style>