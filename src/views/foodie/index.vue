<template>
  <div :style="{'width':this.$store.state.width_s+'px'}">
    <router-view class="content"></router-view>
    <div class="foot">
      <a @click="toFoodlist">
        <img v-show="activeEat" src="../../assets/img/homeActive.png" alt />
        <img v-show="Eat" src="../../assets/img/home.png" alt />
        <p :class="{active:show==1}">吃什么</p>
      </a>
      <a @click="toCenter">
        <img v-show="Eat" src="../../assets/img/centerActive.png" alt />
        <img v-show="activeEat" src="../../assets/img/center.png" alt />
        <p :class="{active:show==2}">我的</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "food",
  data() {
    return {
      activeEat: true,
      Eat: false,
      show: 1
    };
  },
  methods: {
    toFoodlist() {
      this.$router.push({ path: "/food/foodlist" });
      this.activeEat = true;
      this.Eat = false;
      this.show = 1;
    },
    toCenter() {
      this.$router.push({ path: "/food/center" });
      this.activeEat = false;
      this.Eat = true;
      this.show = 2;
    }
  }
};
</script>
<style lang="scss">
.content {
  width: 100vw;
  min-height: 100vh;
  padding-bottom:80px;
  background-color: #f3f3f3;
}
.foot {
  width: 100%;
  position: fixed;
  height: 100px;
  display: flex;
  font-size: 32px;
  bottom: 0px;
  background-color: #fff;
  border-top: 1px solid #d5d5d5;
  a {
    width: 50%;
    text-align: center;
    color: #999;
    img {
      width: 50px;
      margin-top: 10px;
    }
    p {
      margin-top: 0px;
      font-size: 24px;
      &.active {
        color: #ff2757;
      }
    }
  }
}
</style>