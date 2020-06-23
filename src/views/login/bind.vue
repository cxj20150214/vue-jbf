<template>
  <div :style="{'width':this.$store.state.width_s+'px'}">
    <div class="shopbind">
      <div class="bind">
        <img class="logo" src="../../assets/img/chihuo.png" alt />
        <div class="box">
          <div class="txt_box">
            <el-form
              class="thisForm"
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="80px"
            >
              <el-form-item prop="mobile">
                <img class="bind_img1" src="../../assets/img/bind1 (1).png" alt />
                <input class="myInput" v-model="ruleForm.username" placeholder="输入手机号码" />
              </el-form-item>
              <el-form-item prop="smsvcode">
                <img class="bind_img1" src="../../assets/img/bind1 (2).png" alt />
                <input class="myInput" v-model="ruleForm.password" placeholder="输入验证码" />
                <div class="button yz">获取验证码</div>
              </el-form-item>
              <div v-loading="loading" class="button bd" @click="submitForm('ruleForm')">登录</div>
            </el-form>
          </div>
        </div>
        <p class="tis">(手机号:15605995727 验证码任意)</p>
      </div>
    </div>
    <div class="success" v-show="loginSuccess">登录成功</div>
    <div class="success" v-show="loginErr">账号或者密码不正确。</div>
  </div>
</template>
<script>
export default {
  name: "shopbind",
  data() {
    return {
      num: 0,
      // thisQuery: "",
      access_token: "",
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入手机号", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },
      loading: false,
      loginSuccess: false,
      loginErr: false
    };
  },
  components: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.ruleForm)
            .then(() => {
              this.loginSuccess = true;
              setTimeout(() => {
                this.$router.push({ path: "/food" });
                this.loginSuccess = false;
                this.loading = false;
              }, 1500);
            })
            .catch(() => {
              this.loading = false;
              console.log("错误");
            });
        } else {
          console.log("验证失败!!");
          return false;
        }
      });
    },
    verify() {
      this.$axios
        .post("/api/sms/send", {
          type: "login",
          mobile: this.ruleForm.mobile
        })
        .then(res => {
          console.log(res);
          if (res.code == 200) {
            alert("发送成功");
          } else {
            alert(res.message);
          }
        });
    }
  },
  mounted() {},
  created() {
    // this.thisQuery = this.$route.query;
    // console.log(this.thisQuery);
  }
};
</script>
<style lang="scss" scoped>
.shopbind {
  .now {
    width: 590px;
    margin: 0px auto;
    padding: 50px;
    border-bottom: 1px solid #d5d5d5;
    .tit {
      font-size: 32px;
      color: #7a7979;
      text-align: left;
    }
    .box {
      display: flex;
      flex-direction: row;
      margin-top: 40px;
      .txt_box {
        text-align: left;
        color: #999;
        font-size: 28px;
        margin-left: 30px;
        .t1 {
          font-size: 32px;
          color: #333;
        }
      }
      img {
        width: 90px;
        height: 90px;
        background-color: #d5d5d5;
        border-radius: 100px;
      }
      .t2 {
        margin-left: 200px;
        font-size: 28px;
        margin-top: 15px;
        color: #666;
      }
    }
  }
  .bind {
    display: flex;
    flex-direction: column;
    .logo {
      width: 250px;
      height: 250px;
      margin: 10vh auto 5vh;
      border-radius: 100%;
    }
    width: 590px;
    margin: 0px auto;
    padding: 50px;
    .tit {
      font-size: 32px;
      color: #7a7979;
      text-align: center;
    }
    .box {
      display: flex;
      flex-direction: row;
      margin-top: 40px;

      .txt_box {
        width: 100%;
        .bind_input {
          margin-bottom: 20px;
        }
        .input_box {
          width: 270px;
          height: 70px;
          border-bottom: 1px solid #d5d5d5;
          font-size: 28px;
          margin-bottom: 40px;
          float: left;
          &:focus {
            outline: none;
          }
        }
        .button {
          height: 65px;
          line-height: 65px;
          text-align: center;
          font-size: 28px;
          border-radius: 30px;
          float: right;
          margin-left: 20px;
          &.yz {
            width: 150px;
            color: #999;
          }
          &.bd {
            width: 100%;
            height: 80px;
            line-height: 80px;
            font-size: 32px;
            background-color: #ffc32e;
            color: #fff;
          }
        }
      }
    }
  }
}
.thisForm {
  .el-form-item__content {
    width: 100%;
  }
  .el-input {
    font-size: 24px !important;
    .el-input__inner {
      border: 0px !important;
    }
  }
}
.button1 {
  width: 100%;
  background-color: #6e84f5;
}
.myInput {
  width: 275px;
  height: 60px;
  font-size: 28px;
  padding-left: 10px;
  float: left;
  border: 0px;
}
.el-form-item__error {
  font-size: 16px;
}
</style>
<style lang="scss">
.thisForm {
  .bind_img1 {
    width: 25px;
    margin-top: 15px;
    float: left;
    margin-right: 20px;
  }
  .el-form-item {
    margin-bottom: 30px;
  }
  .el-form-item__content {
    border-bottom: 1px solid #d5d5d5;
    margin-left: 0px !important;
  }
  .el-form-item__error {
    font-size: 24px;
  }
}
.tis {
  font-size: 28px;
  color: #999;
}
.success {
  width: 30vw;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 26px;
  color: #fff;
  position: fixed;
  left: 35vw;
  top: 35vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999999;
  transition: all 0.3s;
}
</style>