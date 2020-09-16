<!--
 * @Author: your name
 * @Date: 2020-06-18 13:43:04
 * @LastEditTime: 2020-09-14 10:05:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \simc:\Users\31692\Desktop\test\src\views\login\login4.vue
-->
<template>
<div>
      <div class="inputdata">
        <img src="../../assets/img/login/phone.png" alt="" class="inputImg">
        <input type="text" placeholder="请输入注册手机号" class="inputText" v-model="fnk" maxlength="12">
        <img src="../../assets/img/login/close.png" class="inputImg" @click="fnkon">
        </div>
        <div class="inputdata">
        <img src="../../assets/img/login/jiesuo.png" alt="" class="inputImg">
        <input type="password" placeholder="请设置登录密码" class="inputPassword" @mouseover="fnshow" @mouseout="fnshow2" maxlength="12">
        <img src="../../assets/img/login/show_pwd.png" class="inputImg imgk2" v-show="show1">
        <img src="../../assets/img/login/pwd.png" alt="" class="inputImg imgk3" v-show="show2">
      </div>
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