<template>
  <div>
    <div @click="logout">退出登录</div>
  </div>
</template>
<script>
export default {
  name: "foodlist",
  methods: {
    logout() {
      this.$store.dispatch("user/logout").then(() => {
           this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      });
    }
  }
};
</script>