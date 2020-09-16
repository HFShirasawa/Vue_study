<!--
 * @Author: your name
 * @Date: 2020-06-17 10:29:25
 * @LastEditTime: 2020-09-16 11:06:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \simc:\Users\31692\Desktop\test\src\views\login\login2.vue
-->
<template>
  <div>
    <div class="post">
      <p style="color:#007bf8;font-size:0.7rem;">账号登录</p>
      <router-link to="login3">
        <p style="color:#000">账号注册</p>
      </router-link>
    </div>
    <div class="inputdata">
      <img src="../../assets/img/login/phone.png" alt class="inputImg" />
      <input type="text" placeholder="请输入账号" class="inputText" v-model="fnk" maxlength="12" />
      <img src="../../assets/img/login/close.png" class="inputImg" @click="fnkon" />
    </div>
    <div class="inputdata">
      <img src="../../assets/img/login/jiesuo.png" alt class="inputImg" />
      <input
        type="password"
        placeholder="请输入密码"
        class="inputPassword"
        @mouseover="fnshow"
        @mouseout="fnshow2"
        maxlength="12"
      />
      <img src="../../assets/img/login/show_pwd.png" class="inputImg imgk2" v-show="show1" />
      <img src="../../assets/img/login/pwd.png" alt class="inputImg imgk3" v-show="show2" />
    </div>
    <router-link to="login5">
      <p class="font1">忘记密码?</p>
    </router-link>
    <div class="btn">登录</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      fnk: "",
      show1: true,
      show2: false,
    };
  },
  watch: {},
  computed: {},
  methods: {
    fnkon() {
      this.fnk = "";
    },
    fnshow() {
      this.show1 = false;
      this.show2 = true;
    },
    fnshow2() {
      this.show1 = true;
      this.show2 = false;
    },
    loadData() {
      this.$ajax
        .post(
          "/studentInfo/getStudentInfos",
          this.$qs.stringify({
            sname: "夕灰一片蓝",
          })
        )
        .then(function (res) {
          console.log(res.data);
        })
        .catch(function (res) {
          console.log(res);
        });
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="stylus" scoped>
@import '../../assets/css/common.styl';

.btn {
  width: 100%;
  height: 1.2rem;
  background: #0079f8;
  text-argin: center;
  line-height: 1.2rem;
  font-size: 0.5rem;
  color: #fff;
}
</style>